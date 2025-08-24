import { useEffect, useRef, useState } from "react";

/** Single element reveal: returns ref + boolean */
export function useReveal<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1, ...(options || {}) }
    );
    observer.observe(node as Element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible } as const;
}

/** List reveal with stagger; no spread on Set (ES5-safe) */
export function useRevealList<T extends HTMLElement = HTMLElement>(count: number, staggerDelay = 60, options?: IntersectionObserverInit) {
  const refs = useRef<(T | null)[]>([]);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      // if not supported, mark all visible
      const all = new Set<number>();
      for (let i = 0; i < count; i++) all.add(i);
      setVisible(all);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = (entry.target as HTMLElement).dataset.index;
          const index = Number(indexAttr ?? 0);
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              setVisible((prev) => {
                const next = new Set(prev); // NO spread — ES5-safe
                next.add(index);
                return next;
              });
            }, Math.min(index, 7) * staggerDelay); // Cap stagger to first 8 items
            observer.unobserve(entry.target); // Only trigger once per element
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1, ...(options || {}) }
    );

    refs.current.forEach((el, i) => {
      if (el) {
        (el as HTMLElement).dataset.index = String(i);
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [count, staggerDelay, options]);

  const setRef = (index: number) => (el: T | null) => {
    refs.current[index] = el;
  };

  const isVisible = (index: number) => visible.has(index);

  return { setRef, isVisible } as const;
}

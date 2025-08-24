import { useEffect, useRef, useState } from "react";

export function useInViewport<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { 
        threshold: 0.1, 
        rootMargin: "50px",
        ...(options || {}) 
      }
    );

    observer.observe(node as Element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView } as const;
}

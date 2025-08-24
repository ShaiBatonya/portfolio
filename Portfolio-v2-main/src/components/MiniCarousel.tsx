import React from "react";
import SmartImage from "./UI/SmartImage";
import { FALLBACK } from "../config/images";
import { useInViewport } from "../hooks/useInViewport";

export type Img = { src: string; alt: string };

type Props = { 
  images: Img[]; 
  titleForA11y: string;
  isFirstOnPage?: boolean; 
};

export default React.memo(function MiniCarousel({ images, titleForA11y, isFirstOnPage = false }: Props) {
  const [i, setI] = React.useState(0);
  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0 });
  const { ref: viewportRef, inView } = useInViewport<HTMLDivElement>();
  const size = images.length;
  
  const prev = React.useCallback(() => setI(v => (v - 1 + size) % size), [size]);
  const next = React.useCallback(() => setI(v => (v + 1) % size), [size]);
  
  const onKey = React.useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { 
      e.preventDefault(); 
      prev(); 
    }
    if (e.key === "ArrowRight") { 
      e.preventDefault(); 
      next(); 
    }
  }, [prev, next]);

  // Touch/swipe support
  const [startX, setStartX] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    setStartX(touch.clientX);
    setIsDragging(true);
  }, []);

  const handleTouchEnd = React.useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const touch = e.changedTouches[0];
    if (!touch) return;
    
    const endX = touch.clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 40) { // 40px threshold
      requestAnimationFrame(() => {
        if (diff > 0) {
          next();
        } else {
          prev();
        }
      });
    }

    setIsDragging(false);
  }, [isDragging, startX, next, prev]);

  // Parallax tilt with rAF throttling - disabled on touch/reduced-motion
  const shouldUseTilt = React.useMemo(() => {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches && 
           !('ontouchstart' in window);
  }, []);

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!shouldUseTilt) return;
    
    const target = e.currentTarget;
    if (!target) return;
    
    requestAnimationFrame(() => {
      try {
        const rect = target.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        // Clamp to ±6deg
        const rx = Math.max(-6, Math.min(6, y * -12));
        const ry = Math.max(-6, Math.min(6, x * 12));
        
        setTilt({ rx, ry });
      } catch (error) {
        // Silently fail if element is not available
      }
    });
  }, [shouldUseTilt]);

  const handleMouseLeave = React.useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
  }, []);

  const shouldRender = inView || isFirstOnPage;

  return (
    <div 
      ref={viewportRef}
      className="media-16x9" 
      role="region" 
      aria-roledescription="carousel" 
      aria-label={`${titleForA11y} media`} 
      onKeyDown={onKey} 
      tabIndex={0}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: isDragging ? 'none' : 'transform var(--dur-2) var(--ease-snappy)'
      }}
    >
      {shouldRender && images.map((img, idx) => (
        <div 
          key={img.src} 
          style={{
            position: 'absolute',
            inset: 0,
            opacity: idx === i ? 1 : 0,
            transition: 'opacity var(--dur-2) var(--ease-snappy)'
          }}
        >
          <SmartImage 
            src={img.src} 
            alt={img.alt} 
            priority={idx === 0 && isFirstOnPage} 
            fetchPriority={idx === 0 && isFirstOnPage ? "high" : "auto"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            aspect="16/9"
            fallbackSrc={FALLBACK.src}
          />
        </div>
      ))}
      
      {size > 1 && (
        <>
          <div className="pro-nav" aria-hidden="true">
            <button 
              className="pro-btn pro-prev" 
              onClick={prev} 
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24">
                <path d="M15.5 19 8.5 12l7-7"/>
              </svg>
            </button>
            <button 
              className="pro-btn pro-next" 
              onClick={next} 
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24">
                <path d="M8.5 5 15.5 12l-7 7"/>
              </svg>
            </button>
          </div>
          
          <div className="pro-dots" role="tablist" aria-label="Pagination">
            {images.map((_, idx) => (
              <button 
                key={idx} 
                className="pro-dot" 
                role="tab" 
                aria-current={i === idx} 
                aria-label={`Show image ${idx + 1} of ${size}`} 
                onClick={() => setI(idx)} 
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
});
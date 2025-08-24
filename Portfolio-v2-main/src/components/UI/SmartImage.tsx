import React from "react";

// Extend img element interface to include fetchPriority
declare module "react" {
  interface ImgHTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fetchPriority?: "high" | "low" | "auto";
  }
}

type Props = {
  src: string; 
  alt: string; 
  priority?: boolean;
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
  onLoadComplete?: () => void;
  className?: string; 
  aspect?: `${number}/${number}`; // e.g. "16/9"
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  fallbackSrc?: string;
};

export default function SmartImage({ 
  src, 
  alt, 
  priority, 
  fetchPriority,
  sizes,
  onLoadComplete,
  className, 
  aspect = "16/9", 
  onClick, 
  fallbackSrc 
}: Props) {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  
  const w = aspect.split("/")[0];
  const h = aspect.split("/")[1];
  
  return (
    <div className={`si-wrap`} style={{ aspectRatio: `${w}/${h}` }}>
      <img
        src={error && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        className={`si-img ${loaded ? "is-loaded" : "is-loading"} ${className ?? ""}`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
        sizes={sizes}
        decoding="async"
        onLoad={() => {
          setLoaded(true);
          onLoadComplete?.();
        }}
        onError={() => {
          setError(true);
          setLoaded(true); // Show fallback without reflow
        }}
        onClick={onClick}
      />
      {!loaded && <div className="si-skeleton" aria-hidden="true" />}
    </div>
  );
}

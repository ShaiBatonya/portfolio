import React from "react";
import MiniCarousel from "./MiniCarousel";
import Button from "./Button";

type Cta = { label: string; href: string; aria?: string };
type Img = { src: string; alt: string };

export type ProjectCardProProps = {
  title: string;
  summary: string;
  impact?: string;
  stack?: string[];
  images: Img[];
  primaryCta: Cta;
  secondaryCta?: Cta;
  isFirstOnPage?: boolean;
};

export default React.memo(function ProjectCardPro({
  title, 
  summary, 
  impact, 
  stack = [], 
  images, 
  primaryCta, 
  secondaryCta,
  isFirstOnPage = false
}: ProjectCardProProps) {
  return (
    <article className="card-compact motion-pop" aria-labelledby={`${title}-h`}>
      <MiniCarousel images={images} titleForA11y={title} isFirstOnPage={isFirstOnPage} />
      
      <div className="card-body">
        <h3 id={`${title}-h`} className="title-compact clamp">
          {title}
        </h3>
        <p className="text-compact clamp">{summary}</p>
        
        {impact && (
          <p style={{ marginTop: 8, fontSize: "0.9em", color: "#a0a6ad" }}>
            Impact: {impact}
          </p>
        )}

        {!!stack.length && (
          <ul className="tags" aria-label="Tech stack">
            {stack.map(s => (
              <li key={s} className="tag">{s}</li>
            ))}
          </ul>
        )}

        <div className="actions">
          <Button
            variant="primary"
            href={primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={primaryCta.aria ?? primaryCta.label}
          >
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button
              variant="secondary"
              href={secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={secondaryCta.aria ?? secondaryCta.label}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
});
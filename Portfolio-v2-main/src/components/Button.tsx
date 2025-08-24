import React from "react";
import { bindHoverVars } from "../utils/hoverVars";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "soft" | "link";
  size?: "sm" | "md" | "lg";
  as?: "a" | "button";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  "aria-label"?: string;
  type?: "button" | "submit" | "reset";
}

const Spinner = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className="btn-spinner"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="31.416"
      strokeDashoffset="31.416"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default React.memo(function Button({
  children,
  variant = "secondary",
  size = "md",
  as,
  href,
  target,
  rel,
  onClick,
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
  "aria-label": ariaLabel,
  type = "button",
  ...restProps
}: ButtonProps): JSX.Element {
  // Auto-determine component type
  const Component = as || (href ? "a" : "button");
  
  // Auto-add security for external links
  const isExternalLink = href && target === "_blank";
  const finalRel = isExternalLink ? rel || "noopener noreferrer" : rel;
  
  // Show external icon for link variant with external links
  const showExternalIcon = variant === "link" && isExternalLink && !iconRight;
  
  // Build CSS classes
  const classes = [
    "btn",
    "motion-pop",
    "sheen",
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && "btn-full-width",
    loading && "btn-loading",
    disabled && "btn-disabled",
    className
  ].filter(Boolean).join(" ");

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const buttonRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;
    
    // Only bind on pointer devices with fine control
    if (window.matchMedia('(pointer: fine)').matches && 
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      bindHoverVars(el);
    }
  }, []);

  const buttonProps = {
    ref: buttonRef,
    className: classes,
    onClick: handleClick,
    disabled: disabled || loading,
    "data-loading": loading,
    "aria-label": ariaLabel,
    "aria-busy": loading,
    ...(Component === "button" && { type }),
    ...(Component === "a" && {
      href: disabled ? undefined : href,
      target,
      rel: finalRel,
    }),
    ...restProps,
  };

  return React.createElement(
    Component,
    buttonProps,
    <>
      {loading && <Spinner />}
      {!loading && iconLeft && <span className="btn-icon-left">{iconLeft}</span>}
      <span className="btn-text">{children}</span>
      {!loading && iconRight && <span className="btn-icon-right">{iconRight}</span>}
      {!loading && showExternalIcon && (
        <span className="btn-icon-right">
          <ExternalLinkIcon />
        </span>
      )}
    </>
  );
});
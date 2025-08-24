import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    /* Motion Design Tokens */
    --dur-1: 90ms;    /* tap/hover */
    --dur-2: 140ms;   /* common UI */
    --dur-3: 200ms;   /* reveals */
    --dur-4: 380ms;
    --ease-out: cubic-bezier(0.16,1,0.3,1);
    --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-inout: cubic-bezier(.83,0,.17,1);
    --ease-emph: cubic-bezier(0.2, 0.8, 0.2, 1);

    /* Scrollbar tokens (dark) */
    --sb-size: 10px;
    --sb-radius: 12px;
    --sb-track: #0d0f14;         /* deep black track */
    --sb-thumb: #1c2230;         /* thumb base */
    --sb-thumb-hover: #263042;   /* thumb hover */
    --sb-accent: #7aa2ff;        /* brand accent */

    /* Vercel/GitHub-style polish variables */
    --bg: #0b0c0f;            /* luxurious black */
    --surface: #111318;
    --surface-2: #161a22;
    --fg: #e7e9ea;
    --muted: #a0a6ad;
    --border: #262b36;
    --primary: #7aa2ff;

    /* Background mesh tokens */
    --mesh-1: #0d1017;
    --mesh-2: #090b11;
    --mesh-accent: rgba(122,162,255,.10);
    --bg-fade: .95;           /* overall opacity of the mesh */
    --bg-speed: 22s;         /* animation speed */

    /* Card height tokens */
    --card-h-sm: 520px;
    --card-h-md: 540px;
    --card-h-lg: 560px;

    /* Elevation & shine tokens */
    --elev-1: 0 1px 2px rgba(0,0,0,.25);
    --elev-2: 0 10px 30px rgba(0,0,0,.28);
    --edge: color-mix(in oklab, #ffffff 8%, transparent);
    --gutter: clamp(16px, 4vw, 32px);
    --measure: 72ch;
    --radius: 16px;
    --shadow-sm: 0 1px 2px rgba(0,0,0,.2);
    --card-background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
    --card-shadow: rgba(0,0,0,0.2);
    
    /* Button design tokens */
    --btn-radius: 12px;
    --btn-shadow: 0 1px 2px rgba(0,0,0,.2);
    --btn-shadow-lg: 0 10px 24px rgba(0,0,0,.28);
    --btn-primary: #7aa2ff;
    --btn-primary-2: #6ae3ff;
    --btn-border: #262b36;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  /* Optional GRAY theme (legacy look) */
  html[data-bg="gray"]{
    --bg: #111318;
    --mesh-1: #141821;
    --mesh-2: #0f131a;
    --mesh-accent: rgba(122,162,255,.06);
  }

  /* Apply bg + keep existing colors */
  html, body { 
    background: var(--bg); 
  }

  /* Full-viewport animated mesh layer (no DOM needed, pseudo-element) */
  body::before{
    content: "";
    position: fixed; 
    inset: 0; 
    z-index: -1; 
    pointer-events: none; 
    opacity: var(--bg-fade);
    background:
      radial-gradient(1000px 700px at 20% 10%, var(--mesh-accent) 0%, transparent 60%),
      radial-gradient(900px 600px at 80% 30%, var(--mesh-1) 0%, transparent 60%),
      radial-gradient(1100px 800px at 40% 85%, var(--mesh-2) 0%, transparent 65%),
      linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0));
    transform: translate3d(0,0,0);
    animation: bg-float var(--bg-speed) cubic-bezier(.16,1,.3,1) infinite alternate;
    will-change: transform, opacity;
    backface-visibility: hidden;
  }

  /* Background animation keyframes */
  @keyframes bg-float{
    0%   { transform: translate3d(0px, 0px, 0); }
    100% { transform: translate3d(0px, -16px, 0); }
  }

  /* Performance & accessibility */
  @media (prefers-reduced-motion: reduce){
    body::before{ animation: none; }
  }

  /* Hero photo container */
  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-image .si-wrap {
    width: clamp(140px, 22vw, 240px);
    border-radius: 18px;
    overflow: hidden;
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: color-mix(in oklab, var(--sb-thumb) 85%, transparent) var(--sb-track);
    /* Stabilize layout near scrollbars */
    scrollbar-gutter: stable both-edges;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-color: var(--bg);
    color: #FFFF;
    line-height: 1.6;
  }

  body, input, textarea, button{
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Inter, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji", 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }

  /* Fluid typography and spacing */
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2.8rem, 5vw, 4.8rem);
    margin: 0 0 0.65em;
  }

  h2 {
    font-size: clamp(2.2rem, 3.5vw, 3.2rem);
    margin: 0 0 0.6em;
  }

  h3 {
    font-size: clamp(1.8rem, 2.5vw, 2.4rem);
    margin: 0 0 0.55em;
  }

  p, li {
    line-height: 1.6;
    text-wrap: pretty;
  }

  p + p {
    margin-top: 0.7em;
  }

  /* Container utility */
  .container {
    max-width: 1200px;
    margin-inline: auto;
    padding-inline: var(--gutter);
  }

  .content {
    max-inline-size: var(--measure);
  }

  /* Performance optimizations */
  .section {
    content-visibility: auto;
    contain-intrinsic-size: 700px;
  }

  /* Layout stability for media */
  .media-16x9,
  .si-wrap {
    aspect-ratio: 16/9;
  }

  /* Will-change for interactive elements */
  .card-compact,
  .btn,
  .motion-pop {
    will-change: transform;
  }

  /* Paint containment for performance */
  .card-compact {
    contain: layout paint;
  }

  /* Ensure stable aspect ratios */
  .media-16x9 {
    aspect-ratio: 16/9;
  }

  .si-wrap {
    aspect-ratio: 16/9;
  }

  /* Better compositing for images */
  .media-16x9 img {
    backface-visibility: hidden;
    transform: translateZ(0);
  }

  /* Project grid utility */
  .projects-grid {
    display: grid;
    gap: clamp(12px, 3vw, 20px);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: stretch;
    margin-bottom: clamp(2rem, 4vw, 3rem);
  }

  /* Accessibility improvements */
  :focus {
    outline: none;
  }

  :focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 3px;
    border-radius: 10px;
  }

  /* Enhanced card interactions */
  .card {
    position: relative;
    transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease;
  }

  .card:hover, .card:focus-within {
    transform: translateY(-2px);
    border-color: #334155;
    box-shadow: 0 0 0 1px rgba(122,162,255,.35);
  }

  .card-body {
    padding: clamp(16px, 3.2vw, 24px);
  }

  /* Tech tags styling */
  .tech-tag {
    display: inline-flex;
    align-items: center;
    gap: .35rem;
    padding: 4px 10px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.0));
    transition: border-color .15s ease, transform .12s ease;
  }

  .tech-tag:hover {
    border-color: #334155;
    transform: translateY(-1px);
  }

  /* Enhanced button styling */
  .btn {
    min-height: 44px;
    border-radius: 12px;
    border: 1px solid var(--border);
    transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
  }

  .btn:hover {
    border-color: #334155;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
  }

  .btn:active {
    transform: scale(.98);
  }

  /* Motion Utilities */
  .motion-pop {
    transition: transform var(--dur-2) var(--ease-snappy), box-shadow var(--dur-2) var(--ease-snappy);
    will-change: transform;
  }

  .motion-fade {
    transition: opacity var(--dur-2) var(--ease-snappy);
  }

  .motion-translate {
    transition: transform var(--dur-3) var(--ease-snappy);
    will-change: transform;
  }

  .sheen {
    position: relative;
    overflow: hidden;
  }

  .sheen::after {
    content: "";
    position: absolute;
    inset: -120% -40%;
    transform: rotate(12deg);
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.16), transparent);
    transition: transform var(--dur-3) var(--ease-inout);
  }

  .sheen:hover::after {
    transform: translateX(120%) rotate(12deg);
  }

  /* Keyframes */
  @keyframes glow-pulse {
    0% { box-shadow: 0 0 0 0 rgba(122,162,255,.0); }
    100% { box-shadow: 0 0 0 8px rgba(122,162,255,.0); }
  }

  @keyframes float-y {
    0% { transform: translate3d(0,0,0); }
    100% { transform: translate3d(0,-6px,0); }
  }

  /* Scroll Reveal System */
  .reveal {
    opacity: 0;
    transform: translate3d(0,14px,0);
  }

  .reveal.is-visible {
    opacity: 1;
    transform: none;
    transition: opacity var(--dur-3) var(--ease-snappy), transform var(--dur-3) var(--ease-snappy);
  }

  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }

  /* WebKit (Chrome/Edge/Safari) — global scrollbar */
  *::-webkit-scrollbar{
    width: var(--sb-size);
    height: var(--sb-size);
  }
  *::-webkit-scrollbar-track{
    background: linear-gradient(180deg, var(--sb-track), #0b0c0f);
    border-radius: var(--sb-radius);
  }
  *::-webkit-scrollbar-thumb{
    border-radius: 999px;
    /* "pill" with inner gap using border */
    border: 2px solid transparent;
    background-clip: padding-box;
    background: linear-gradient(
      180deg,
      color-mix(in oklab, var(--sb-thumb) 92%, var(--sb-accent) 0%),
      color-mix(in oklab, var(--sb-thumb) 96%, var(--sb-accent) 8%)
    );
    box-shadow:
      inset 0 0 0 1px rgba(122,162,255,.18),
      0 2px 6px rgba(0,0,0,.35);
    transition: background .18s cubic-bezier(.16,1,.3,1),
                box-shadow .18s cubic-bezier(.16,1,.3,1);
  }
  *::-webkit-scrollbar-thumb:hover{
    background: linear-gradient(
      180deg,
      color-mix(in oklab, var(--sb-thumb-hover) 80%, var(--sb-accent) 18%),
      color-mix(in oklab, var(--sb-thumb-hover) 65%, var(--sb-accent) 30%)
    );
    box-shadow:
      inset 0 0 0 1px rgba(122,162,255,.35),
      0 4px 12px rgba(0,0,0,.5);
  }
  *::-webkit-scrollbar-thumb:active{
    background: linear-gradient(180deg, var(--sb-accent), #6ae3ff);
  }

  *::-webkit-scrollbar-corner{ background: transparent; }

  /* Inner horizontal scrollers (carousels, code blocks) */
  .luxe-track{
    scrollbar-width: thin;      /* Firefox */
  }
  .luxe-track::-webkit-scrollbar{ height: 8px; } /* WebKit thin bar */

  /* Utility classes (optional) */
  .scrollbar-hidden{ scrollbar-width: none; }
  .scrollbar-hidden::-webkit-scrollbar{ display: none; }

  /* Text clamping utilities */
  .clamp-title { 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; 
    overflow: hidden;
  }

  .clamp-text { 
    display: -webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical; 
    overflow: hidden;
  }

  /* Enhanced tap targets on very small screens */
  @media (max-width: 380px) {
    .btn { 
      min-height: 46px; 
    }
  }

  /* Premium hairline separators */
  .hr {
    height: 1px; 
    background: linear-gradient(90deg, transparent, var(--border), transparent);
    margin-block: clamp(16px, 4vw, 24px);
  }

  /* Edge fade for horizontal scrollers */
  .edge-fade {
    -webkit-mask-image: linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent);
    mask-image: linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent);
  }

  /* Scroll snap utilities */
  .snap-x { 
    scroll-snap-type: x mandatory; 
  }

  .snap-start { 
    scroll-snap-align: start; 
  }

  /* Mini Carousel Styles */
  .media-16x9 {
    position: relative;
    aspect-ratio: 16/9;
    overflow: hidden;
    background: #0e1117;
    border-radius: var(--radius) var(--radius) 0 0;
  }

  .media-16x9 img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity var(--dur-2) var(--ease-out);
    will-change: opacity;
  }

  .media-16x9 img.is-active {
    opacity: 1;
  }

  .pro-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid var(--border);
    background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: transform var(--dur-2) var(--ease-out), border-color var(--dur-2) var(--ease-out);
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }

  .pro-btn:hover {
    transform: translateY(-50%) translateY(-1px);
    border-color: #334155;
  }

  .pro-btn svg {
    width: 18px;
    height: 18px;
    fill: var(--fg);
  }

  .pro-prev {
    left: 10px;
  }

  .pro-next {
    right: 10px;
  }

  .pro-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2));
    border: 1px solid rgba(255,255,255,0.1);
    backdrop-filter: blur(8px);
  }

  .pro-dot {
    min-width: 44px;
    min-height: 44px;
    padding: 0;
    border-radius: 50%;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background-color var(--dur-2) var(--ease-out), transform var(--dur-2) var(--ease-out);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pro-dot::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    transition: background-color var(--dur-2) var(--ease-out), transform var(--dur-2) var(--ease-out);
  }

  .pro-dot:hover::after {
    transform: scale(1.2);
  }

  .pro-dot[aria-current="true"]::after {
    background: var(--primary);
  }

  /* Compact pro card styles */
  .card-compact {
    background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
    outline: 1px solid var(--border);
    border: none;
    border-radius: 16px; 
    box-shadow: var(--elev-1);
    transition: transform var(--dur-2) var(--ease-snappy), box-shadow var(--dur-2) var(--ease-snappy);
    will-change: transform;
    overflow: hidden;
    min-height: var(--card-h-sm);
    display: flex;
    flex-direction: column;
    position: relative;
    isolation: isolate;
  }

  .card-compact::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    box-shadow: inset 0 1px 0 var(--edge);
  }

  .card-compact:hover { 
    transform: translate3d(0,-2px,0) scale(1.01);
    box-shadow: var(--elev-2);
  }

  .card-body {
    padding: clamp(16px, 3vw, 22px);
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }

  /* Media area fixed size */
  .media-16x9 {
    flex: 0 0 auto;
  }

  /* Responsive card heights */
  @media (min-width: 640px) {
    .card-compact {
      min-height: var(--card-h-md);
    }
  }

  @media (min-width: 1024px) {
    .card-compact {
      min-height: var(--card-h-lg);
    }
  }

  .title-compact { 
    font-size: clamp(18px, 2.8vw, 22px); 
    margin: 0 0 6px; 
    letter-spacing: -0.01em; 
    line-height: 1.3;
  }

  .title-compact.clamp { 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; 
    overflow: hidden; 
  }

  .text-compact { 
    color: #a0a6ad; 
    line-height: 1.5;
  }

  .text-compact.clamp { 
    display: -webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical; 
    overflow: hidden; 
  }

  .tags { 
    display: flex; 
    flex-wrap: wrap; 
    gap: 8px; 
    margin-top: 10px; 
  }

  .tag { 
    padding: 4px 10px; 
    border: 1px solid #262b36; 
    border-radius: 999px; 
    font-size: 12px; 
    background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0)); 
  }

  .status-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(122,162,255,.08), rgba(122,162,255,.04));
    border: 1px solid color-mix(in oklab, var(--primary) 30%, var(--border));
    font-size: 12px;
    margin-bottom: 8px;
  }

  .actions { 
    display: flex; 
    gap: 12px; 
    flex-wrap: wrap; 
    margin-top: auto; 
  }

  /* ——— Premium Button System ——— */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-height: 44px;
    padding: 0.6rem 1rem;
    border: 1px solid var(--btn-border);
    border-radius: var(--btn-radius);
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition: transform var(--dur-2) var(--ease-snappy), box-shadow var(--dur-2) var(--ease-snappy), border-color var(--dur-2) var(--ease-snappy), background var(--dur-2) var(--ease-snappy);
    position: relative;
    overflow: hidden;
  }

  .btn::after {
    content: "";
    position: absolute;
    inset: auto;
    width: 120px;
    height: 120px;
    border-radius: 999px;
    background: radial-gradient(closest-side, rgba(255,255,255,.22), rgba(255,255,255,0));
    transform: translate(-50%,-50%) scale(0);
    opacity: 0;
    transition: transform 140ms cubic-bezier(.16,1,.3,1), opacity 200ms;
    pointer-events: none;
  }

  .btn:where(:hover,:focus-visible)::after {
    transform: translate(var(--mx,50%), var(--my,50%)) scale(1);
    opacity: .22;
  }

  .btn:focus {
    outline: none;
  }

  .btn:focus-visible {
    outline: 2px solid var(--btn-primary);
    outline-offset: 3px;
  }

  /* Button Variants */
  .btn-primary {
    background: linear-gradient(135deg, var(--btn-primary) 0%, var(--btn-primary-2) 100%);
    color: #0b0c0f;
    border-color: transparent;
    box-shadow: var(--btn-shadow);
  }

  .btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.12s ease;
  }

  .btn-primary:hover {
    transform: translate3d(0,-2px,0);
    box-shadow: 0 0 0 1px rgba(122,162,255,.35), 0 10px 24px rgba(122,162,255,.18);
  }

  .btn-primary:hover::before {
    opacity: 1;
  }

  .btn-primary:active {
    transform: scale(0.985);
  }

  .btn-secondary {
    background: linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%);
    color: var(--fg);
    border-color: var(--btn-border);
  }

  .btn-secondary::before {
    content: '';
    position: absolute;
    inset: 1px;
    background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 50%);
    border-radius: calc(var(--btn-radius) - 1px);
  }

  .btn-secondary:hover {
    border-color: #334155;
    transform: translate3d(0,-2px,0);
    box-shadow: var(--btn-shadow);
  }

  .btn-secondary:active {
    transform: scale(0.985);
  }

  .btn-ghost {
    background: transparent;
    color: var(--fg);
    border-color: transparent;
  }

  .btn-ghost:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--btn-border);
  }

  .btn-ghost:active {
    transform: scale(0.985);
  }

  .btn-soft {
    background: linear-gradient(180deg, 
      color-mix(in oklab, var(--btn-primary) 8%, var(--surface)) 0%, 
      color-mix(in oklab, var(--btn-primary) 4%, var(--surface-2)) 100%);
    color: var(--fg);
    border-color: color-mix(in oklab, var(--btn-primary) 20%, var(--btn-border));
  }

  .btn-soft:hover {
    border-color: color-mix(in oklab, var(--btn-primary) 40%, var(--btn-border));
    transform: translate3d(0,-2px,0);
    box-shadow: var(--btn-shadow);
  }

  .btn-soft:active {
    transform: scale(0.985);
  }

  .btn-link {
    background: transparent;
    color: var(--fg);
    border-color: transparent;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.12s ease, color 0.12s ease;
  }

  .btn-link:hover {
    text-decoration-color: currentColor;
    color: var(--btn-primary);
  }

  /* Button Sizes */
  .btn-sm {
    min-height: 36px;
    padding: 0.45rem 0.8rem;
    font-size: 0.8125rem;
  }

  .btn-lg {
    min-height: 52px;
    padding: 0.8rem 1.2rem;
    font-size: 0.9375rem;
  }

  /* Button States */
  .btn-disabled,
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }

  .btn-loading {
    opacity: 0.8;
    cursor: wait;
  }

  .btn-full-width {
    width: 100%;
  }

  /* Button Icons */
  .btn-icon-left,
  .btn-icon-right {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .btn-text {
    min-width: 0;
  }

  /* Loading Spinner */
  .btn-spinner {
    animation: btn-spin 1s linear infinite;
  }

  @keyframes btn-spin {
    from {
      transform: rotate(0deg);
      stroke-dashoffset: 31.416;
    }
    50% {
      stroke-dashoffset: 0;
    }
    to {
      transform: rotate(360deg);
      stroke-dashoffset: -31.416;
    }
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none !important;
    }
    
    .btn-spinner {
      animation: none !important;
    }
    
    .btn:hover,
    .btn:active {
      transform: none !important;
    }
  }

  /* Smart Image Component */
  .si-wrap { 
    position: relative; 
    overflow: hidden; 
    border-radius: 16px; 
    background: #0e1117; 
  }

  .si-img { 
    position: absolute; 
    inset: 0; 
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    filter: saturate(1.02) contrast(1.02); 
    transition: opacity var(--dur-2) var(--ease-snappy), filter var(--dur-2) var(--ease-snappy); 
    opacity: 0; 
  }

  .si-img.is-loaded { 
    opacity: 1; 
    filter: none; 
  }

  .si-skeleton {
    position: absolute; 
    inset: 0; 
    background:
      radial-gradient(1200px 1200px at 20% 0%, rgba(122,162,255,.08), transparent 60%),
      linear-gradient(90deg, rgba(255,255,255,.06), rgba(255,255,255,.12), rgba(255,255,255,.06));
    background-size: cover, 200% 100%;
    animation: si-shimmer 1.2s linear infinite;
  }

  @keyframes si-shimmer { 
    from { background-position: left; } 
    to { background-position: right; } 
  }

  @media (prefers-reduced-motion: reduce) { 
    .si-img, .si-skeleton { 
      transition: none; 
      animation: none; 
    } 
  }


`
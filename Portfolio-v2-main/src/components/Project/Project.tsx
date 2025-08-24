import React from "react";
import { Container } from "./styles";
import ProjectCardPro from "../ProjectCardPro";
import { LINKS } from "../../config/links";
import { IMAGES } from "../../config/images";
import { useReveal, useRevealList } from "../../hooks/useReveal";

// Centralized projects data with proper image mapping
const allProjects = [
  {
    title: "AgentCraft",
    summary: "A production-grade AI chat platform delivering a ChatGPT-like experience with real-world auth, resilient architecture, and mobile-first UX.",
    impact: "Faster onboarding, robust error handling",
    stack: ["React", "TypeScript", "Zustand", "Vite", "Tailwind", "Node/Express", "MongoDB", "Docker"],
    images: IMAGES.agentcraft,
    primaryCta: { label: "Live Demo", href: LINKS.AGENTCRAFT_DEMO },
    secondaryCta: { label: "GitHub", href: LINKS.AGENTCRAFT_GITHUB },
  },
  {
    title: "EstateExplorer",
    summary: "A M.E.R.N stack-based property listing application with powerful admin tools and modern interface.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Chakra UI"],
    images: IMAGES.estateexplorer,
    primaryCta: { label: "Live Demo", href: "https://real-estate-mern-stack.vercel.app/" },
    secondaryCta: { label: "GitHub", href: "https://github.com/ShaiBatonya/Real-Estate-MERN-STACK" },
  },
  {
    title: "Shopfinity",
    summary: "A cutting-edge e-commerce platform delivering a seamless shopping experience with modern web technologies.",
    stack: ["React", "Redux", "Tailwind CSS", "Styled Components"],
    images: IMAGES.shopfinity,
    primaryCta: { label: "Live Demo", href: "https://shopfinity-nine.vercel.app/" },
    secondaryCta: { label: "GitHub", href: "https://github.com/ShaiBatonya/Shopfinity" },
  },
  {
    title: "GradientStudio",
    summary: "A React-based gradient exploration platform for previewing, copying, and integrating stunning gradient styles into projects.",
    stack: ["React", "Vite", "TailwindCSS", "Responsive Design", "UI/UX"],
    images: IMAGES.textgrindas,
    primaryCta: { label: "Live Demo", href: "https://gradient-studio.vercel.app/" },
    secondaryCta: { label: "GitHub", href: "https://github.com/ShaiBatonya/GradientStudio" },
  },
];

export function Project() {
  const { ref: titleRef, isVisible: titleVisible } = useReveal<HTMLHeadingElement>();
  const { setRef, isVisible } = useRevealList<HTMLDivElement>(Math.min(allProjects.length, 8), 50);

  return (
    <Container id="project">
      <h2 
        ref={titleRef}
        className={`reveal ${titleVisible ? 'is-visible' : ''}`}
      >
        Projects
      </h2>
      
      {/* Single Projects Section with Pro Cards */}
      <section className="projects-grid section">
        {allProjects.map((project, index) => (
          <div
            key={project.title}
            ref={setRef(index)}
            className={`reveal ${isVisible(index) ? 'is-visible' : ''}`}
            style={{ transitionDelay: `calc(${Math.min(index, 7)} * 50ms)` }}
          >
            <ProjectCardPro {...project} isFirstOnPage={index === 0} />
          </div>
        ))}
      </section>
    </Container>
  );
}

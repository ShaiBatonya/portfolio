// Import assets from src/assets
import agent1 from "../assets/agent1.png";
import agent2 from "../assets/agent2.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

export type Img = { src: string; alt: string };

export const IMAGES: Record<string, Img[]> = {
  agentcraft: [
    { src: agent1, alt: "AgentCraft — conversation UI" },
    { src: agent2, alt: "AgentCraft — threads & auth" },
  ],
  estateexplorer: [
    { src: project1, alt: "EstateExplorer — home" },
    { src: project2, alt: "EstateExplorer — property details" },
    { src: project3, alt: "EstateExplorer — dashboard" },
  ],
  shopfinity: [
    { src: project4, alt: "Shopfinity — product grid" },
    { src: project5, alt: "Shopfinity — product details" },
  ],
  textgrindas: [
    { src: project6, alt: "GradientStudio — main interface" },
  ],
};

export const FALLBACK: Img = { src: project1, alt: "Preview" };

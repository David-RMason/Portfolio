import { FaCode, FaServer, FaPaintBrush, FaTools } from "react-icons/fa";

export const homepageInfo = {
  headline:
    "Frontend Developer | Creating Responsive, Accessible Websites | WordPress, React | Birmingham",
  summary:
    "I’m a Birmingham-based web developer with experience building custom WordPress websites and React applications for businesses and clients. I’m passionate about creating accessible, high-performing web experiences with clean code, responsive design, and a strong attention to detail.",
  techStack: [
    {
      title: "Frontend",
      icon: FaCode,
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "React Router",
        "Component-Based Architecture",
      ],
    },

    {
      title: "Design",
      icon: FaPaintBrush,
      items: [
        "HTML",
        "CSS",
        "SCSS",
        "Bootstrap",
        "Responsive Design",
        "Accessibility",
      ],
    },

    {
      title: "Backend",
      icon: FaServer,
      items: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "REST APIs",
        "SQL",
        "Serverless Functions",
      ],
    },

    {
      title: "Workflow",
      icon: FaTools,
      items: [
        "Git",
        "GitHub",
        "Netlify",
        "Redis",
        "Performance Optimisation",
        "Figma",
      ],
    },
  ],
};

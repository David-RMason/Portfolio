import insertCoinImage from "../assets/insertCoinPreview.webp";
import bankistAppImage from "../assets/bankistAppPreview.webp";
import feedbackAppImage from "../assets/feedbackAppPreview.webp";

export const projects = [
  {
    name: "Insert Coin",
    image: insertCoinImage,
    description:
      "A React-based mini-game platform featuring serverless backend functionality, persistent cloud storage with Vercel KV, and interactive multi-page gameplay.",
    techStack: [
      "React",
      "TypeScript",
      "React Router",
      "Vercel KV",
      "Serverless Functions",
    ],
    link: "https://insert-coin-three.vercel.app",
    featured: true,
  },
  {
    name: "Bankist App",
    image: bankistAppImage,
    description:
      "A simple JavaScript project showing DOM manipulation and sleek design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://david-rmason.github.io/Bankist-App-Homepage/",
    featured: true,
  },
  {
    name: "Feedback App",
    image: feedbackAppImage,
    description:
      "“A React feedback management app with CRUD operations, Context API state management, and REST API integration.",
    techStack: [
      "React",
      "JavaScript",
      "Context API",
      "React Router",
      "Framer Motion",
      "REST API",
    ],
    link: "https://github.com/David-RMason/feedback-app",
    featured: true,
  },
];

export const professionalWork = [
  {
    name: "ActEd.",
    image: "",
    employer: "Freelance",
    employerLink: null,
    link: "https://actedutrain.com/",
    description: "",
  },
  {
    name: "Alconex",
    image: "",
    employer: "Super Digital",
    employerLink: "https://wearesuper.digital/",
    link: "https://alconex.co.uk",
    description: "",
  },
  {
    name: "ZebraPR",
    image: "",
    employer: "Super Digital",
    employerLink: "https://wearesuper.digital/",
    link: "https://zebrapr.co.uk/",
    description: "",
  },
  {
    name: "Grammatology",
    image: "",
    employer: "Super Digital",
    employerLink: "https://wearesuper.digital/",
    link: "https://grammatology.uk/",
    description: "",
  },
];

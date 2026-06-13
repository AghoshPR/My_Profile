import learnbridgeImg from "@/assets/project-learnbridge.jpg";
import podcrazeImg from "@/assets/project-podcraze.jpg";
import scraperImg from "@/assets/project-scraper.jpg";
import resumeUrl from "@/assets/AGHOSH_PR_Resume.pdf";

export const socials = {
  github: "https://github.com/AghoshPR",
  linkedin: "https://www.linkedin.com/in/aghosh-pr/",
  leetcode: "https://leetcode.com/u/Aghosh_pr/",
  email: "mailto:aghoshpr03@gmail.com",
  resume: resumeUrl,
};

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST Framework", "FastAPI", "Django Channels", "SQLAlchemy", "Pydantic"],
  },
  {
    title: "Frontend",
    skills: ["React", "Redux", "Redux Toolkit", "Axios", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "AWS RDS", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker", "AWS EC2", "AWS S3", "AWS RDS", "CI/CD Pipelines", "Vercel"],
  },
  {
    title: "Async & Realtime",
    skills: ["Celery", "Redis", "AsyncIO", "aiohttp", "Django Channels", "Socket.IO"],
  },
  {
    title: "Web Scraping",
    skills: ["BeautifulSoup", "aiohttp", "Dynamic CSS Selectors", "Pydantic"],
  },
  {
    title: "Integrations",
    skills: ["Stripe", "Razorpay", "Google OAuth", "JWT", "Cloudinary", "Socket.IO"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Figma"],
  },
  {
    title: "Concepts",
    skills: [
      "Data Structures",
      "OOP",
      "API Design",
      "Authentication (JWT, OAuth)",
      "RBAC",
      "Payment Integration",
    ],
  },
];

export interface Project {
  name: string;
  tagline: string;
  features: string[];
  tech: string[];
  image?: string;
  flagship?: boolean;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    name: "LearnBridge",
    tagline: "Full-featured E-learning Platform",
    features: [
      "JWT Authentication & Google OAuth",
      "Role-Based Access Control",
      "Live Classes over WebSockets",
      "AI Chatbot",
      "Celery + Redis task pipeline",
      "Docker deployment with AWS CI/CD",
      "Stripe & Razorpay payments",
    ],
    tech: ["Python", "Django", "DRF", "React", "Redux", "Docker", "Redis", "AWS"],
    image: learnbridgeImg,
    flagship: true,
    liveUrl: "https://learnbridge.aghosh.site/",
  },
  {
    name: "PodCraze",
    tagline: "E-commerce Platform",
    features: [
      "Cart system & order management",
      "Razorpay integration",
      "OTP authentication",
      "Admin dashboard & inventory management",
    ],
    tech: ["Python", "Django", "MySQL", "Docker", "AWS"],
    image: podcrazeImg,
    liveUrl: "https://podcraze.aghosh.site/",
  },
  {
    name: "Dynamic Web Scraper",
    tagline: "Async scraping engine with live dashboard",
    features: ["FastAPI backend", "Async scraping with aiohttp", "BeautifulSoup parsing", "React dashboard"],
    tech: ["FastAPI", "React", "aiohttp", "BeautifulSoup"],
    image: scraperImg,
  },
  {
    name: "User Management System",
    tagline: "Secure admin & user platform",
    features: ["JWT authentication", "Role-Based Access Control", "Admin dashboard", "SQLAlchemy ORM"],
    tech: ["FastAPI", "React", "MySQL"],
  },
  {
    name: "Netflix Clone",
    tagline: "Streaming UI with realtime data",
    features: ["Movie browsing & trailers", "Firebase auth & data"],
    tech: ["React", "Firebase"],
  },
  {
    name: "AI Chatbot",
    tagline: "Conversational AI assistant",
    features: ["Cohere-powered responses", "Django backend"],
    tech: ["Django", "Cohere API"],
  },
];
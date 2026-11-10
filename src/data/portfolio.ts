
import type {
  PersonalInfo,
  Project,
  ResearchItem,
  ExperienceItem,
  SkillCategory,
  Article,
} from "@/types/portfolio";


export const personalInfo: PersonalInfo = {
  name: "FaizaanUllah Shaik",
  firstName: "Faizaan",
  title: "CS Master's Student · AI & Computer Vision",
  location: "",
  degree: "M.S. Computer Science",
  institution: "University of Texas at Arlington",
  email: "shaikfaizaanullah@gmail.com",
  github: "https://github.com/faizaan046",
  linkedin: "https://www.linkedin.com/in/faizaanshaik/",
  medium: "https://medium.com/@shaikfaizaanullah",
  twitter: "https://x.com/Faizaan046",
  resumePath: "/resume/resume.pdf",
  heroHeadline: "Hi, I'm Faizaan.",
  heroParagraph1:
    "I'm a graduate student pursuing a degree in Computer Science at the University of Texas at Arlington, specializing in Intelligent Systems and Software Engineering.",
  heroParagraph2: "I enjoy creating software that is actually useful.",
  metaDescription:
    "FaizaanUllah Shaik — Computer Science graduate student at UT Arlington exploring machine learning, computer vision, and useful software.",
};


export const projects: Project[] = [
  {
    id: "ai-incident-assistant",
    index: 1,
    title: "AI Incident Assistant",
    category: "Applied AI / Backend",
    status: "completed",
    problem:
      "Operations teams face alert fatigue when diagnosing production incidents. Manual investigation is slow, context-switching is costly, and critical signals are buried in logs and metrics.",
    contribution:
      "An AI-powered incident analysis assistant built with Python and FastAPI. The system ingests incident context and surfaces relevant diagnostics, suggested root causes, and recommended actions through a structured API.",
    stack: ["Python", "FastAPI"],
    links: [],
    featured: true,
    image: {
      src: "",
      alt: "AI Incident Assistant interface showing incident analysis dashboard",
      width: 1600,
      height: 900,
      placeholderLabel: "Add project screenshot",
      placeholderDimensions: "Recommended 1600 × 900",
    },
  },
  {
    id: "image-forgery-detection",
    index: 2,
    title: "Image Forgery Detection",
    category: "Computer Vision / Web Application",
    status: "completed",
    problem:
      "Digital image manipulation makes it difficult to distinguish authentic photographs from altered content, especially when changes are subtle.",
    contribution:
      "Developed an image-forgery detection application featuring a CNN-based prediction workflow, image uploads, user registration and login, and an administrative interface. Built an interface that displays real or manipulated image predictions and confidence scores.",
    stack: ["Python", "CNNs", "Computer Vision", "Web Development"],
    links: [],
    featured: false,
    image: {
      src: "/images/projects/forgery-project-preview.webp",
      alt: "Screenshots of the image forgery detection web application, including its home page, user interface, and prediction results.",
      width: 500,
      height: 297,
      placeholderLabel: "Image forgery application screenshots",
      placeholderDimensions: "Project interface",
    },
  },
  {
    id: "linces-ckf",
    index: 3,
    title: "Linces’CKF",
    category: "Full-Stack Development / E-Commerce",
    status: "completed",
    role: "Team Lead & Full-Stack Developer",
    context: "Academic Team Project, CSE 5335: Web Data Management, University of Texas at Arlington",
    problem:
      "A bilingual commerce platform needs integrated product discovery, customer feedback, account management, and consistent English/Spanish experiences.",
    contribution:
      "Led a 5-member team in the design and development of Linces’CKF, a bilingual full-stack e-commerce platform built for CSE 5335: Web Data Management.",
    highlights: [
      "Led team coordination, feature planning, integration, and development across the React frontend, Node.js/Express backend, and MySQL database.",
      "Built dynamic Home and Services pages with responsive layouts and English/Spanish localization.",
      "Designed and implemented brand accounts with JWT-protected routes for creating product listings.",
      "Developed authenticated customer reviews with 1–5 star ratings and comments stored in MySQL.",
      "Integrated review data into the homepage recommendation experience.",
      "Contributed to REST API integration, database-driven content, authentication, product management, and overall application integration.",
      "Collaborated through Git/GitHub across planning, development, documentation, and the final presentation.",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "REST APIs"],
    links: [],
    featured: false,
    image: {
      src: "/images/projects/linces-project-preview.webp",
      alt: "Linces’CKF bilingual e-commerce prototype screenshots showing English and Spanish home pages, product catalog, and order confirmation.",
      width: 500,
      height: 335,
      placeholderLabel: "Linces’CKF prototype screenshots",
      placeholderDimensions: "Web application previews",
    },
  },
];


export const research: ResearchItem[] = [];


export const experience: ExperienceItem[] = [
  {
    id: "instructional-design",
    role: "Instructional Design Assistant",
    organization: "University of Texas at Arlington",
    location: "Remote - Arlington, TX",
    dates: "Sept 2026 to Present",
    description:
      "Accessibility remediation, digital learning material development, captioning workflows, and document quality assurance for academic content.",
    highlights: [],
  },
  {
    id: "parking-transportation",
    role: "Parking & Transportation Student Assistant",
    organization: "University of Texas at Arlington",
    location: "On-site - Arlington, TX",
    dates: "Jan 2026 to Sept 2026",
    description:
      "Managed semester-based bicycle lending operations, maintained structured datasets of student borrowers and equipment inventory, and tracked loan transactions to support accurate recordkeeping and efficient resource allocation.",
    highlights: [],
  },
];


export const skills: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    items: [
      "Python",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Deep Learning",
      "CNNs",
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    items: [
      "Java",
      "React.js",
      "REST APIs",
      "Socket.io",
      "Web Development",
      "MySQL",
      "GitHub",
      "JWT",
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Systems",
    items: [
      "Big Data Analytics",
      "Data Modeling",
      "Data Management",
      "Intelligent Systems",
      "Data Structures",
    ],
  },
  {
    id: "llm-nlp",
    title: "Core Competencies",
    items: [
      "Machine Learning Algorithms",
      "Supervised & Unsupervised Learning",
      "Software Project Management",
      "Research Skills",
    ],
  },
];


export const articles: Article[] = [];

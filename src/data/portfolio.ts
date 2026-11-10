
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
    title: "Deep Learning-Based Image Forgery Detection",
    category: "Computer Vision / Deep Learning",
    status: "completed",
    problem:
      "Digital images can be manipulated through techniques such as copy-move, splicing, and retouching. Identifying forged images requires automated analysis and a straightforward way for users to submit images and inspect results.",
    contribution:
      "Developed a CNN-based image forgery detection application that classifies submitted images as real or manipulated. Built a web interface with user and administrator pages, registration and login screens, image upload, and prediction results with confidence scores.",
    stack: ["Python", "CNNs", "Computer Vision", "Deep Learning", "Web Application"],
    links: [],
    featured: false,
    image: {
      src: "/images/projects/image-forgery-detection.jpg",
      alt: "Image forgery detection application showing its home screen, login screen, and image prediction results",
      width: 1000,
      height: 560,
      placeholderLabel: "Image forgery application screens",
      placeholderDimensions: "Project screenshots",
    },
  },
  {
    id: "linces-ckf",
    index: 3,
    title: "Linces’CKF Bilingual E-Commerce Platform",
    category: "Full-Stack Web Development / Team Lead",
    status: "completed",
    problem:
      "Online retail platforms need product catalogs, account-based workflows, customer reviews, and localized content to support both shoppers and brand users.",
    contribution:
      "Led a five-member team in developing a bilingual e-commerce platform for CSE 5335: Web Data Management at UT Arlington. Worked across the React frontend, Node.js/Express backend, and MySQL database; built responsive Home and Services pages with English/Spanish localization; implemented JWT-protected brand product listings and authenticated customer reviews with 1–5 star ratings; connected review data to homepage recommendations; and supported API integration, product management, Git collaboration, documentation, and the final presentation.",
    stack: ["React", "Node.js", "Express", "MySQL", "JWT", "Git/GitHub", "Localization"],
    links: [],
    featured: false,
    image: {
      src: "/images/projects/linces-ckf.jpg",
      alt: "Linces CKF bilingual e-commerce storefront, product catalog, order confirmation, and Spanish home page",
      width: 1000,
      height: 650,
      placeholderLabel: "Linces CKF e-commerce screenshots",
      placeholderDimensions: "Project screenshots",
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

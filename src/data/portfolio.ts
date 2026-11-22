
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
    id: "odyssey-ithaca-bound",
    index: 1,
    title: "Odyssey: Ithaca Bound",
    category: "HackUTA 2026 / AI-Powered Travel",
    status: "completed",
    problem:
      "Group trips are often planned through scattered messages, while the journey itself becomes a list of stops. We wanted to make exploring together more interactive and rewarding.",
    contribution:
      "Built Odyssey with a three-person HackUTA team, focusing on frontend screens, pixel-inspired UI, and the trip experience. The cross-platform app uses an AI Oracle to plan themed checkpoints, lets friends join a shared crew, tracks progress as destinations are reached, and offers a fog mode that unlocks upcoming stops as the journey unfolds.",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Gemini API", "Location Services"],
    links: [
      { label: "Devpost", url: "https://devpost.com/software/odyssey-t4095i", type: "external" },
      { label: "GitHub", url: "https://github.com/1-apex/theodyssey", type: "github" },
    ],
    featured: true,
    image: {
      src: "/images/projects/odyssey-ithaca-bound.jpeg",
      alt: "Odyssey: Ithaca Bound, a Greek mythology-inspired group travel game with AI itineraries and fog-of-war checkpoints",
      width: 2048,
      height: 1143,
      placeholderLabel: "Odyssey: Ithaca Bound",
      placeholderDimensions: "HackUTA 2026 project screenshot",
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
      "Claude Code",
      "Cursor AI"
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

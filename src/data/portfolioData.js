import resumeFile from '../assets/Resumes/Gowtham_Datta_Boppana_Resume.pdf';
import microsoftCertFile from '../assets/Certifications/Certificates/1)Microsoft AZ 900.pdf';
import oracleCertFile from '../assets/Certifications/Certificates/2)Oracle Certificate.pdf';
import rpaCertFile from '../assets/Certifications/Certificates/3)RPA Certificate.pdf';
import tensorflowCertFile from '../assets/Certifications/Certificates/4)Tensor Flow Certificate.pdf';
import salesforceCertFile from '../assets/Certifications/Certificates/5)Cert5113961 Salesforce AI Associate 20241023.pdf';
import microsoftLogo from '../assets/Certifications/Logos/1)Microsoft-certified-fundamentals-badge.svg-and-3-more-pages-Personal-Microso-1.webp';
import oracleLogo from '../assets/Certifications/Logos/2)Oracle Badge.jpeg';
import rpaLogo from '../assets/Certifications/Logos/3)Bot Aspirant Automation 360.jpeg';
import tensorflowLogo from '../assets/Certifications/Logos/4)Tensorflow-developer-certificate-exam-v0-7z8toestgf071.webp';
import salesforceLogo from '../assets/Certifications/Logos/5)Salesforce.jpeg';
import klUniversityLogo from '../assets/University Logo/LOGO_GRNC7Yq-a.webp';

export const siteMetadata = {
  title: 'Gowtham Datta Boppana | Full-Stack Software Engineer',
  description:
    'Portfolio of Gowtham Datta Boppana — Full-Stack Software Engineer specializing in React, TypeScript, Python, FastAPI, AI-powered applications, and automation.',
  url: 'https://gowthamdatta.dev',
};

export const socialLinks = {
  github: 'https://github.com/gowtham-labs',
  linkedin: 'https://www.linkedin.com/in/gowtham-datta-boppana',
  email: 'boppanagowtham04@gmail.com',
};

export { resumeFile };

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export const heroData = {
  greeting: 'Full-Stack Software Engineer',
  name: 'Gowtham Datta Boppana',
  tagline: 'Building modern web applications, AI-powered products, and automation systems.',
  highlights: ['React / TypeScript', 'Python / FastAPI', 'AI & Automation', 'Testing & QA'],
};

export const aboutData = {
  paragraphs: [
    "I'm a full-stack software engineer with production experience building web applications, backend APIs, and AI-integrated products. I work across the entire stack — from designing React frontends to building Python backends, integrating LLM APIs, writing automated tests, and deploying to the cloud.",
    'At Alstonair Technologies, I contributed to multiple production products as a Software Developer, building features for real estate and marketing platforms. At DataFoundry, I developed automation and testing infrastructure. Outside of work, I build independent products under GowthamLabs — ranging from AI assistants to video processing tools and workflow automation systems.',
    'My engineering approach prioritizes clean architecture, reliability, and shipping real products. I work with TypeScript, Python, React, FastAPI, PostgreSQL, Docker, and modern cloud platforms. I care about code quality, test coverage, and building software that actually works in production.',
  ],
};

export const experienceData = [
  {
    company: 'Alstonair Technologies',
    logo: null,
    roles: [
      {
        title: 'Software Developer',
        type: 'Full-time',
        duration: 'Mar 2026 – Jul 2026',
        current: true,
      },
      {
        title: 'Software Developer Intern',
        type: 'Internship',
        duration: 'Sep 2025 – Feb 2026',
        previous: true,
      },
    ],
    projects: [
      {
        name: 'NAL — Real Estate Platform',
        description: 'Full-featured real estate platform with property discovery, campaign management, and seller tools.',
        tech: ['React', 'JavaScript', 'REST APIs', 'Context API'],
        highlights: [
          'Built locality intelligence features for location-based property discovery and research',
          'Implemented Title Search & Property History modules for ownership transparency',
          'Developed Campaign Management with role-based access control for sellers',
          'Redesigned Seller Dashboard to improve usability and task discoverability',
          'Integrated REST APIs and managed complex frontend state across multiple modules',
        ],
      },
      {
        name: 'OneClick — Product Marketing Platform',
        description: 'Marketing platform with landing pages, dashboards, and design documentation.',
        tech: ['React', 'Tailwind CSS', 'UI Architecture'],
        highlights: [
          'Developed landing pages and dashboard UI aligned with business requirements',
          'Created complete project and design documentation including workflows and architecture',
          'Collaborated with senior engineers to refine information architecture',
        ],
      },
      {
        name: 'NGO — Internal Management System',
        description: 'Internal management system with dashboards, donation flows, and admin modules.',
        tech: ['React', 'Role-based UI', 'Responsive Design'],
        highlights: [
          'Built responsive UI components for dashboards, donation flows, and admin modules',
          'Implemented role-based views, HR management, and donor management',
          'Redesigned key screens to fix UI/UX issues and improve readability',
        ],
      },
    ],
  },
  {
    company: 'DataFoundry',
    logo: null,
    roles: [
      {
        title: 'Python Intern',
        type: 'Internship',
        duration: 'Jan 2025 – Aug 2025',
      },
    ],
    highlights: [
      'Built Python-based automation scripts for regression testing workflows',
      'Developed Selenium scripts for functional testing, reducing manual verification effort',
      'Performed API testing and data validation across application workflows',
      'Contributed to test case creation, execution, and document classification tasks',
    ],
  },
];

export const projectsData = [
  {
    name: 'Jarvis AI Assistant',
    summary: 'AI-powered voice assistant with natural language processing and task automation.',
    description: 'A personal AI assistant that processes voice commands, performs web searches, manages files, and automates daily tasks using LLM integration.',
    category: 'featured',
    tech: ['Python', 'OpenAI', 'Speech Recognition', 'NLP', 'Automation'],
    status: 'active',
    links: {
      github: '',
      demo: '',
    },
  },
  {
    name: 'VisionCut',
    summary: 'AI-driven video processing tool for intelligent scene detection and editing.',
    description: 'Automates video editing workflows using computer vision and ML-based scene detection to identify key moments and generate clips.',
    category: 'featured',
    tech: ['Python', 'PyTorch', 'YOLO', 'MediaPipe', 'OpenCV'],
    status: 'active',
    links: {
      github: '',
      demo: '',
    },
  },
  {
    name: 'ApplyFlow',
    summary: 'Job application automation system with intelligent form filling and tracking.',
    description: 'Streamlines the job application process by automating form submissions, tracking applications, and managing follow-ups.',
    category: 'featured',
    tech: ['Python', 'Playwright', 'Automation', 'Web Scraping'],
    status: 'active',
    links: {
      github: '',
      demo: '',
    },
  },
  {
    name: 'OmniReach',
    summary: 'Multi-platform content distribution and outreach automation tool.',
    description: 'Automates content publishing and audience engagement across multiple platforms from a single interface.',
    category: 'supporting',
    tech: ['Python', 'APIs', 'Automation', 'WebSockets'],
    status: 'active',
    links: {
      github: '',
      demo: '',
    },
  },
  {
    name: 'CleanFrame',
    summary: 'Video frame cleanup and enhancement tool using AI-based noise reduction.',
    description: 'Removes artifacts, enhances clarity, and processes video frames using machine learning models for cleaner output.',
    category: 'supporting',
    tech: ['Python', 'PyTorch', 'Computer Vision', 'Image Processing'],
    status: 'active',
    links: {
      github: '',
      demo: '',
    },
  },
  {
    name: 'InkFlow',
    summary: 'AI-assisted writing and content generation platform.',
    description: 'A writing tool that leverages LLM APIs to assist with content creation, editing, and formatting across different content types.',
    category: 'supporting',
    tech: ['Python', 'React', 'OpenAI', 'FastAPI'],
    status: 'active',
    links: {
      github: '',
      demo: '',
    },
  },
  {
    name: 'CreatorFlow',
    summary: 'Content creator workflow automation for scheduling and publishing.',
    description: 'Manages content calendars, automates scheduling, and handles multi-platform publishing for content creators.',
    category: 'supporting',
    tech: ['Python', 'REST APIs', 'Automation', 'SQLite'],
    status: 'active',
    links: {
      github: '',
      demo: '',
    },
  },
  {
    name: 'DocKey',
    summary: 'Document processing and key-information extraction tool.',
    description: 'Extracts structured data from documents using NLP and rule-based processing for quick information retrieval.',
    category: 'supporting',
    tech: ['Python', 'NLP', 'Document Processing', 'API'],
    status: 'active',
    links: {
      github: '',
      demo: '',
    },
  },
];

export const skillsData = {
  coreLanguages: {
    title: 'Core Languages',
    icon: 'code',
    items: ['TypeScript', 'JavaScript', 'Python'],
  },
  frontend: {
    title: 'Frontend',
    icon: 'frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Material UI', 'Radix UI', 'shadcn/ui', 'Framer Motion'],
  },
  backend: {
    title: 'Backend',
    icon: 'backend',
    items: ['FastAPI', 'Express.js', 'Django', 'Django REST Framework'],
  },
  databases: {
    title: 'Databases',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
  },
  aiMl: {
    title: 'AI / ML',
    icon: 'ai',
    items: ['OpenAI SDK', 'Google Generative AI', 'PyTorch', 'sentence-transformers', 'YOLO / Ultralytics', 'MediaPipe', 'Groq SDK'],
  },
  testingQa: {
    title: 'Testing / QA',
    icon: 'testing',
    items: ['Playwright', 'Selenium', 'pytest', 'Jest', 'Vitest', 'React Testing Library'],
  },
  stateData: {
    title: 'State / Data',
    icon: 'state',
    items: ['TanStack React Query', 'Redux Toolkit', 'Zustand', 'Drizzle ORM', 'SQLAlchemy', 'Alembic'],
  },
  cloudDevops: {
    title: 'Cloud / DevOps',
    icon: 'cloud',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'Azure', 'AWS', 'Google Cloud', 'Cloudflare', 'Vercel', 'Render'],
  },
  other: {
    title: 'Other',
    icon: 'tools',
    items: ['Git', 'REST APIs', 'WebSockets', 'WebRTC', 'Socket.io'],
  },
};

export const educationData = [
  {
    degree: 'B.Tech in Computer Science (Data Science)',
    institution: 'KL University',
    institutionUrl: 'https://www.kluniversity.in',
    logo: klUniversityLogo,
    duration: '2021 – 2025',
    cgpa: '8.14 / 10',
    coursework: ['Data Structures', 'Databases', 'Software Engineering'],
  },
];

export const certificationsData = [
  {
    name: 'Salesforce Certified AI Associate',
    year: '2024',
    logo: salesforceLogo,
    certificateFile: salesforceCertFile,
  },
  {
    name: 'Google TensorFlow',
    year: '2024',
    logo: tensorflowLogo,
    certificateFile: tensorflowCertFile,
  },
  {
    name: 'Automation Anywhere RPA Professional',
    year: '2024',
    logo: rpaLogo,
    certificateFile: rpaCertFile,
  },
  {
    name: 'Oracle Cloud Infrastructure',
    year: '2023',
    logo: oracleLogo,
    certificateFile: oracleCertFile,
  },
  {
    name: 'Microsoft Azure AZ-900',
    year: '2023',
    logo: microsoftLogo,
    certificateFile: microsoftCertFile,
  },
];

export const achievementsData = [
  {
    title: 'Software Developer',
    description: 'Promoted from Software Developer Intern to full-time Software Developer at Alstonair Technologies based on performance and contribution.',
    organization: 'Alstonair Technologies',
    date: 'Mar 2026',
    type: 'promotion',
  },
  {
    title: 'Software Developer Intern',
    description: 'Completed internship contributing to production applications across multiple projects.',
    organization: 'Alstonair Technologies',
    date: 'Sep 2025',
    type: 'internship',
  },
  {
    title: 'Python Intern',
    description: 'Completed internship focused on automation, testing, and Python development.',
    organization: 'DataFoundry',
    date: 'Jan 2025',
    type: 'internship',
  },
];

export const contactConfig = {
  formspreeEndpoint: '',
  recipientEmail: 'boppanagowtham04@gmail.com',
};

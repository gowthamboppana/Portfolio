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
import synergyStarCertificate from '../assets/Awards/Certificate.png';
import synergyStarPhoto from '../assets/Awards/Award Plaque.png';
import alstonairLogo from '../assets/Certifications/Logos/Alstonair_Fianl_logoWhite.png';
import datafoundryLogo from '../assets/Certifications/Logos/Datafoundry.svg';
import jarvisImage from '../assets/Project Images/Jarvis.png';
import visionCutImage from '../assets/Project Images/VisionCut.png';
import applyFlowImage from '../assets/Project Images/ApplyFlow.png';
import omniReachImage from '../assets/Project Images/OmniReach.png';
import cleanFrameImage from '../assets/Project Images/CleanFrame.png';
import inkFlowImage from '../assets/Project Images/InkFlow.png';
import creatorFlowImage from '../assets/Project Images/CreatorFlow.png';
import docKeyImage from '../assets/Project Images/DocKey.png';

export const siteMetadata = {
  title: 'Gowtham Datta Boppana | Full-Stack Software Engineer',
  description:
    'Portfolio of Gowtham Datta Boppana — Full-Stack Software Engineer specializing in React, TypeScript, Python, FastAPI, AI-powered applications, and automation.',
  url: 'https://gowthamdatta.dev',
};

export const socialLinks = {
  github: 'https://github.com/gowthamboppana',
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
  { href: '#awards', label: 'Awards' },
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
    logo: alstonairLogo,
    logoOnDark: true,
    roles: [
      {
        title: 'Software Developer',
        type: 'Full-time',
        duration: 'Mar 2026 – Jul 2026',
        previous: true,
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
    logo: datafoundryLogo,
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
    image: jarvisImage,
    features: ['Voice commands', 'Web search', 'File management', 'Task automation'],
    category: 'featured',
    tech: ['Python', 'OpenAI', 'Speech Recognition', 'NLP', 'Automation'],
    status: 'active',
    links: [
      { label: 'Live Demo', href: 'https://jarvis.gowthamlabs.com' },
    ],
  },
  {
    name: 'VisionCut',
    summary: 'AI-driven video processing tool for intelligent scene detection and editing.',
    description: 'Automates video editing workflows using computer vision and ML-based scene detection to identify key moments and generate clips.',
    image: visionCutImage,
    features: ['Scene detection', 'Clip generation', 'ML processing'],
    category: 'supporting',
    tech: ['Python', 'PyTorch', 'YOLO', 'MediaPipe', 'OpenCV'],
    status: 'active',
    links: [
      { label: 'Live Demo', href: 'https://visioncut.gowthamlabs.com' },
    ],
  },
  {
    name: 'ApplyFlow',
    summary: 'Job application automation system with intelligent form filling and tracking.',
    description: 'Streamlines the job application process by automating form submissions, tracking applications, and managing follow-ups.',
    image: applyFlowImage,
    features: ['Form automation', 'Application tracking', 'Smart follow-ups'],
    category: 'featured',
    tech: ['Python', 'Playwright', 'Automation', 'Web Scraping'],
    status: 'active',
    links: [
      { label: 'Live Demo', href: 'https://applyflow.gowthamlabs.com' },
    ],
  },
  {
    name: 'OmniReach',
    summary: 'Multi-platform content distribution and outreach automation tool.',
    description: 'Automates content publishing and audience engagement across multiple platforms from a single interface.',
    image: omniReachImage,
    features: ['Multi-platform publishing', 'Audience engagement', 'Content scheduling'],
    category: 'featured',
    tech: ['Python', 'APIs', 'Automation', 'WebSockets'],
    status: 'active',
    links: [
      { label: 'Live Demo', href: 'https://omnireach.gowthamlabs.com' },
    ],
  },
  {
    name: 'CleanFrame',
    summary: 'Video frame cleanup and enhancement tool using AI-based noise reduction.',
    description: 'Removes artifacts, enhances clarity, and processes video frames using machine learning models for cleaner output.',
    image: cleanFrameImage,
    features: ['Artifact removal', 'Clarity enhancement', 'ML noise reduction'],
    category: 'supporting',
    tech: ['Python', 'PyTorch', 'Computer Vision', 'Image Processing'],
    status: 'active',
    links: [
      { label: 'Live Demo', href: 'https://cleanframe.gowthamlabs.com' },
    ],
  },
  {
    name: 'InkFlow',
    summary: 'AI-assisted writing and content generation platform.',
    description: 'A writing tool that leverages LLM APIs to assist with content creation, editing, and formatting across different content types.',
    image: inkFlowImage,
    features: ['Content creation', 'Writing assistance', 'Format handling'],
    category: 'supporting',
    tech: ['Python', 'React', 'OpenAI', 'FastAPI'],
    status: 'active',
    links: [
      { label: 'Live Demo', href: 'https://inkflow.gowthamlabs.com' },
    ],
  },
  {
    name: 'CreatorFlow',
    summary: 'Content creator workflow automation for scheduling and publishing.',
    description: 'Manages content calendars, automates scheduling, and handles multi-platform publishing for content creators.',
    image: creatorFlowImage,
    features: ['Content calendars', 'Scheduling automation', 'Multi-platform publishing'],
    category: 'featured',
    tech: ['Python', 'REST APIs', 'Automation', 'SQLite'],
    status: 'active',
    links: [
      { label: 'Live Demo', href: 'https://creatorflow.gowthamlabs.com' },
    ],
  },
  {
    name: 'DocKey',
    summary: 'Document processing and key-information extraction tool.',
    description: 'Extracts structured data from documents using NLP and rule-based processing for quick information retrieval.',
    image: docKeyImage,
    features: ['Data extraction', 'NLP processing', 'Quick retrieval'],
    category: 'supporting',
    tech: ['Python', 'NLP', 'Document Processing', 'API'],
    status: 'active',
    links: [
      { label: 'Live Demo', href: 'https://dockey.gowthamlabs.com' },
    ],
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
    description:
      'Built a strong foundation in computer science, software engineering, data analytics, AI/ML, and full-stack development.',
    coursework: [
      {
        title: 'Computer Science',
        icon: 'code',
        courses: [
          'Data Structures',
          'Design & Analysis of Algorithms',
          'Advanced Object-Oriented Programming',
          'Operating Systems',
          'Computer Networks & Security',
          'Software Engineering',
          'Computer Organization & Architecture',
          'Automata Theory & Formal Languages',
        ],
      },
      {
        title: 'Data & AI',
        icon: 'ai',
        courses: [
          'Machine Learning',
          'AI for Data Science',
          'Big Data Analytics',
          'Big Data Optimization',
          'Data Warehousing & Mining',
          'Data Visualization Techniques',
          'Advanced Databases',
        ],
      },
      {
        title: 'Software Development',
        icon: 'backend',
        courses: [
          'Python Full Stack Development with Django',
          'MERN Stack Web Development',
          'Java Full Stack Development + Microservices',
        ],
      },
      {
        title: 'Distributed & Cloud',
        icon: 'cloud',
        courses: ['Cloud Based Data Analytics', 'Parallel & Distributed Computing'],
      },
    ],
    journey: [
      {
        period: '2021–22',
        theme: 'CS Foundations',
        courses: ['Data Structures', 'Computational Thinking', 'Computer Organization'],
      },
      {
        period: '2022–23',
        theme: 'Software Engineering',
        courses: [
          'Object-Oriented Programming',
          'DBMS',
          'Operating Systems',
          'Networks',
          'Python/Django',
        ],
      },
      {
        period: '2023–24',
        theme: 'Data & AI',
        courses: [
          'Machine Learning',
          'Big Data',
          'Data Warehousing',
          'Data Visualization',
          'Java Full Stack + Microservices',
        ],
      },
      {
        period: '2024–25',
        theme: 'Advanced & Industry Skills',
        courses: [
          'TensorFlow',
          'Automation',
          'Salesforce AI',
          'Distributed Computing',
          'Capstone Project',
          'Internship',
        ],
      },
    ],
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

export const awardsData = [
  {
    title: 'The Synergy Star Award',
    organization: 'AlstonAir',
    date: 'April 3, 2026',
    description:
      'Recognized for demonstrating strong execution capabilities, enabling effective collaboration, and contributing to successful outcomes.',
    certificate: synergyStarCertificate,
    photo: synergyStarPhoto,
    logo: alstonairLogo,
    icon: 'trophy',
  },
];

export const contactConfig = {
  formspreeEndpoint: '',
  recipientEmail: 'boppanagowtham04@gmail.com',
};

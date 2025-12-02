import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Christian Ngubana",
  title: "Hi, I'm Christian Ngubana",
  description:
    "A passionate Full-Stack Software Engineer with 4+ years of experience building scalable web applications and delivering exceptional digital experiences. I specialize in React, Node.js, and modern JavaScript ecosystems, transforming complex business requirements into elegant, user-centric solutions. I thrive in collaborative environments, excel at remote work, and am committed to writing clean, maintainable code that drives business value. Open to exciting remote opportunities where I can contribute to innovative projects and grow alongside talented teams.",
  resumeLink: "/img/icons/common/pdf/CV-Christian-Ngubana.pdf",
};

export const openSource = {
  githubUserName: "christiangubana",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:christiangubana@gmail.com",
  linkedin: "https://www.linkedin.com/in/christiangubana/",
  github: "https://github.com/christiangubana",
  twitter: "https://twitter.com/christiangubana",
};

export const skillsSection: SkillsSectionType = {
  title: "What I Do",
  subTitle: "FULL-STACK ENGINEER SPECIALIZED IN MODERN WEB TECHNOLOGIES & CLOUD ARCHITECTURE",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Building scalable Single-Page Applications (SPA) & Progressive Web Apps (PWA) with React.js"),
        emoji("⚡ Developing high-performance SSR/SSG applications using Next.js for optimal SEO"),
        emoji("⚡ Architecting robust RESTful & GraphQL APIs with Node.js, Express.js, and NestJS"),
        emoji("⚡ Implementing responsive, accessible UI with modern CSS frameworks and design systems"),
        emoji("⚡ Database design & optimization with PostgreSQL, MongoDB, and Redis caching"),
        emoji("⚡ Test-driven development using Jest, React Testing Library, and Cypress"),
        emoji("⚡ CI/CD pipeline setup with GitHub Actions, Docker, and cloud deployment"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon",
        },
        {
          skillName: "React",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Next.js",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Vue.js",
          iconifyTag: "logos:vue",
        },
        {
          skillName: "Node.js",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "Express",
          iconifyTag: "simple-icons:express",
        },
        {
          skillName: "NestJS",
          iconifyTag: "logos:nestjs",
        },
        {
          skillName: "GraphQL",
          iconifyTag: "logos:graphql",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "vscode-icons:file-type-mongo",
        },
        {
          skillName: "Redis",
          iconifyTag: "logos:redis",
        },
        {
          skillName: "Tailwind CSS",
          iconifyTag: "logos:tailwindcss-icon",
        },
        {
          skillName: "Material-UI",
          iconifyTag: "logos:material-ui",
        },
        {
          skillName: "Sass",
          iconifyTag: "logos:sass",
        },
        {
          skillName: "Git",
          iconifyTag: "logos:git-icon",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Jest",
          iconifyTag: "logos:jest",
        },
        {
          skillName: "Cypress",
          iconifyTag: "simple-icons:cypress",
        },
        {
          skillName: "Webpack",
          iconifyTag: "logos:webpack",
        },
        {
          skillName: "Vite",
          iconifyTag: "logos:vitejs",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend Development (React, Next.js, TypeScript)",
    progressPercentage: "90",
  },
  {
    Stack: "Backend Development (Node.js, Express, APIs)",
    progressPercentage: "85",
  },
  {
    Stack: "Database & Architecture (SQL/NoSQL, System Design)",
    progressPercentage: "80",
  },
  {
    Stack: "DevOps & Cloud (Docker, AWS, CI/CD)",
    progressPercentage: "75",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "CS50 | Harvard University",
    subHeader: "Introduction to Computer Science",
    duration: "2019",
    desc: "Completed Harvard's rigorous introduction to computer science and programming, covering fundamental concepts in algorithms, data structures, software engineering, and web development.",
    grade: "Grade A",
    descBullets: [
      "Mastered programming fundamentals in C, Python, SQL, JavaScript, CSS, and HTML",
      "Implemented complex algorithms and data structures including sorting, searching, and graph traversal",
      "Built full-stack web applications demonstrating end-to-end software development skills",
      "Developed problem-solving abilities through challenging weekly problem sets and final project",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full-Stack Software Developer",
    company: "Meyk",
    companyLogo: "/img/icons/common/m.ico",
    date: "Jan 2024 - Present",
    desc: "Building and maintaining full-stack applications using modern TypeScript ecosystem, delivering robust solutions with NestJS backend and React/Next.js frontend.",
    descBullets: [
      "Developing scalable RESTful APIs and microservices using NestJS with TypeScript",
      "Building responsive, performant user interfaces with Next.js and React",
      "Designing and optimizing PostgreSQL database schemas for complex data relationships",
      "Implementing end-to-end type safety across the full stack with TypeScript",
      "Collaborating in Agile sprints to deliver features on time with high code quality",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Injozi",
    companyLogo: "/img/icons/common/injozi.jpg",
    date: "Jan 2023 - Dec 2023",
    desc: "Led frontend development initiatives for a growing fintech platform, transforming design systems into production-ready, scalable applications.",
    descBullets: [
      "Architected and implemented reusable React component library, reducing development time by 40%",
      "Optimized application performance resulting in 60% faster page load times and improved Core Web Vitals",
      "Collaborated with cross-functional teams (Design, Backend, Product) using Agile methodologies",
      "Implemented comprehensive unit and integration tests achieving 85% code coverage",
      "Mentored junior developers on best practices, code reviews, and modern web development patterns",
    ],
  },
  {
    role: "Software Developer",
    company: "Platform45",
    companyLogo: "/img/icons/common/platform45.png",
    date: "Nov 2021 - Oct 2022",
    desc: "Developed full-stack solutions for diverse international clients, delivering high-quality digital products across web and mobile platforms.",
    descBullets: [
      "Built and deployed 10+ client projects using React, Next.js, Node.js, and modern tech stacks",
      "Improved application accessibility (WCAG 2.1 AA compliance) ensuring inclusive user experiences",
      "Integrated RESTful APIs and third-party services (payment gateways, analytics, authentication)",
      "Conducted requirements gathering sessions with stakeholders to define technical specifications",
      "Reduced bug reports by 50% through implementation of robust testing strategies and code quality standards",
    ],
  },
  {
    role: "Junior Developer",
    company: "Code Collective",
    companyLogo: "/img/icons/common/cc.jpeg",
    date: "2019 - 2021",
    desc: "Built foundational software engineering skills through freelance projects and open-source contributions.",
    descBullets: [
      "Completed 15+ freelance web development projects for small businesses and startups",
      "Contributed to open-source projects, collaborating with global developer communities",
      "Developed proficiency in modern web technologies and software development lifecycle",
      "Created technical documentation and maintained codebases with version control best practices",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Enterprise Inventory Management System",
    desc: "Full-stack inventory management platform with real-time tracking, JWT authentication, role-based access control, and comprehensive analytics dashboard. Built with React, Node.js, Express, and PostgreSQL.",
    github: "https://github.com/christiangubana/inventory-management",
  },
  {
    name: "Giebo - Podcast Monetization Platform",
    desc: "Revolutionary podcast platform enabling creators to publish and monetize content with HandCash BitcoinSV integration. Features include secure payments, content management, and analytics. Built for scalability and performance.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta - Mobile Marketplace",
    desc: "Location-based mobile marketplace connecting buyers and sellers. Implemented geolocation services, real-time messaging, secure transactions, and intuitive UX. Published on Google Play Store with 1000+ downloads.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture - E-commerce Platform",
    desc: "Modern e-commerce solution with cryptocurrency payment integration (HandCash BitcoinSV). Features include product catalog, shopping cart, secure checkout, and order management system.",
    link: "https://hooliganculture.com/",
  },
  {
    name: "Smart Birthday Reminder App",
    desc: "Intelligent birthday management application with automatic date calculation from ID numbers, upcoming birthday notifications, and user-friendly interface. Demonstrates proficiency in date/time handling and React state management.",
    github: "https://github.com/christiangubana/birthday-management",
    link: "https://christiangubana.github.io/birthday-management/",
  },
  {
    name: "Professional Portfolio Website",
    desc: "Modern, responsive developer portfolio built with Next.js, TypeScript, and React. Features SSG, SEO optimization, dynamic GitHub integration, and elegant UI/UX. Open-source template used by developers worldwide.",
    github: "https://github.com/christiangubana/christiangubana.github.io",
    link: "https://christiangubana.github.io/",
  },
  {
    name: "Task Management & Collaboration Tool",
    desc: "Collaborative task management application with real-time updates, team workspaces, and productivity analytics. Built with React, Node.js, Socket.io for real-time features, and MongoDB.",
    github: "https://github.com/christiangubana",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Steve Barnett",
    role: "Frontend consultant",
    feedback:
      "Christian invests a significant amount of his time engaging actively in the tech community. His commitment extends to mentoring new students with a shared passion for learning, he collaborated seamlessly with fellow students who participate in Railsbridge, showcasing his dedication to collective growth and knowledge-sharing within the community.",
  },
  {
    name: "Andre Vermeulen",
    role: "CTO at projectcodex.co",
    feedback:
      "Christian is a highly motivated individual with a genuine passion for computer programming. Demonstrating a strong commitment to self-improvement, His dedicated work ethic reflects a commendable drive to excel in the field.",
  },
  {
    name: "De Wet Blomerus ",
    role: "Software engineer Lead at SalesLoft",
    feedback:
      "I had the privilege of introducing him to computer programming in 2015, and since then, his enthusiasm and excitement for honing his coding skills have been evident. Christian's passion for the craft is a testament to his innate talent and commitment to personal and professional growth.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Christian Ngubana | Full-Stack Software Engineer | React & Node.js Developer",
  description:
    "Experienced Full-Stack Software Engineer specializing in React, Node.js, TypeScript, and modern web technologies. Available for remote opportunities worldwide. Proven track record in building scalable web applications, optimizing performance, and delivering exceptional user experiences.",
  author: "Christian Ngubana",
  image: "https://avatars.githubusercontent.com/u/101836990?v=4",
  url: "https://christiangubana.github.io/",
  keywords: [
    "Christian Ngubana",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "Remote Software Engineer",
    "International Developer",
    "Web Developer Portfolio",
    "JavaScript Expert",
    "Full-Stack Engineer",
    "South African Developer",
    "@christiangubana",
  ],
};

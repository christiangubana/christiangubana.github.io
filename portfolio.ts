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
  title: "Hi, my name is Christian",
  description:
    "I'm a passionate software developer with a strong passion for problem-solving, I enjoy helping software teams build better software and have happier customers. I care about writing high-quality software that delivers bespoke products and services. My journey in the world of technology began with a relentless curiosity and a commitment to continuous learning.",
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
  title: "What I do",
  subTitle: "I SPECIALISE IN TECHNOLOGIES THAT INCREASE PROGRAMMER PRODUCTIVITY",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Node.js & Express.js REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Expressjs",
          iconifyTag: "logos:express",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript-icon-round",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Tailwindcss",
          iconifyTag: "logos:tailwindcss",
        },
        {
          skillName: "MUI",
          iconifyTag: "devicon:materialui",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Central Punjab",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer",
    company: "Platform45",
    companyLogo: "/img/icons/common/platform45.png",
    date: "Nov 2021 - Oct 2022",
    desc: "Helped my team develop high-quality software. Built beautifully designed digital products for both international and local clients, optimized UI/UX processes, and accessible across a broad range of platforms. Identified areas for modification in existing programs and subsequently developed these modifications, consulted and worked closely with cross-functional teams to gather requirements.",
  },
  {
    role: "Frontend Developer",
    company: "Injozi",
    companyLogo: "/img/icons/common/injozi.jpg",
    date: "Jan 2023 - Dec 2023",
    desc: "Responsible for turning wireframes and mock-ups into reusable code and building high-quality UI components with high-quality, and scalability. Develop features with web development best practices. Collaborate with teams and stakeholders across the organization to discuss the needs, design, and functionality of the project. Debug errors, and troubleshoot issues.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/christiangubana/christiangubana.github.io",
    link: "https://christiangubana.github.io/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
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
  title: "christiangubana",
  description: greetings.description,
  author: "Christian Ngubana",
  image: "https://avatars.githubusercontent.com/u/101836990?v=4",
  url: "https://christiangubana.github.io/",
  keywords: [
    "Christian Ngubana",
    "@christiangubana",
    "christiangubana",
    "Portfolio",
    "Christian Ngubana Personal site",
  ],
};

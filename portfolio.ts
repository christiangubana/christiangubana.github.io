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
    "I'm a passionate software developer with a strong passion for problem solving, I enjoy helping software teams build better software and have happier customers. I care about writing high-quality software that delivers bespoke products and services. My journey in the world of technology began with a relentless curiosity and a commitment to continuous learning.",
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
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
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
    desc: "Helped my team develop high-quality software. Built beautifully designed digital products for both international and local clients, optimized UI/UX processes, and accessible across a broad range of platforms. Identified areas for modification in existing programs and subsequently developed these modifications, consulted and worked closely with crossfunctional teams to gather requirements.",
  },
  {
    role: "Frontend Developer",
    company: "Injozi",
    companyLogo: "/img/icons/common/injozi.jpg",
    date: "Jan 2023 - Dec 2023",
    desc: "Responsible for turning wireframes and mock-ups into reusable code and building high-quality UI components with high-quality, and scalability. Develop features with web development best practices. Collaborate with teams and stakeholders across the organization to discuss the needs, design, and functionality of the project. Debug errors, troubleshoot issues.",
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
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
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

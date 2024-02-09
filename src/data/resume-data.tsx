import {
  BarepapersLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  Minimal,
  MonitoLogo,
  ParabolLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sebastian Camia Trefs",
  initials: "SEC",
  location: "Canals, Cordoba, Argentina",
  locationLink: "https://maps.app.goo.gl/z8z4ZhLXkLaBEThN7",
  about:
    "Full Stack Developer Junior with English level C2, looking for new challenges and opportunities to grow professionally.",
  summary:
    "As a Full Stack Developer, I am capable of developing products from 0 to 1. I am leaned towards building software that is scalable, easy to use, and that provide a great user experience. My studies in business administration and my experience as a business owner have given me a unique perspective on how to build products that are not only technically sound but also that are aligned with the business goals of the company.",
  avatarUrl:
    "https://media.licdn.com/dms/image/D4D03AQFmTbqv6Qllfg/profile-displayphoto-shrink_800_800/0/1698201392969?e=1709769600&v=beta&t=RmVFmBLT9MnZRgKL8f4rKFrEllcFCFmmreEx7X0ucGA",
  personalWebsiteUrl: "https://ouidev.netlify.app/",
  contact: {
    email: "logicalbrainstudio@gmail.com",
    tel: "+5493463645114",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/CaraRota/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sebastian-emanuel-camia-trefs/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/CaraRota77",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad de San Andres",
      degree: "Bachelor's Degree in Business Administration",
      start: "2004",
      end: "2008",
      link: "https://www.udesa.edu.ar/",
    },
    {
      school: "CoderHouse.com",
      degree: "Full Stack Developer (MERN Stack)",
      start: "2022",
      end: "2023",
      link: "https://www.coderhouse.com/certificados/659c4405204fe201166149d6?lang=en",
    },
    {
      school: "Cambridge University",
      degree: "First Certificate in English (FCE)",
      start: "2003",
      end: "2003",
      link: null,
    },
    {
      school: "EFSet.org",
      degree:
        "Certificate of Proficiency in English. Score: 76/100 (C2 Proficient)",
      start: "2023",
      end: "2023",
      link: "https://www.efset.org/cert/USqt9c",
    },
  ],
  work: [
    {
      company: "Ruta 3 SRL",
      link: "https://ruta3.netlify.app/",
      badges: ["Remote", "Freelance"],
      title: "Full Stack Developer",
      logo: ConsultlyLogo,
      start: "Aug, 2023",
      end: "Present",
      description:
        "In charge of developing a webapp for managing the trips of a transport company. Users are able to search for different trip offers, choose their available driver and truck, and then proceed to book it. While admin is responsible for creating offers and managing the trips.",
    },
    {
      company: "Camia Hnos!",
      link: null,
      badges: ["Hybrid"],
      title: "General Manager",
      logo: ParabolLogo,
      start: "2012",
      end: "Present",
      description:
        "Camia Hnos! is an electronics retail store in Canals, Cordoba. I am responsible for the day-to-day operations of the business, including managing employees, overseeing the financials, and ensuring we are delivering the best customer experience possible.",
    },
  ],
  skills: [
    "📗 English C2",
    "🧱 HTML5",
    "🎨 CSS3",
    "👨🏻‍💻 JavaScript",
    "💻 ReactJS",
    "🧶 NodeJS",
    "🐱‍👤 Git/GitHub",
  ],
  softSkills: [
    "Problem Solving",
    "Critical Thinking",
    "Time Management",
    "Detail Oriented",
    "Leadership",
    "Teamwork",
    "Adaptability",
    "Flexibility",
  ],
  projects: [
    {
      title: "Ruta 3 SRL",
      techStack: [
        "Webapp",
        "ReactJS",
        "Vite",
        "Firebase",
        "Firestore",
        "Material UI",
        "React Hook Forms",
      ],
      description:
        "A webapp for managing the operations and logistics of a transport company. It includes a dashboard for the company's managers and a mobile app for the drivers.",
      logo: ConsultlyLogo,
      link: {
        label: "ruta3 link",
        href: "https://ruta-3-app.web.app/",
      },
    },
    {
      title: "Rucula Web",
      techStack: ["Side Project", "ReactJS", "Vite"],
      description:
        "A website that shows different dollar exchange rates in Argentina. It also includes cryptocurrency prices and the main stock market indexes.",
      logo: MonitoLogo,
      link: {
        label: "rucula web",
        href: "https://ruculaweb.netlify.app/",
      },
    },
    {
      title: "Rucula Bot",
      techStack: ["Side Project", "NodeJS", "Telegram API", "Docker"],
      description:
        "A Telegram bot that shows the currency exchange rate of the Argentine Peso, along with crypto prices and price of the main stock market shares, among other things. It's been dockerized in a dedicated server.",
      logo: YearProgressLogo,
      link: {
        label: "telegram bot",
        href: "https://t.me/MoraditaDevBot",
      },
    },
    {
      title: "eCommerce w/ Firebase",
      techStack: ["Project", "ReactJS", "Material UI", "Firebase"],
      description:
        "An eCommerce website built with ReactJS and Material UI. It includes a shopping cart and a checkout page. It was developed as the final project for my ReactJS course.",
      logo: YearProgressLogo,
      link: {
        label: "year progress",
        href: "https://scamiaecommerce.netlify.app/",
      },
    },
    {
      title: "eCommerce w/ NodeJS",
      techStack: [
        "Project",
        "ReactJS",
        "Material UI",
        "NodeJS",
        "Express",
        "MongoDB",
      ],
      description:
        "An eCommerce website built with ReactJS and Material UI for the frontend, and NodeJS, MongoDB and Express for the backend.",
      logo: YearProgressLogo,
      link: {
        label: "year progress",
        href: "https://scamiacommerce2.netlify.app/",
      },
    },
    {
      title: "Oui Dev",
      techStack: ["Portfolio", "JavaScript", "HTML5", "CSS3", "SASS"],
      description:
        "My personal website. It's one of my first projects. Built with vanilla JavaScript, HTML, CSS and SASS.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://ouidev.netlify.app/",
      },
    },

    {
      title: "How is it outside?",
      techStack: ["Side Project", "ReactJS", "SASS"],
      description:
        "A very basic weather app that shows the current weather in your current location; the interesting part of it is that it combines two APIs together (geolocalization + weather).",
      logo: Minimal,
      link: {
        label: "weather app",
        href: "https://howisitoutside.netlify.app/",
      },
    },
    {
      title: "Dulce Flor",
      techStack: ["Freelance", "ReactJS", "SASS"],
      description:
        "Developed a website for a local flower-based jam shop. It includes a hero, a contact form, and a map with the location of the store.",
      logo: BarepapersLogo,
      link: {
        label: "Dulce Flor",
        href: "https://dulceflor.netlify.app/",
      },
    },
    {
      title: "Online CV",
      techStack: ["Project", "TypeScript", "TailwindCSS", "NextJS"],
      description: "This very own CV is what im talking about!",
      logo: BarepapersLogo,
      link: {
        label: "Personal CV Online",
        href: undefined,
      },
    },
  ],
} as const;

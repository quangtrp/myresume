import { FacebookIcon, GithubIcon, LinkedinIcon } from "../CreateSvgIcons";

export const TAB_NAVIGATION = {
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
};

export const SOCIAL_LINKS = {
  GITHUB: {
    label: "Github",
    icon: <GithubIcon />,
    link: "https://github.com/quangtrp",
  },
  FACEBOOK: {
    label: "Facebook",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/pqt241/",
  },
  LINKEDIN: {
    label: "Linkedin",
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/quangtrpham",
  },
};

export const SECTIONS = {
  ABOUT: `
     <p>I am a curious and eager learner who is always looking to explore new things and expand my knowledge. I believe that learning is a lifelong journey, and I am always ready to learn new things.</p>
     <p>I am fascinated by the future of technology and the ways in which it can help us solve challenges and improve our lives. I also love to travel and explore new cultures. I believe that there is so much to learn from other people and from different cultures.</p>
     <p>I am an optimist and I believe in the power of humanity. I believe that we can create a better future for ourselves and for future generations. I want to do my small part to make a difference in the world.</p>
  `,

  EXPERIENCE: {
    DIGIEX: {
      time: "2022 - Present",
      position: "Frontend Engineer · Digiex",
      link: "https://gemini.google.com/",
      description:
        "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "NextJS",
        "WordPress",
        "Tailwind CSS",
        "HTML & SCSS",
      ],
    },
    UNKNOWN: {
      time: "2016 - 2022",
      position: "Frontend Engineer · unknow",
      description:
        "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
      link: "https://www.google.com/",
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "NextJS",
        "WordPress",
        "Tailwind CSS",
        "HTML & SCSS",
      ],
    },
  },

  PROJECTS: {
    SUN_MOUNTAIN_LODGE: {
      label: "Sun Mountain Lodge",
      description:
        "The Sun Mountain Lodge website specializes in providing accommodation for travelers looking to relax and unwind in Sunriver. Guests can choose from a variety of well-equipped and comfortable room types. Additionally, Sun Mountain Lodge offers a range of exciting outdoor recreational activities such as swimming, hiking, and biking.",
      link: "https://sunmountainlodge.com/",
      image: "/images/sunmountainlodge.JPG",
      technologies: ["NextJS", "Tailwind CSS", "Wordpress", "GraphQL"],
    },
    OBELLO: {
      label: "Obello",
      description:
        "Obello is an AI graphic design platform that enables design and marketing teams to instantly create beautiful, on-brand content at scale.",
      link: "https://www.obello.com/",
      image: "/images/obello.JPG",
      technologies: ["ReactJS", "SCSS", "MUI", "Konva"],
    },
  },
};

export const TYPES_HOVER = {
  EXPERIENCE: "experience",
  RESUME: "resume",
};

export const SCROLL_TABS = {
  ABOUT: {
    id: "about",
    top: 0,
  },
  EXPERIENCE: {
    id: "experience",
    top: 400,
  },
  PROJECTS: {
    id: "projects",
    top: 1200,
  },
};

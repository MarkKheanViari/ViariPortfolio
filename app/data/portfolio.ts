export const siteConfig = {
  name: "Mark Khean Viari",
  title: "Mark Khean Viari | Project Manager · Full-Stack Developer · Game Developer",
  description:
    "BSIT student specializing in Systems Development with experience in project management, full-stack development, and game development. Explore my projects and skills.",
  email: "mamo.viari.up@phinmaed.com",
  location: "Pangasinan, Philippines",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/avatar.jpg",
  socialLinks: [
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ],
};

export type Project = {
  title: string;
  term: string;
  role: string;
  tech: string[];
  description: string;
  category: "web" | "game" | "mobile" | "ai";
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "PyQuiz",
    term: "1st Year · 1st Semester",
    role: "Project Manager, Backend Developer",
    tech: ["Python"],
    description:
      "PyQuiz is an educational platform developed to provide first-year CITE students with an engaging introduction to computer programming through interactive quizzes and structured learning modules.",
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "BMI Calculator",
    term: "1st Year · 2nd Semester",
    role: "Project Manager, Backend Developer",
    tech: ["Python"],
    description:
      "A GUI-based application that calculates Body Mass Index (BMI) and stores user records in a text file acting as a simple database.",
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Arcane Conquest",
    term: "2nd Year · 1st Semester",
    role: "Project Manager, Backend Developer",
    tech: ["Unity", "C#", "PHP"],
    description:
      "Arcane Conquest is a 2D pixel RPG game where players explore diverse worlds, battle enemies and bosses, and uncover a rich storyline.",
    category: "game",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "PetPal",
    term: "2nd Year · 2nd Semester",
    role: "Project Manager, Backend Developer",
    tech: ["Kotlin", "XML", "PHP", "MySQL", "JavaScript"],
    description:
      "PetPal is a dual-platform system designed to streamline service administration for vendors while enhancing pet owners' experience in adoption and care.",
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Bimby (Built-In Messaging Blocker for You)",
    term: "3rd Year · 1st Semester",
    role: "Project Manager, Cloud Engineer",
    tech: ["Python", "React", "Flutter", "Dart", "Swift", "AWS"],
    description:
      "BIMBY is an AI-powered scam detection system focused on GCash-related datasets. It classifies chat messages and provides analytics dashboards.",
    category: "ai",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Echoes of the Lighthouse",
    term: "3rd Year · 2nd Semester",
    role: "Project Manager, Backend Developer",
    tech: ["Unity", "C#", "Metamask"],
    description:
      "An open-world 3D exploration and puzzle-based game combining immersive storytelling, sound-based navigation, and NFT-based digital asset integration.",
    category: "game",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "BioTrack (Capstone I)",
    term: "Capstone Project",
    role: "Project Manager, Backend Developer",
    tech: ["React", "Flutter", "Django", "Python", "MongoDB", "AWS"],
    description:
      "BioTrack is a smart health and biometric monitoring system for vital signs, activity logs, and health records through a centralized web and mobile platform.",
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
  },
];

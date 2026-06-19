import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Arya Kesarwani",
  initials: "AK",
  location: "New Delhi, India, IST",
  locationLink: "https://www.google.com/maps/place/New+Delhi",
  about: "Software Engineer building web and ML-powered applications.",
  summary:
    "Computer Science graduate from SRM Institute of Science and Technology with hands-on experience across frontend, backend, and ML engineering through internships at Levelgrid, GetPaisa, and Samsung Research. Multi-time national hackathon winner, including Smart India Hackathon.",
  avatarUrl: "https://avatars.githubusercontent.com/u/64867381?v=4",
  personalWebsiteUrl: "https://aryakesarwani.tech",
  contact: {
    email: "work.aryakesarwani@gmail.com",
    tel: "+918056274841",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AryaKesharwani",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arya-kesarwani/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "SRM Institute of Science and Technology",
      degree: "Bachelor of Technology in Computer Science",
      start: "2021",
      end: "2025",
    },
    {
      school: "Indian Institute of Technology, Ropar",
      degree: "Minor in Artificial Intelligence",
      start: "2024",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Levelgrid Software Development Pvt. Ltd.",
      link: "https://levelgrid.com",
      badges: ["Remote", "React", "Next.js", "Tailwind CSS", "Figma"],
      title: "Frontend Engineer Intern",
      start: "2024",
      end: "2025",
      description:
        "Built responsive web interfaces and converted Figma designs into pixel-perfect components for production.",
      highlights: [
        "Developed responsive UIs with React.js, Next.js, CSS, and Tailwind CSS",
        "Translated high-fidelity Figma prototypes into pixel-perfect, reusable components",
        "Implemented interactive features and animations to lift user engagement",
        "Collaborated cross-functionally in a fully remote setup, shipping on tight timelines",
      ],
    },
    {
      company: "GetPaisa",
      link: "https://getpaisa.com",
      badges: ["Remote", "Node.js", "Backend", "Testing"],
      title: "Backend Software Engineer Intern",
      start: "2023",
      end: "2023",
      description:
        "Built backend services for invoice management and improved team velocity through automated testing.",
      highlights: [
        "Developed a CRUD invoice service that generated and emailed PDFs to customers",
        "Wrote and ran daily unit test suites, cutting bug triage time for the team",
      ],
    },
    {
      company: "Samsung Research Institute",
      link: "https://research.samsung.com",
      badges: ["Remote", "Deep Learning", "Python", "Audio ML"],
      title: "Research Intern",
      start: "2023",
      end: "2023",
      description:
        "Worked with professors and Samsung researchers on a speech-to-speech translation worklet.",
      highlights: [
        "Designed and trained deep learning models for cross-language speech-to-speech conversion",
        "Engineered audio features including MFCC and Log-Mel spectrograms",
        "Built a sample PC/mobile application around the trained model",
        "Coordinated a team of 4 using Git-based workflows",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "SQL",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Deep Learning",
    "Git",
    "Linux",
    "Terraform",
    "Jenkins",
  ],
  projects: [
    {
      title: "Cyclone Intensity Estimation",
      techStack: ["Python", "JavaScript", "Next.js", "Three.js", "Docker"],
      description:
        "CNN-based deep learning model (ResNet-50 + Xception) that estimates cyclone intensity. Built for the Smart India Hackathon 2022 grand finale.",
      link: {
        label: "GitHub",
        href: "https://github.com/AryaKesharwani",
      },
    },
    {
      title: "File Sharing App",
      techStack: ["Node.js", "Express", "EJS"],
      description:
        "Web app for sharing files via disposable links and emails that expire after 24 hours.",
      link: {
        label: "GitHub",
        href: "https://github.com/AryaKesharwani",
      },
    },
    {
      title: "Screen2Braille",
      techStack: ["Accessibility", "Hackathon Winner"],
      description:
        "Accessibility project that won the Support-a-thon MLH Hackathon.",
    },
  ],
} as const;
export type EducationItem = {
  school: string;
  program: string;
  period: string;
  details?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export type CertificationItem = {
  name: string;
  provider: string;
  year?: string;
  focus?: string;
};

export type ServiceItem = {
  title: string;
  items: string[];
}

export const education: EducationItem[] = [
  {
    school: "University of Kabianga",
    program: "BSc. Information Technology (Cybersecurity Specialization)",
    period: "Ongoing",
    details:
      "Focusing on penetration testing, server hardening, secure software development, and network defense operations.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Cybersecurity Student (IT Specialization)",
    company: "University of Kabianga",
    period: "Academic",
    description: [
      "Conducted practical labs on penetration testing, authentication systems, and server hardening.",
      "Developed secure web applications with PHP–PostgreSQL backend connections.",
      "Built and tested virtual cybersecurity labs using Ubuntu and Kali Linux.",
    ]
  },
  {
    role: "Software Developer",
    company: "Project Based",
    period: "Portfolio",
    description: [
      "Designed full-stack web systems (registration, login, profile management).",
      "Built database-driven desktop apps using Java Swing and NetBeans.",
      "Developed AI-based vulnerability scanning prototype using Python.",
    ]
  }
];

export const certifications: CertificationItem[] = [
  {
    name: "Huawei Datacom",
    provider: "Huawei",
    focus: "Routing, switching, and data communication fundamentals.",
  },
  {
    name: "Cybersecurity Pathways",
    provider: "TryHackMe / Labs",
    focus: "Linux hardening, web security, privilege escalation.",
  },
  {
    name: "ICT Authority Cybersecurity",
    provider: "ICT Authority",
    focus: "National best practices and defensive controls.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Web Development",
    items: ["Frontend (HTML5, CSS3, JS)", "Backend (PHP, MySQL, PostgreSQL)", "Secure Dashboards & Login Systems"]
  },
  {
    title: "Cybersecurity Solutions",
    items: ["Network Setup & Hardening", "Penetration Testing", "Secure Server Config (Ubuntu/Kali)"]
  },
  {
    title: "IT Consulting",
    items: ["System Troubleshooting", "Linux Server Setup", "Security Best Practices Guidance"]
  },
  {
    title: "Programming Assistance",
    items: ["Python Scripting (AI, Data)", "Java App Development", "C Programming Logic"]
  }
];


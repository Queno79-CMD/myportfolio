export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity & Network Security",
    items: [
      "Linux Hardening (Ubuntu, Kali)",
      "Server Config (SSH, Firewalls, Samba)",
      "Vulnerability Scanning (AI-powered)",
      "Penetration Testing",
    ],
  },
  {
    title: "Programming & Dev",
    items: [
      "Python, C, Java",
      "Full-Stack (HTML, CSS, JS, PHP)",
      "SQL / PostgreSQL Integration",
      "Secure App Development",
    ],
  },
  {
    title: "Database Management",
    items: [
      "MySQL & PostgreSQL Setup",
      "Advanced Query Writing",
      "ER Modeling",
      "Secure Data Storage",
    ],
  },
  {
    title: "ML & Data Analysis",
    items: [
      "ML Model Building",
      "Data Visualization",
      "NumPy, Pandas, Matplotlib",
      "Intelligent Decision Systems",
    ],
  },
  {
    title: "Linux & SysAdmin",
    items: [
      "Ubuntu Server & VirtualBox",
      "Network Role Assignments",
      "NAT, DNS, Web Server Config",
      "System Optimization",
    ],
  },
];


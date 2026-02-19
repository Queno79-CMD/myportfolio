export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Vulnerability Scanner",
    description:
      "Automates reconnaissance and vulnerability checks with intelligent prioritization, producing actionable findings and remediation notes.",
    techStack: ["Python", "Nmap", "OWASP", "LLM-assisted analysis"],
    githubUrl: "https://github.com/your-handle/ai-vuln-scanner",
  },
  {
    title: "Steganography Secure Messaging Tool",
    description:
      "Encodes encrypted messages into images with integrity checks for covert and tamper-evident communication.",
    techStack: ["Python", "Cryptography", "PIL/OpenCV"],
    githubUrl: "https://github.com/Queno79-CMD/SECURE",
  },
  {
    title: "Linux Server Hardening Lab",
    description:
      "Hands-on lab documenting secure Ubuntu Server configuration: SSH hardening, firewall rules, patching, and audit-friendly baselines.",
    techStack: ["Ubuntu Server", "SSH", "UFW", "Fail2ban"],
    githubUrl: "https://github.com/your-handle/linux-hardening-lab",
  },
  {
    title: "Java Student Management System",
    description:
      "CRUD application for managing student records with validation and role-ready architecture for future authentication integration.",
    techStack: ["Java", "OOP", "SQLite/MySQL", "JUnit"],
    githubUrl: "https://github.com/your-handle/java-student-management",
  },
];


export interface Project {
  id: string;
  number: string;
  title: string;
  summary: string;
  problem: string;
  role: string;
  result: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  status: "completed" | "in-progress" | "production";
}

export interface ExpertiseItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  metricsOrHighlights: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  type: "full-time" | "internship" | "contract" | "part-time";
  dates: string;
  location: string;
  plainSummary: string;
  techDetails: string[];
  stack: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  twitter?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    handle: string;
    title: string;
    roleTagline: string;
    headline: string;
    status: {
      text: string;
      available: boolean;
      label: string;
    };
    location: string;
    shortBio: string;
    longBio: string[];
    tagPills: string[];
  };
  social: SocialLinks;
  experience: ExperienceItem[];
  education: EducationItem[];
  expertise: ExpertiseItem[];
  projects: Project[];
  terminalConfig: {
    welcomeMessage: string;
    promptPrefix: string;
    terminalSnippet: {
      filename: string;
      language: string;
      code: string;
    };
  };
}

/**
 * PORTFOLIO DATA FOR DHANA SRI RONGALI
 *
 * Note on Placeholders:
 * Items marked with [PLACEHOLDER] are intended to be replaced with Dhana's
 * verified links, projects, and contact details. Do NOT remove comments until configured.
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: "Dhana Sri Rongali",
    handle: "~/dhanasri",
    title: "Software Engineer",
    roleTagline: "Full-Stack & Cloud Systems",
    headline: "Bold code, better systems",
    status: {
      text: "open_to_work",
      available: true,
      label: "Open to Software Engineering roles & internships",
    },
    location: "Paris, France",
    shortBio:
      "Software engineer with 2+ years of experience in Node.js and React.js ecosystems, currently pursuing an MSc in Computer Science & Software Engineering at EPITA Paris (2026–Present). Passionate about distributed systems, resilient cloud backends, and creative interactive web applications.",
    longBio: [
      "I bridge the gap between robust distributed systems and highly polished user interfaces. With over 2 years of hands-on experience building full-stack web applications, I focus on clean architecture, predictable state, and resilient cloud services.",
      "Currently based in Paris advancing my engineering master's degree at EPITA, diving deep into distributed systems, concurrent algorithms, and software reliability engineering.",
    ],
    tagPills: ["Full-Stack", "Cloud & AWS", "System Design"],
  },

  social: {
    // [PLACEHOLDER] Replace with verified contact and profile links
    email: "[PLACEHOLDER_EMAIL: contact@dhanasri.dev]",
    github: "https://github.com/[PLACEHOLDER_GITHUB_USERNAME]",
    linkedin: "https://linkedin.com/in/[PLACEHOLDER_LINKEDIN_USERNAME]",
    twitter: "https://x.com/[PLACEHOLDER_TWITTER_USERNAME]",
  },

  experience: [
    {
      id: "exp-01",
      title: "Software Engineer / Backend Developer (MERN)",
      company: "Freelance / Independent",
      type: "full-time",
      dates: "June 2024 – Present",
      location: "Remote",
      plainSummary:
        "Full-stack software engineering work, focusing on Node.js and React.js ecosystems, building robust APIs, cloud deployments, and interactive web applications.",
      techDetails: [
        "Full-stack development with Node.js, React.js, Express, and MongoDB (MERN stack)",
        "RESTful API design, database schema design, and cloud infrastructure on AWS",
        "TypeScript, containerization with Docker, and CI/CD automation",
      ],
      stack: ["Node.js", "React.js", "Express", "MongoDB", "TypeScript", "AWS", "Docker"],
    },
    {
      id: "exp-02",
      title: "Software Development Intern",
      company: "Tecnics Integration Technologies Pvt Ltd",
      type: "internship",
      dates: "November 2023 – May 2024",
      location: "India",
      plainSummary:
        "Worked on real software projects at the company, learning how websites and apps are built from the screen users see to the database behind it, and how to find and fix problems.",
      techDetails: [
        "Full-stack software development tasks: programming, databases and web applications",
        "Debugging and fixing issues in assigned work",
        "Completed the internship successfully with a certificate of completion from the company",
      ],
      stack: ["Web Development", "Databases", "Full-Stack"],
    },
  ],

  education: [
    {
      degree: "MSc Computer Science",
      field: "Software Engineering",
      institution: "EPITA: School of Engineering and Computer Science",
      location: "Paris, France",
      period: "September 2026 – Present",
      status: "Currently Enrolled",
      description:
        "Master of Science program focusing on advanced software architecture, distributed algorithms, cloud computing, and high-reliability systems engineering.",
      highlights: [
        "Specialization in scalable backend architecture & cloud infrastructure",
        "Distributed systems, concurrent programming, and system design",
        "International engineering curriculum in Paris, France",
      ],
    },
  ],

  expertise: [
    {
      number: "01",
      title: "Full-stack development",
      tagline: "End-to-end web architectures with modern TypeScript stacks",
      description:
        "Building responsive, resilient full-stack applications with Node.js, Express, React, and Next.js. Designing RESTful and GraphQL APIs with strict typing and schema validation.",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Express",
        "GraphQL",
        "REST APIs",
        "State Management",
      ],
      metricsOrHighlights: [
        "Component-driven design systems",
        "Server-Side Rendering & Static Generation",
        "Micro-frontend & modular architecture",
      ],
    },
    {
      number: "02",
      title: "Cloud & AWS",
      tagline: "Reliable cloud infrastructure and automated CI/CD deployment",
      description:
        "Architecting serverless and containerized deployments using AWS primitives. Automating continuous integration and continuous delivery workflows for zero-downtime releases.",
      skills: [
        "AWS EC2",
        "AWS S3",
        "AWS Lambda",
        "API Gateway",
        "Docker",
        "CI/CD Pipelines",
        "GitHub Actions",
        "CloudWatch",
      ],
      metricsOrHighlights: [
        "Serverless functions and event-driven patterns",
        "Docker containerization & reproducible builds",
        "Infrastructure as Code & cloud monitoring",
      ],
    },
    {
      number: "03",
      title: "Databases & system design",
      tagline: "High-throughput data modeling, caching, and scalable persistence",
      description:
        "Designing normalized relational and flexible document database schemas. Implementing caching layers with Redis, query optimization, and resilient connection pooling.",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Prisma ORM",
        "Database Indexing",
        "Query Optimization",
        "Schema Design",
        "Data Modeling",
      ],
      metricsOrHighlights: [
        "ACID transactional guarantees & data integrity",
        "Redis multi-tier caching strategies",
        "System partitioning and load mitigation",
      ],
    },
    {
      number: "04",
      title: "Algorithms & clean code",
      tagline: "Maintainable patterns, rigorous testing, and algorithmic efficiency",
      description:
        "Writing self-documenting, maintainable code adhering to SOLID principles and clean architecture. Profiling performance bottlenecks and conducting automated testing.",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP & Functional Paradigms",
        "Design Patterns",
        "Unit & Integration Testing",
        "Jest / Vitest",
        "Code Profiling",
        "Git Workflow",
      ],
      metricsOrHighlights: [
        "Predictable codebases with comprehensive tests",
        "Time & space complexity optimization",
        "Refactoring for long-term maintainability",
      ],
    },
  ],

  projects: [
    {
      id: "project-01",
      number: "01",
      title: "[PLACEHOLDER: Cloud Microservices Platform]",
      summary:
        "[PLACEHOLDER: Scalable distributed microservices architecture for real-time data processing and analytics.]",
      problem:
        "[PLACEHOLDER: Handled asynchronous event streams with high concurrency under strict latency constraints.]",
      role: "[PLACEHOLDER: Lead Backend Engineer — Designed schema, service boundaries, and caching topology.]",
      result:
        "[PLACEHOLDER: Achieved sub-50ms API response times and 99.9% uptime during peak event loads.]",
      stack: ["Node.js", "TypeScript", "AWS Lambda", "PostgreSQL", "Redis", "Docker"],
      githubUrl:
        "https://github.com/[PLACEHOLDER_GITHUB_USERNAME]/[PLACEHOLDER_PROJECT_1]",
      liveUrl: "https://[PLACEHOLDER_PROJECT_1_DEMO].vercel.app",
      featured: true,
      status: "completed",
    },
    {
      id: "project-02",
      number: "02",
      title: "[PLACEHOLDER: Enterprise Analytics Dashboard]",
      summary:
        "[PLACEHOLDER: High-performance interactive dashboard featuring real-time data visualization and role-based access control.]",
      problem:
        "[PLACEHOLDER: Rendering heavy dynamic datasets without dropping frame rates on client-side viewports.]",
      role: "[PLACEHOLDER: Full-Stack Engineer — Built Next.js client, optimized virtualized tables, and authored REST endpoints.]",
      result:
        "[PLACEHOLDER: Reduced client initial render time by 45% using streaming SSR and dynamic imports.]",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      githubUrl:
        "https://github.com/[PLACEHOLDER_GITHUB_USERNAME]/[PLACEHOLDER_PROJECT_2]",
      liveUrl: "https://[PLACEHOLDER_PROJECT_2_DEMO].vercel.app",
      featured: true,
      status: "completed",
    },
    {
      id: "project-03",
      number: "03",
      title: "[PLACEHOLDER: Automated CI/CD Cloud Pipeline]",
      summary:
        "[PLACEHOLDER: Infrastructure as Code setup and automated testing/deployment pipeline for multi-environment staging.]",
      problem:
        "[PLACEHOLDER: Manual releases caused deployment friction and inconsistent staging environment states.]",
      role: "[PLACEHOLDER: DevOps / Cloud Engineer — Authored GitHub Actions workflows and Dockerized builds.]",
      result:
        "[PLACEHOLDER: Cut release turnaround from hours to 8 minutes with automated zero-downtime rollback.]",
      stack: ["AWS EC2", "Docker", "GitHub Actions", "Bash", "Node.js", "Nginx"],
      githubUrl:
        "https://github.com/[PLACEHOLDER_GITHUB_USERNAME]/[PLACEHOLDER_PROJECT_3]",
      liveUrl: "https://[PLACEHOLDER_PROJECT_3_DOCS].example.com",
      featured: true,
      status: "completed",
    },
    {
      id: "project-04",
      number: "04",
      title: "[PLACEHOLDER: High-Throughput REST & GraphQL Gateway]",
      summary:
        "[PLACEHOLDER: Unified API gateway providing authentication, rate limiting, and centralized telemetry for internal services.]",
      problem:
        "[PLACEHOLDER: Fragmented API clients and redundant authorization checks across multiple services.]",
      role: "[PLACEHOLDER: Backend Engineer — Implemented JWT verification, token bucket rate limiter, and GraphQL schema federation.]",
      result:
        "[PLACEHOLDER: Consolidated 12 backend endpoints into a unified typed schema with zero security incidents.]",
      stack: ["Node.js", "Express", "GraphQL", "Redis", "Jest", "TypeScript"],
      githubUrl:
        "https://github.com/[PLACEHOLDER_GITHUB_USERNAME]/[PLACEHOLDER_PROJECT_4]",
      liveUrl: "https://[PLACEHOLDER_PROJECT_4_API].example.com",
      featured: false,
      status: "completed",
    },
  ],

  terminalConfig: {
    welcomeMessage: "> hello, world // dev terminal neon active",
    promptPrefix: "dhana@epita-paris:~$",
    terminalSnippet: {
      filename: "engineer.ts",
      language: "typescript",
      code: `const dhanasri: SoftwareEngineer = {
  name: "Dhana Sri Rongali",
  role: "Software Engineer",
  education: {
    degree: "MSc Computer Science",
    institution: "EPITA Paris",
    period: "2026 - Present"
  },
  experience: "2+ years (Node.js & React.js)",
  coreStack: ["TypeScript", "Node.js", "React", "AWS"],
  status: "open_to_work",
  motto: "Bold code, better systems."
};`,
    },
  },
};

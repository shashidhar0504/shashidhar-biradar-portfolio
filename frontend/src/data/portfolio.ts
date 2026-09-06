// All content below is sourced directly from Shashidhar Biradar's profile & technical background.
// Edit this file to update site content — all components read from here.

export const profile = {
  name: "Shashidhar Biradar",
  primaryTitle: "Full Stack Java Developer | AI & Automation Engineer",
  secondaryTitle: "Spring Boot & React Specialist | Backend Developer | Technical Solution Builder",
  roles: [
    "Full Stack Java Developer",
    "AI & Automation Engineer",
    "Spring Boot & React Specialist",
    "Backend Developer",
    "Technical Solution Builder",
  ],
  location: "Pune, Maharashtra, India",
  phone: "+91 6363284060",
  whatsappNumber: "916363284060",
  email: "shashidharbiradar6@gmail.com",
  github: "https://github.com/shashidhar0504",
  linkedin: "https://www.linkedin.com/in/shashidhar-biradar-20a999293/",
  resumeFile: "https://drive.google.com/file/d/1OtPn6N2_vjpEac3hwBfwqmav_aWpaUcX/view?usp=sharing",
  profileImage: "/profile.jpg",
  tagline: "I build scalable web applications, backend systems, AI-powered solutions and automation workflows that solve real-world problems.",
  currentlyBuilding: "GridWeaver — Java 21 • Spring Boot • Kafka • PostgreSQL",
  status: "Open to Full-Time Opportunities & Freelance Projects",
  languagesSpoken: [
    "English",
    "Hindi",
    "Kannada",
    "Marathi",
    "Telugu",
    "Tamil",
  ],
};

export const about = {
  headline: "Building production-ready software with Java engineering, AI capabilities, and end-to-end SDLC ownership.",
  paragraphs: [
    "I'm a Full Stack Java Developer and AI & Automation Engineer with hands-on experience crafting scalable backend microservices, web platforms, business digital storefronts, and intelligent automation systems. My core engineering foundation centers on Java 21, Spring Boot 3, Spring Security, Hibernate/JPA, MySQL, PostgreSQL, and React.js.",
    "I take complete ownership of the software development lifecycle — from initial requirement discovery, architecture design, and database normalization to REST API development, third-party payment/communication integrations, automated workflows, and production cloud deployment.",
    "Beyond core software architecture, I integrate modern AI models, LLM APIs, prompt workflows, and automated communication triggers into business applications — turning complex requirements into seamless, client-focused digital products.",
  ],
  highlights: [
    { label: "End-to-End Ownership", value: "Requirements → Design → Dev → Cloud Launch" },
    { label: "Core Stack", value: "Java 21 · Spring Boot · React · AI & Automation" },
    { label: "Academic Excellence", value: "9.17 CGPA (BCA Graduate 2026)" },
  ],
};

export const atAGlance = [
  { label: "Education", value: "BCA — 9.17 CGPA", detail: "Sarhad College, Pune" },
  { label: "Primary Role", value: "Full Stack Java Developer", detail: "Enterprise & Client Engineering" },
  { label: "Core Stack", value: "Spring Boot + React", detail: "REST APIs & Modern Web UI" },
  { label: "Specialization", value: "AI + Automation", detail: "LLM APIs & Workflow Triggers" },
  { label: "Integrations", value: "Razorpay, WhatsApp, SMTP", detail: "Payments & Communication" },
  { label: "Deployment", value: "Production Cloud Launch", detail: "Vercel & Microservice Hosting" },
  { label: "Location", value: "Pune, India", detail: "Available for Remote & Onsite" },
];

export type CapabilityCategory = {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  technologies: string[];
  description: string;
};

export const capabilities: CapabilityCategory[] = [
  {
    id: "software-engineering",
    title: "Backend Engineering",
    subtitle: "Enterprise Java & Event-Driven Architecture",
    iconName: "Server",
    technologies: ["Java 21", "Spring Boot 3", "Virtual Threads", "Spring Security", "Hibernate / JPA", "Apache Kafka", "PostgreSQL", "MySQL", "REST APIs", "JWT Auth"],
    description: "Architecting clean, scalable RESTful services, event-driven streaming pipelines, secure JWT authentication schemes, and normalized database models.",
  },
  {
    id: "frontend-engineering",
    title: "Frontend Engineering",
    subtitle: "Modern React & Responsive Interfaces",
    iconName: "Layout",
    technologies: ["React.js", "TypeScript", "JavaScript (ES6+)", "Vite", "Tailwind CSS", "Bootstrap", "HTML5/CSS3", "Framer Motion"],
    description: "Designing fast, mobile-first visual experiences with intuitive component structures, dynamic state management, and subtle micro-interactions.",
  },
  {
    id: "ai-intelligent-systems",
    title: "AI Integration & Workflows",
    subtitle: "AI API Integration & Intelligent Features",
    iconName: "BrainCircuit",
    technologies: ["LLM API Integration", "AI-assisted Workflows", "Intelligent Automation", "Prompt Engineering", "AI-powered Digital Solutions"],
    description: "Enhancing traditional applications with intelligent natural language interfaces, automated response routing, and AI API integrations.",
  },
  {
    id: "automation",
    title: "Workflow & Communication Automation",
    subtitle: "API & Process Integration",
    iconName: "Zap",
    technologies: ["WhatsApp Business API", "Automated Email Workflows", "Lead Management", "Triggered Webhooks", "Deployment Scripts"],
    description: "Eliminating manual client overhead through automated communication channels, event-driven webhooks, and streamlined operational triggers.",
  },
  {
    id: "integrations",
    title: "Third-Party & Business Integrations",
    subtitle: "Payments, Communication & APIs",
    iconName: "Layers",
    technologies: ["Razorpay Integration", "WhatsApp Direct Chat", "Nodemailer / SMTP", "Third-Party REST APIs", "OAuth & Security Tokens"],
    description: "Seamlessly connecting production platforms to payment gateways, customer support tools, and external cloud services.",
  },
  {
    id: "deployment",
    title: "Cloud & Production Delivery",
    subtitle: "Hosting & Release Management",
    iconName: "Cloud",
    technologies: ["Vercel", "Git / GitHub", "Docker", "Production Maintenance", "Domain Config", "Environment Setup"],
    description: "Packaging frontend static bundles and backend web services for high-availability cloud deployment with zero-downtime workflows.",
  },
];

export type SkillCategory = {
  title: string;
  skills: { name: string; level: string; category: string; description: string; icon: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: "Advanced", category: "Core Language", description: "Java 21, OOP, Collections, Concurrency, Virtual Threads", icon: "Code2" },
      { name: "JavaScript", level: "Advanced", category: "Web Core", description: "ES6+, Async/Await, DOM manipulation, Event Loop", icon: "FileCode" },
      { name: "TypeScript", level: "Strong", category: "Type System", description: "Interfaces, Generics, Type Safety, React Integration", icon: "FileCode" },
      { name: "SQL", level: "Advanced", category: "Database Querying", description: "Complex Joins, Aggregations, Subqueries, Optimization", icon: "Database" },
      { name: "HTML5", level: "Advanced", category: "Markup", description: "Semantic HTML, Accessibility, Web Standards", icon: "Layout" },
      { name: "CSS3", level: "Advanced", category: "Styling", description: "Flexbox, Grid, Custom Properties, Responsive Design", icon: "Palette" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", level: "Advanced", category: "Framework", description: "Spring Boot 3, Dependency Injection, REST Controllers", icon: "Server" },
      { name: "Spring Security", level: "Strong", category: "Security", description: "JWT Stateless Auth, Role-Based Access, Filter Chains", icon: "ShieldCheck" },
      { name: "Spring MVC", level: "Advanced", category: "Web Tier", description: "Controller Mappings, Request Handling, Exception Handling", icon: "Cpu" },
      { name: "Hibernate / JPA", level: "Advanced", category: "ORM", description: "Entity Relationships, HQL, JPQL, Transaction Management", icon: "Database" },
      { name: "REST APIs", level: "Advanced", category: "Architecture", description: "RESTful principles, JSON contracts, Status Codes", icon: "Globe" },
      { name: "JWT Authentication", level: "Strong", category: "Auth", description: "Token Signing, Verification, Refresh tokens, Payload security", icon: "ShieldCheck" },
      { name: "Servlets & JSP", level: "Experienced", category: "Java Enterprise", description: "Servlet Lifecycle, Session Tracking, Request Dispatching", icon: "Cpu" },
      { name: "Node.js & Express", level: "Experienced", category: "JavaScript Backend", description: "REST Services, Middleware, NPM ecosystem", icon: "Server" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: "Advanced", category: "UI Framework", description: "Hooks, Context API, Modular Components, State Management", icon: "Layout" },
      { name: "JavaScript ES6+", level: "Advanced", category: "Language", description: "Destructuring, Modules, Promises, Functional Patterns", icon: "FileCode" },
      { name: "TypeScript", level: "Strong", category: "Typed React", description: "Typed Props, State interfaces, Custom Hooks", icon: "FileCode" },
      { name: "Vite", level: "Advanced", category: "Build Tool", description: "Fast HMR, ES modules, Optimized production bundles", icon: "Zap" },
      { name: "Tailwind CSS", level: "Advanced", category: "Utility CSS", description: "Custom Design Systems, Responsive Grids, Flexbox", icon: "Palette" },
      { name: "Bootstrap", level: "Experienced", category: "CSS Library", description: "Responsive Grids, Components, Utility Classes", icon: "Smartphone" },
      { name: "Responsive UI/UX", level: "Advanced", category: "Design System", description: "Mobile-first, touch targets, cross-browser compatibility", icon: "Monitor" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: "Advanced", category: "Relational DB", description: "Schema normalization, indexing, foreign keys, query tuning", icon: "Database" },
      { name: "PostgreSQL", level: "Strong", category: "Relational DB", description: "JSONB columns, ACID compliance, complex triggers", icon: "Database" },
      { name: "Database Design", level: "Advanced", category: "Modeling", description: "ER Diagrams, Normalization (1NF-3NF), Primary & Foreign Keys", icon: "Database" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "AI Integration", level: "Practical", category: "API Integration", description: "Connecting LLM APIs into web applications & workflows", icon: "Brain" },
      { name: "Prompt Engineering", level: "Strong", category: "AI Workflows", description: "System prompts, structured output JSON formatting", icon: "MessageSquare" },
      { name: "AI-Assisted Dev", level: "Advanced", category: "Productivity", description: "Accelerated prototyping, code analysis, testing", icon: "Zap" },
      { name: "AI-Powered Workflows", level: "Strong", category: "Automation", description: "Intelligent lead routing and automated response drafting", icon: "Workflow" },
      { name: "API/LLM Integration", level: "Strong", category: "Integrations", description: "RESTful invocation of AI services into web frontends", icon: "Globe" },
      { name: "Workflow Automation", level: "Strong", category: "Process", description: "Lead capture triggers, automated messaging pipelines", icon: "Workflow" },
      { name: "Intelligent Solutions", level: "Practical", category: "Digital Products", description: "Blending business logic with automated communication triggers", icon: "Brain" },
    ],
  },
  {
    title: "Architecture",
    skills: [
      { name: "Java 21", level: "Advanced", category: "Language Standard", description: "Virtual Threads (Project Loom), Record Classes, Pattern Matching", icon: "Code2" },
      { name: "Virtual Threads", level: "Strong", category: "Concurrency", description: "High-throughput lightweight concurrency without thread starvation", icon: "Cpu" },
      { name: "Apache Kafka", level: "Practical", category: "Event Streaming", description: "Topics, Producers, Consumers, Event-driven telemetry processing", icon: "Zap" },
      { name: "WebSockets", level: "Strong", category: "Real-Time Comms", description: "STOMP / SockJS real-time telemetry streaming to dashboards", icon: "Globe" },
      { name: "Event-Driven Arch", level: "Strong", category: "System Pattern", description: "Decoupled message passing, event producers and consumers", icon: "Workflow" },
      { name: "State Management", level: "Strong", category: "Data Flow", description: "Frontend React state & Backend atomic entity state engines", icon: "Layers" },
      { name: "Clean Architecture", level: "Advanced", category: "Design Pattern", description: "Separation of concerns, Controller-Service-Repository layers", icon: "ShieldCheck" },
    ],
  },
  {
    title: "Tools & Integrations",
    skills: [
      { name: "Git & GitHub", level: "Advanced", category: "Version Control", description: "Branching strategies, PR reviews, version tracking", icon: "GitBranch" },
      { name: "Docker", level: "Experienced", category: "Containerization", description: "Dockerfile creation, docker-compose multi-container setups", icon: "CloudUpload" },
      { name: "Maven", level: "Advanced", category: "Build Tool", description: "POM dependency management, lifecycle builds, plugins", icon: "Terminal" },
      { name: "Postman", level: "Advanced", category: "API Testing", description: "Collection testing, environment variables, mock servers", icon: "Terminal" },
      { name: "Eclipse / VS Code", level: "Advanced", category: "IDE", description: "Java debugging, extensions, Maven project management", icon: "Laptop" },
      { name: "Vercel", level: "Experienced", category: "Cloud Deployment", description: "Static React hosting, continuous integration, domain routing", icon: "CloudUpload" },
      { name: "Razorpay", level: "Strong", category: "Payments", description: "Checkout modal integration, payment verification API", icon: "CreditCard" },
      { name: "WhatsApp Business API", level: "Strong", category: "Messaging", description: "Deep links, automated pre-filled customer triggers", icon: "MessageSquare" },
      { name: "Email / Nodemailer", level: "Strong", category: "Notifications", description: "SMTP configuration, automated alert dispatching", icon: "Mail" },
    ],
  },
];

export type CaseStudy = {
  challenge: string;
  solution: string;
  architecture: string[];
  features: string[];
  integrations: string[];
  deployment: string;
  outcome: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  category: "Event-Driven Architecture" | "Production / Freelance" | "Client Project" | "Solar Business Website" | "Client Services Website" | "Organization Website" | "Academic Project";
  filterCategories: string[];
  description: string;
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  isProduction: boolean;
  myContribution: string;
  caseStudy?: CaseStudy;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "gridweaver",
    title: "GridWeaver",
    subtitle: "Virtual Thread IoT Microgrid State Engine",
    category: "Event-Driven Architecture",
    filterCategories: ["All", "Full Stack", "Backend", "Event-Driven Architecture"],
    description:
      "An event-driven backend telemetry engine and dashboard processing real-time IoT energy metrics across microgrids using Java 21 Virtual Threads, Apache Kafka, PostgreSQL, and WebSockets.",
    techStack: [
      "Java 21",
      "Spring Boot 3",
      "Virtual Threads",
      "Apache Kafka",
      "PostgreSQL",
      "REST APIs",
      "WebSockets",
      "React",
      "TypeScript",
      "Docker",
      "Git/GitHub",
    ],
    highlights: [
      "Engineered event-driven backend telemetry intake handling high-concurrency energy metrics using Java 21 Virtual Threads",
      "Integrated Apache Kafka event streaming pipeline with PostgreSQL state engine persistence",
      "Built real-time WebSocket telemetry push to responsive React dashboard for zero-polling monitoring",
      "Implemented Clean Architecture pattern separating domain state core from messaging adapters",
    ],
    githubUrl: "https://github.com/shashidhar0504/Portfolio",
    isProduction: true,
    myContribution: "Backend Architecture, Java 21 Virtual Thread State Engine, Kafka Event Consumer, PostgreSQL Persistence, WebSocket Streamer, React Dashboard UI",
    featured: true,
    caseStudy: {
      challenge: "Microgrid infrastructure generates high-frequency power & load telemetry across distributed IoT meters, requiring sub-second state evaluation without thread starvation or database connection pool bottlenecks.",
      solution: "Architected GridWeaver as an event-driven backend using Java 21 Virtual Threads and Apache Kafka event queues to process concurrent telemetry streams into a normalized PostgreSQL state engine with WebSocket live dashboard streaming.",
      architecture: [
        "IoT Energy Meters / Load Simulator",
        "Apache Kafka Telemetry Topic",
        "Spring Boot 3 (Virtual Thread Handlers)",
        "State Engine & Business Logic Layer",
        "PostgreSQL Relational Storage",
        "WebSocket STOMP Event Broadcaster",
        "React Monitoring Dashboard",
      ],
      features: [
        "Concurrent telemetry intake powered by lightweight Java 21 Virtual Threads",
        "Kafka topic ingestion for grid frequency, solar output, and battery load metrics",
        "Atomic state evaluation engine persisting meter snapshots into PostgreSQL",
        "Real-time WebSocket event broadcasting to React monitoring dashboard",
        "Docker containerized local development & execution configuration",
      ],
      integrations: ["Apache Kafka Stream API", "WebSocket STOMP Protocol", "Spring Boot Virtual Thread Executor", "Docker Compose"],
      deployment: "Containerized application with Docker Compose and Spring Boot production profile.",
      outcome: "Demonstrates enterprise-grade backend system engineering capable of high-throughput event processing with minimal memory overhead.",
    },
  },
  {
    id: "universalurja",
    title: "UniversalUrja Platform",
    subtitle: "Full Stack E-Commerce & Wellness Platform",
    category: "Production / Freelance",
    filterCategories: ["All", "Full Stack", "Production / Freelance", "Client Project"],
    description:
      "A production-ready full-stack e-commerce and wellness platform supporting online sales, course bookings, consultation scheduling, Razorpay payments, and administrative workflows.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate/JPA",
      "MySQL",
      "React.js",
      "REST APIs",
      "JWT",
      "Razorpay",
      "WhatsApp API",
      "Git/GitHub",
    ],
    highlights: [
      "End-to-end full stack architecture from initial requirements to cloud deployment",
      "Spring Security with JWT stateless authentication & role-based endpoint protection",
      "Normalized MySQL database schema managed via Hibernate/JPA entities",
      "Live Razorpay payment gateway integration for automated order processing",
      "Integrated course booking system, consultation scheduler, and client admin panel",
      "Direct WhatsApp customer support trigger for real-time client communication",
    ],
    githubUrl: "https://github.com/shashidhar0504/Portfolio",
    isProduction: true,
    myContribution: "100% End-to-End Ownership (Architecture, Spring Boot API, Database Schema, React Frontend, Razorpay, WhatsApp, Production Deployment)",
    featured: true,
    caseStudy: {
      challenge: "The client needed a unified online platform to sell wellness products, accept instant course bookings, schedule consultations, and handle real-time payment verification without relying on disjointed third-party forms.",
      solution: "Engineered a custom full-stack web application with Spring Boot REST services, a normalized MySQL database, secure JWT authorization, Razorpay checkout, and an intuitive React interface.",
      architecture: [
        "React Frontend (Responsive UI, Shopping Cart, Booking System)",
        "Spring Boot REST Controllers & Service Layer",
        "Spring Security Filters & JWT Provider",
        "Hibernate/JPA Data Repositories",
        "MySQL Relational Database",
        "External Gateway Integration (Razorpay Payment API & WhatsApp Trigger)",
      ],
      features: [
        "Product catalog with shopping cart & dynamic pricing",
        "Interactive consultation booking calendar with time-slot selection",
        "Secure customer & admin login via JWT tokens",
        "Real-time Razorpay payment verification & instant order receipt generation",
        "Admin management dashboard for updating inventory and managing bookings",
        "Direct WhatsApp instant communication for client support",
      ],
      integrations: ["Razorpay Payment Gateway", "WhatsApp Direct Chat API", "Email Notification Triggers", "JWT Authentication"],
      deployment: "Production web server hosting backend API services connected to live MySQL instance and optimized static React frontend.",
      outcome: "Successfully launched into production, processing live customer orders and bookings with automated payment reconciliation and zero system downtime.",
    },
  },
  {
    id: "v-technologies",
    title: "V Technologies Business Platform",
    subtitle: "Business & Lead Generation Website",
    category: "Client Project",
    filterCategories: ["All", "Client Project", "Business Websites"],
    description:
      "A professional business presence and lead generation platform designed to build market credibility, present B2B services, and drive direct client inquiries.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "WhatsApp API", "Email Automation", "Vercel"],
    highlights: [
      "Engineered conversion funnel connecting website visitors to direct WhatsApp & phone consultation",
      "Optimized business service presentation and IndiaMART/LinkedIn cross-channel links",
      "Integrated responsive contact forms with automated email alerts",
    ],
    liveUrl: "https://v-technologies.vercel.app/",
    isProduction: true,
    myContribution: "End-to-end website design, service architecture, lead generation integration, and domain/cloud deployment.",
    featured: true,
    caseStudy: {
      challenge: "V Technologies needed a credible, modern web presence to convert business inquiries from LinkedIn and B2B directories into qualified leads.",
      solution: "Engineered a sleek corporate portal highlighting technical services, client trust signals, and multi-channel contact options.",
      architecture: ["React Frontend Component Hierarchy", "Tailwind Design System", "Lead Routing Module", "Vercel Hosting"],
      features: [
        "B2B service capability showcase",
        "Multi-channel lead conversion (WhatsApp, Phone, Email)",
        "Social & directory link integration (LinkedIn, IndiaMART)",
        "Mobile-optimized responsive architecture",
      ],
      integrations: ["WhatsApp Business API", "Email Notifications", "Directory Cross-Linking"],
      deployment: "Vercel cloud production hosting.",
      outcome: "Elevated brand credibility and streamlined B2B client inquiry acquisition.",
    },
  },
  {
    id: "solar-website",
    title: "Vishwa Solar Energy Solutions",
    subtitle: "Solar & Renewable Energy Business Website",
    category: "Solar Business Website",
    filterCategories: ["All", "Client Project", "Business Websites"],
    description:
      "An industry-specific web application built for a solar energy provider to present residential/commercial solar installations, savings calculators, and quote requests.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "WhatsApp API", "Form Engine"],
    highlights: [
      "Interactive solar service showcase for residential and commercial clients",
      "Lead generation quote form routing inquiries to WhatsApp & Email",
      "Mobile-friendly responsive layout with high-contrast renewable theme",
    ],
    liveUrl: "https://vishwa-solar-energy-solutions.vercel.app/",
    isProduction: true,
    myContribution: "Designed UI/UX, built interactive solar product showcase, implemented lead routing, and deployed.",
    featured: false,
    caseStudy: {
      challenge: "Solar installation buyers need clear information on system capacity, benefits, and an easy way to request site surveys.",
      solution: "Built a conversion-focused renewable energy portal highlighting installation steps and quote request channels.",
      architecture: ["React UI Component Framework", "Form Validation Engine", "WhatsApp Lead Router"],
      features: [
        "Solar installation service showcase",
        "Instant quote request lead form",
        "WhatsApp & call quick connect triggers",
      ],
      integrations: ["WhatsApp Lead Capture", "Email Notification"],
      deployment: "Production web server hosting.",
      outcome: "Streamlined solar consultation requests and improved customer inquiry response time.",
    },
  },
  {
    id: "ca-shailesh",
    title: "CA Shailesh & Co. Platform",
    subtitle: "Client & Professional Services Website",
    category: "Client Services Website",
    filterCategories: ["All", "Client Project", "Business Websites"],
    description:
      "A professional services web platform built for a Chartered Accountancy firm, highlighting taxation, auditing, business advisory services, and consultation scheduling.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "WhatsApp API", "Call Direct"],
    highlights: [
      "Structured financial & tax advisory service directory",
      "Integrated direct phone call & WhatsApp consultation triggers",
      "Clean, professional corporate design instilling financial trust",
    ],
    liveUrl: "https://ca-shailesh-patil.vercel.app/",
    isProduction: true,
    myContribution: "Full lifecycle development: requirement discovery, UI layout, service copy structuring, and deployment.",
    featured: false,
    caseStudy: {
      challenge: "The CA firm required an authoritative digital presence to allow clients to view tax advisory services and request consultations directly.",
      solution: "Developed a clean, professional web portal featuring structured service breakdowns and instant contact options.",
      architecture: ["React Single Page Application", "Responsive Layout Engine", "Direct Action Handler"],
      features: [
        "Taxation & Audit service directory",
        "Direct appointment booking call-to-action buttons",
        "WhatsApp instant consultation starter",
      ],
      integrations: ["WhatsApp API", "Direct Tel Triggers"],
      deployment: "Cloud web hosting deployment.",
      outcome: "Established a professional digital front for client acquisition and consultation scheduling.",
    },
  },
  {
    id: "vlbvn",
    title: "VLBVN Organization Platform",
    subtitle: "Organization & Automation-Oriented Website",
    category: "Organization Website",
    filterCategories: ["All", "Client Project", "Automation"],
    description:
      "A modern organizational platform designed to streamline community information architecture, member engagement, and automated event notification workflows.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Vercel", "Automation Scripts"],
    highlights: [
      "Clean information architecture for organizational programs & events",
      "Automated notification triggers for user engagement",
      "Deployed live on Vercel with high performance score",
    ],
    liveUrl: "https://vlbvn.vercel.app/",
    isProduction: true,
    myContribution: "UI/UX design, frontend implementation, information architecture, and Vercel cloud deployment.",
    featured: false,
    caseStudy: {
      challenge: "The organization needed a clean digital portal to communicate announcements and manage member interactions effectively.",
      solution: "Engineered a fast, responsive React platform with structured program sections and automated engagement links.",
      architecture: ["React Component Tree", "Tailwind Styling System", "Vercel Infrastructure"],
      features: [
        "Program & announcement showcase",
        "Interactive member navigation",
        "Automated communication channels",
      ],
      integrations: ["Vercel Deployment Pipeline", "Social Connect"],
      deployment: "Live production deployment on Vercel.",
      outcome: "Improved organizational communication and digital outreach.",
    },
  },
  {
    id: "urbaneye",
    title: "UrbanEye Complaint Management System",
    subtitle: "Academic Issue Tracking Portal",
    category: "Academic Project",
    filterCategories: ["All", "Academic", "Full Stack"],
    description:
      "A centralized Java web portal for citizens to report, track, and manage urban infrastructure issues like road damage, street lighting, and public waste management.",
    techStack: ["Java", "JSP", "Servlets", "MySQL", "HTML5", "CSS3", "JavaScript", "JDBC"],
    highlights: [
      "Built multi-role architecture (Citizens, Municipal Officers, Admins)",
      "Implemented complaint tracking with real-time status updates using Java Servlets",
      "Designed relational database tables in MySQL using normalized JDBC persistence",
    ],
    githubUrl: "https://github.com/shashidhar0504/Portfolio",
    isProduction: false,
    myContribution: "Full design and implementation of Java Servlets backend, MySQL database queries, and JSP user interfaces.",
    featured: false,
    caseStudy: {
      challenge: "Lack of a transparent, trackable system for citizens to register municipal complaints and monitor resolution progress.",
      solution: "Developed an end-to-end Java web application utilizing MVC pattern (JSP views, Servlet controllers, MySQL model) to manage complaint lifecycles.",
      architecture: [
        "JSP View Templates",
        "Java Servlet MVC Controllers",
        "DAO Layer with Native JDBC Queries",
        "MySQL Relational Database",
      ],
      features: [
        "Citizen complaint submission with photo & location details",
        "Municipal officer assignment and status updating pipeline",
        "Admin summary analytics dashboard",
      ],
      integrations: ["Session Authentication", "File Upload Handler"],
      deployment: "Local Apache Tomcat Web Application Server deployment.",
      outcome: "Successfully demonstrated full SDLC capability using core enterprise Java technologies.",
    },
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    company: "Infotact Solutions Pvt Ltd | Bangalore, Karnataka",
    period: "2026 – Present",
    type: "Internship / Backend Systems",
    responsibilities: [
      "Architected GridWeaver event-driven backend telemetry intake handling high-concurrency energy metrics using Java 21 Virtual Threads.",
      "Built Spring Boot 3 micro-services integrated with Apache Kafka event streaming pipelines and PostgreSQL state persistence.",
      "Implemented real-time WebSocket telemetry push to responsive React monitoring client for zero-polling visualization.",
      "Applied Clean Architecture principles separating domain state core from messaging adapters to improve system maintainability.",
      "Engineered automated test cases and performed backend debugging, memory profiling, and Docker deployment configuration.",
    ],
  },
  {
    role: "Freelance Full Stack Developer & Technical Solution Builder",
    company: "Independent Technical Contractor (Remote)",
    period: "May 2026 – Present",
    type: "Freelance / Client Engineering",
    responsibilities: [
      "Own full software development lifecycle (SDLC) for client applications: Requirement → Development → Integration → Testing → Deployment.",
      "Architect and build robust Java & Spring Boot backend services, REST APIs, Spring Security authentication, and MySQL databases.",
      "Develop modern, responsive frontends with React.js, TypeScript, and Tailwind CSS focusing on visual excellence and conversion UX.",
      "Deliver industry-specific digital solutions for e-commerce, professional services, renewable energy, and corporate B2B clients.",
      "Implement third-party business integrations including Razorpay payment gateways, WhatsApp Business API triggers, and Nodemailer email automation.",
      "Incorporate AI APIs, LLM workflows, and intelligent automation into client solutions to streamline lead capture and business operations.",
      "Manage version control with Git/GitHub, perform performance optimization, and provide continuous production support on Vercel.",
    ],
  },
  {
    role: "Marketing & Graphic Design Intern",
    company: "I-Well Health Solutions Pvt. Ltd.",
    period: "May 2025 – August 2025",
    type: "Internship",
    responsibilities: [
      "Collaborated with cross-functional teams on digital branding, website design recommendations, and online customer acquisition workflows.",
      "Recommended digital productivity tools and trained 5+ team employees, improving team onboarding efficiency and internal communication.",
    ],
  },
];

export const developmentWorkflow = [
  {
    number: "01",
    phase: "Understand",
    title: "01 — Requirements & Business Objectives",
    description: "Deeply analyze business problem, target audience, technical scope, and functional success metrics before writing code.",
  },
  {
    number: "02",
    phase: "Plan",
    title: "02 — Architecture & UI/UX Planning",
    description: "Design normalized database schemas, REST API contracts, component hierarchy, event flows, and responsive UI layouts.",
  },
  {
    number: "03",
    phase: "Develop",
    title: "03 — Full Stack & Backend Development",
    description: "Implement clean Spring Boot backend services, Java 21 concurrency, relational persistence, and dynamic React components.",
  },
  {
    number: "04",
    phase: "Integrate",
    title: "04 — Payments, APIs & Automation",
    description: "Connect Razorpay payment gateways, WhatsApp chat triggers, SMTP email pipelines, and AI API endpoints.",
  },
  {
    number: "05",
    phase: "Test",
    title: "05 — Testing, Debugging & Validation",
    description: "Validate authentication security, endpoint responses, mobile responsiveness, edge cases, and cross-browser quality.",
  },
  {
    number: "06",
    phase: "Deploy",
    title: "06 — Production Cloud Deployment",
    description: "Configure production environment variables, domain routing, CDN caching, and automated cloud continuous deployment.",
  },
  {
    number: "07",
    phase: "Maintain",
    title: "07 — Support, Fixes & Continuous Support",
    description: "Monitor live application health, optimize backend performance, resolve user feedback, and iterate features.",
  },
];

export const services = [
  {
    title: "Full Stack Java Applications",
    description: "Custom enterprise web applications built with Spring Boot, Spring Security, MySQL, and React.js.",
    icon: "Server",
    tags: ["Java 21", "Spring Boot 3", "React", "MySQL"],
  },
  {
    title: "AI-Powered Business Applications",
    description: "Enhance traditional web software with AI API integrations, prompt engineering, and intelligent content workflows.",
    icon: "BrainCircuit",
    tags: ["AI APIs", "Prompt Engineering", "Intelligent Workflows"],
  },
  {
    title: "Business & Client Digital Storefronts",
    description: "High-conversion, mobile-optimized digital storefronts, service portals, and professional landing pages.",
    icon: "Globe",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "E-Commerce & Booking Platforms",
    description: "Complete digital platforms featuring product catalogs, Razorpay checkout, booking calendars, and admin management.",
    icon: "ShoppingCart",
    tags: ["Razorpay", "Bookings", "Inventory", "Admin UI"],
  },
  {
    title: "API Development & Event Architecture",
    description: "Secure, scalable RESTful APIs with stateless JWT authentication, role management, and Kafka telemetry streaming.",
    icon: "ShieldCheck",
    tags: ["REST APIs", "JWT", "Spring Security", "Kafka"],
  },
  {
    title: "Workflow & Communication Automation",
    description: "Automate customer communication with triggered WhatsApp chats, instant email alerts, and lead capture routing.",
    icon: "Zap",
    tags: ["WhatsApp API", "Nodemailer", "Automation"],
  },
];

export const whyWorkWithMe = [
  {
    title: "End-to-End Development",
    description: "Requirement → Development → Integration → Testing → Deployment. I own every layer from design to release.",
    icon: "CheckCircle2",
  },
  {
    title: "Backend Engineering",
    description: "Java 21 + Spring Boot 3 + REST APIs + Spring Security + Relational Databases (MySQL/PostgreSQL) + Kafka.",
    icon: "Target",
  },
  {
    title: "Modern Full Stack",
    description: "React.js + TypeScript + Vite + Tailwind CSS focusing on high visual quality and responsive UI/UX.",
    icon: "Sparkles",
  },
  {
    title: "AI & Automation",
    description: "AI API integrations + prompt engineering + automation workflows + intelligent digital solutions.",
    icon: "BrainCircuit",
  },
  {
    title: "Business Integration",
    description: "Payments (Razorpay) + WhatsApp API + Nodemailer Email + Contact workflows + Third-party APIs.",
    icon: "Plug",
  },
  {
    title: "Client Ready",
    description: "Proven experience understanding ambiguous business requirements and delivering working, production solutions.",
    icon: "TrendingUp",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sarhad College of Arts, Commerce and Science",
    period: "Graduating 2026",
    details: [
      "Cumulative Grade Point Average (CGPA): 9.17",
      "Core Coursework: Programming Fundamentals, Object-Oriented Java, Database Management Systems (DBMS), Web Engineering, Software Architecture",
    ],
  },
  {
    degree: "Intermediate in Commerce",
    institution: "VVS Independent PU College",
    period: "March 2023",
    details: ["Final Score: 74%"],
  },
];

export const stats = [
  { label: "BCA CGPA", value: "9.17", suffix: "" },
  { label: "Digital / Dev Projects", value: "7", suffix: "+" },
  { label: "Client & Business Solutions", value: "5", suffix: "+" },
  { label: "Languages Spoken", value: "6", suffix: "" },
  { label: "Years Building Stack", value: "2", suffix: "+" },
];

export const achievements = [
  "Maintained outstanding academic record with a 9.17 CGPA in Bachelor of Computer Applications (BCA)",
  "Independently designed, developed, and deployed full-stack production platforms end-to-end (Java, Spring Boot, React, MySQL)",
  "Engineered GridWeaver event-driven backend telemetry intake using Java 21 Virtual Threads, Kafka, PostgreSQL, and WebSockets",
  "Delivered client & business projects across diverse domains: E-commerce, Professional Services, Solar Energy, and Organizations",
  "Integrated Razorpay payment gateway and WhatsApp-based customer support into live production platforms",
  "Recommended digital tools and trained 5+ employees during internship, boosting onboarding speed and productivity",
];

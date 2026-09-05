// All content below is sourced directly from Shashidhar Biradar's profile & technical background.
// Edit this file to update site content — all components read from here.

export const profile = {
  name: "Shashidhar Biradar",
  primaryTitle: "Full Stack Java Developer | AI & Automation Engineer",
  secondaryTitle: "Spring Boot & React Specialist • Backend Developer • Technical Solution Builder",
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
  github: "https://github.com/shashidharbiradar",
  linkedin: "https://www.linkedin.com/in/shashidhar-biradar-20a999293/",
  resumeFile: "https://drive.google.com/file/d/1OtPn6N2_vjpEac3hwBfwqmav_aWpaUcX/view?usp=sharing",
  profileImage: "/profile.jpg",
  tagline:
    "I build complete digital solutions — from UI/UX and full-stack development to AI integration, automation, APIs, third-party integrations, and production cloud deployment.",
  status: "Available for Full-Time Opportunities & Client Projects",
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
    "I'm a Full Stack Java Developer and AI & Automation Engineer with hands-on experience crafting scalable, secure web platforms, business digital storefronts, and intelligent business systems. My core engineering foundation centers on Java, Spring Boot, Spring Security, Hibernate/JPA, MySQL, and React.js.",
    "I take complete ownership of the software development lifecycle — from initial requirement discovery, architecture design, and database normalization to REST API development, third-party payment/communication integrations, automated workflows, and production deployment.",
    "Beyond traditional software architecture, I integrate modern AI models, LLM APIs, and automated communication triggers into business applications across diverse industries — turning complex requirements into seamless, client-focused digital products.",
  ],
  highlights: [
    { label: "End-to-End Ownership", value: "Requirements → Design → Dev → Cloud Launch" },
    { label: "Core Stack", value: "Java · Spring Boot · React · AI & Automation" },
    { label: "Academic Excellence", value: "9.17 CGPA (BCA Graduate 2026)" },
  ],
};

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
    title: "Software Engineering",
    subtitle: "Enterprise Java & Backend Architecture",
    iconName: "Server",
    technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate / JPA", "REST APIs", "MySQL", "JWT Auth", "Microservice-ready Design"],
    description: "Architecting clean, scalable RESTful services, secure JWT authentication schemes, normalized relational databases, and maintainable backend systems.",
  },
  {
    id: "frontend-engineering",
    title: "Frontend Engineering",
    subtitle: "Modern React & Responsive Interfaces",
    iconName: "Layout",
    technologies: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "HTML5/CSS3", "Framer Motion"],
    description: "Designing fast, mobile-first visual experiences with intuitive component structures, dynamic state management, and subtle micro-interactions.",
  },
  {
    id: "ai-intelligent-systems",
    title: "AI & Intelligent Systems",
    subtitle: "AI Integrations & Workflow Enhancement",
    iconName: "BrainCircuit",
    technologies: ["LLM API Integration", "AI-assisted Workflows", "Intelligent Automation", "Prompt Engineering", "AI-enhanced Web Applications"],
    description: "Enhancing traditional applications with intelligent natural language interfaces, automated content pipelines, and AI API integrations.",
  },
  {
    id: "automation",
    title: "Workflow Automation",
    subtitle: "API & Process Integration",
    iconName: "Zap",
    technologies: ["WhatsApp Business API", "Automated Email Workflows", "Lead Management", "Triggered Webhooks", "Deployment Scripts"],
    description: "Eliminating manual client overhead through automated communication channels, event-driven webhooks, and streamlined operational triggers.",
  },
  {
    id: "integrations",
    title: "Third-Party Integrations",
    subtitle: "Payments, Communication & APIs",
    iconName: "Layers",
    technologies: ["Razorpay Integration", "WhatsApp Direct Chat", "Nodemailer / SMTP", "Third-Party REST APIs", "OAuth & Security Tokens"],
    description: "Seamlessly connecting production platforms to payment gateways, customer support tools, and external cloud services.",
  },
  {
    id: "deployment",
    title: "Cloud & Deployment",
    subtitle: "Production Hosting & Environments",
    iconName: "Cloud",
    technologies: ["Vercel", "Git / GitHub", "Production Maintenance", "Domain Config", "Environment Variables", "Build Optimization"],
    description: "Packaging frontend static bundles and backend web services for high-availability cloud deployment with zero-downtime workflows.",
  },
];

export type SkillCategory = {
  title: string;
  skills: { name: string; level: string; category: string; description: string; icon: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Enterprise Java",
    skills: [
      { name: "Java", level: "Advanced", category: "Core Language", description: "OOP, Collections, Streams, Concurrency", icon: "Code2" },
      { name: "Spring Boot", level: "Advanced", category: "Backend Framework", description: "Dependency Injection, Auto-config, Spring Data", icon: "Server" },
      { name: "Spring Security", level: "Strong", category: "Security", description: "JWT, Role-based Access, Filter Chains", icon: "ShieldCheck" },
      { name: "Hibernate / JPA", level: "Advanced", category: "ORM", description: "Entity mapping, HQL queries, Relationships", icon: "Database" },
      { name: "REST APIs", level: "Advanced", category: "API Design", description: "RESTful architecture, JSON payloads, HTTP status", icon: "Globe" },
      { name: "Servlets & JSP", level: "Experienced", category: "Java Web", description: "Request handling, Session management, MVC", icon: "Cpu" },
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", level: "Advanced", category: "UI Library", description: "Hooks, Context API, Component Architecture", icon: "Layout" },
      { name: "JavaScript / TypeScript", level: "Advanced", category: "Web Core", description: "ES6+, Async/Await, DOM, Type Safety", icon: "FileCode" },
      { name: "Tailwind CSS", level: "Strong", category: "Styling", description: "Custom design systems, responsive grid", icon: "Palette" },
      { name: "Bootstrap", level: "Experienced", category: "UI Framework", description: "Responsive layouts, utility components", icon: "Smartphone" },
      { name: "Responsive UI/UX", level: "Advanced", category: "Design", description: "Mobile-first, touch targets, accessible UI", icon: "Monitor" },
    ],
  },
  {
    title: "AI, Automation & Integrations",
    skills: [
      { name: "AI API Integration", level: "Practical Experience", category: "Intelligent Systems", description: "Connecting LLMs & AI APIs to production apps", icon: "Brain" },
      { name: "WhatsApp Business API", level: "Strong", category: "Communication", description: "Automated chat links, pre-filled customer triggers", icon: "MessageSquare" },
      { name: "Razorpay Gateway", level: "Strong", category: "Payments", description: "Checkout integration, webhook verification", icon: "CreditCard" },
      { name: "Email Automation", level: "Strong", category: "Workflows", description: "Nodemailer, SMTP triggers, dynamic notifications", icon: "Mail" },
      { name: "Workflow Automation", level: "Strong", category: "Process", description: "Lead routing, triggered API notifications", icon: "Workflow" },
    ],
  },
  {
    title: "Database, Tools & Cloud",
    skills: [
      { name: "MySQL", level: "Advanced", category: "Database", description: "Schema normalization, indexing, complex joins", icon: "Database" },
      { name: "Git & GitHub", level: "Advanced", category: "Version Control", description: "Branching strategies, PRs, version tracking", icon: "GitBranch" },
      { name: "Vercel / Cloud", level: "Experienced", category: "Deployment", description: "Frontend hosting, domain routing, env setup", icon: "CloudUpload" },
      { name: "Postman", level: "Advanced", category: "Testing", description: "API documentation, endpoint validation", icon: "Terminal" },
      { name: "Eclipse / VS Code", level: "Advanced", category: "IDE", description: "Java debugging, Maven dependencies, extensions", icon: "Laptop" },
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
  category: "Full Stack" | "Production" | "AI & Automation" | "Automation" | "Client Work" | "Business Websites" | "E-Commerce" | "Academic";
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
    id: "universalurja",
    title: "UniversalUrja Platform",
    category: "Production",
    filterCategories: ["All", "Full Stack", "Production", "Client Work", "E-Commerce"],
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
    githubUrl: "https://github.com/shashidharbiradar",
    isProduction: true,
    myContribution: "100% End-to-End Ownership (Architecture, Spring Boot API, Database Schema, React Frontend, Razorpay, WhatsApp, Production Deployment)",
    featured: true,
    caseStudy: {
      challenge: "The client needed a unified online platform to sell wellness products, accept instant course bookings, schedule consultations, and handle real-time payment verification without relying on disjointed third-party forms.",
      solution: "Engineered a custom full-stack web application with Spring Boot REST services, a normalized MySQL database, secure JWT authorization, Razorpay checkout, and an intuitive React interface.",
      architecture: [
        "React Frontend (Responsive UI, Order Form, Booking System)",
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
    id: "manasa-gift-studio",
    title: "Manasa's Gift Studio",
    category: "E-Commerce",
    filterCategories: ["All", "Client Work", "E-Commerce", "Business Websites"],
    description:
      "A premium digital storefront experience engineered for personalized hampers, curated gift boxes, and corporate gifting with interactive Quick Views and direct WhatsApp lead conversion.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Vercel", "WhatsApp API", "Framer Motion"],
    highlights: [
      "Designed conversion-optimized Build Your Hamper & product quick-view interface",
      "Integrated instant WhatsApp checkout routing custom gift specifications to business owner",
      "Mobile-first responsive UX optimized for social media ad traffic conversion",
      "Deployed live on Vercel high-availability CDN",
    ],
    liveUrl: "https://manasa-gift-studio.vercel.app/",
    isProduction: true,
    myContribution: "Full UI/UX design, frontend development, product presentation showcase, WhatsApp conversion routing, and Vercel cloud deployment.",
    featured: true,
    caseStudy: {
      challenge: "The client needed an elegant digital storefront to showcase custom hampers and corporate gifting options without requiring a complex, expensive backend for initial launch.",
      solution: "Created a modern, high-conversion React storefront featuring dynamic product quick views, occasion filtering, and automated WhatsApp order specification routing.",
      architecture: ["React/TypeScript Single-Page Application", "Tailwind CSS Styling Engine", "WhatsApp Order Generator", "Vercel CDN Infrastructure"],
      features: [
        "Curated hamper showcase & corporate gifting portal",
        "Interactive product quick view modal with item customization",
        "Direct WhatsApp order dispatch with pre-filled hamper details",
        "Occasion & category filtering UI",
      ],
      integrations: ["WhatsApp Business API Direct Links", "Vercel Analytics"],
      deployment: "Production deployment on Vercel with automatic GitHub continuous integration.",
      outcome: "Enabled client to accept direct custom gift orders through WhatsApp with zero checkout friction.",
    },
  },
  {
    id: "v-technologies",
    title: "V Technologies Business Platform",
    category: "Business Websites",
    filterCategories: ["All", "Client Work", "Business Websites"],
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
    id: "ca-shailesh",
    title: "CA Shailesh & Co. Platform",
    category: "Business Websites",
    filterCategories: ["All", "Client Work", "Business Websites"],
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
    featured: true,
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
    id: "solar-website",
    title: "Vishwa Solar Energy Solutions",
    category: "Business Websites",
    filterCategories: ["All", "Client Work", "Business Websites"],
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
    id: "vlbvn",
    title: "VLBVN Organization Platform",
    category: "Automation",
    filterCategories: ["All", "Automation", "Client Work", "Business Websites"],
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
    id: "ai-automation-lead-solution",
    title: "AI & Automation Lead Solution",
    category: "AI & Automation",
    filterCategories: ["All", "AI & Automation", "Client Work", "Full Stack"],
    description:
      "An intelligent, automated lead-capture and business communication solution designed to convert web traffic into qualified leads via automated WhatsApp triggers and smart email notifications.",
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express",
      "AI API Integration",
      "WhatsApp Business API",
      "Nodemailer",
      "Tailwind CSS",
    ],
    highlights: [
      "Automated lead capture routing customer requests directly to WhatsApp & Email",
      "AI-assisted response drafting for rapid client inquiry follow-ups",
      "Integrated Nodemailer backend for instant email notifications to business owner",
    ],
    githubUrl: "https://github.com/shashidharbiradar",
    isProduction: true,
    myContribution: "Designed & developed frontend, backend email triggers, WhatsApp automation workflow, and deployment.",
    featured: false,
    caseStudy: {
      challenge: "Small business clients often lose potential leads due to delayed follow-ups and complex contact forms that lack instant messaging access.",
      solution: "Built a conversion-engineered web solution featuring pre-filled WhatsApp action triggers, automated email dispatchers, and AI-assisted client inquiry routing.",
      architecture: [
        "React/TypeScript Frontend with conversion UX",
        "Node.js & Express API routing backend",
        "Nodemailer SMTP email service module",
        "WhatsApp Deep-link Generator Engine",
      ],
      features: [
        "Instant one-click WhatsApp pre-filled conversation starter",
        "Smart contact form with automated server-side email dispatch",
        "AI response drafting workflow for customer inquiries",
        "Mobile-optimized responsive design",
      ],
      integrations: ["WhatsApp Deep Links", "Nodemailer SMTP", "AI Assistant API"],
      deployment: "Deployed live on cloud infrastructure with zero-lag response time.",
      outcome: "Improved lead conversion rates and eliminated manual inquiry handling delay for client projects.",
    },
  },
  {
    id: "urbaneye",
    title: "UrbanEye Complaint Management System",
    category: "Academic",
    filterCategories: ["All", "Academic", "Full Stack"],
    description:
      "A centralized web platform for citizens to report, track, and manage urban infrastructure issues like road damage, street lighting, and public waste management.",
    techStack: ["Java", "JSP", "Servlets", "MySQL", "HTML5", "CSS3", "JavaScript", "JDBC"],
    highlights: [
      "Built multi-role architecture (Citizens, Municipal Officers, Admins)",
      "Implemented complaint tracking with real-time status updates using Java Servlets",
      "Designed relational database tables in MySQL using normalized JDBC persistence",
    ],
    githubUrl: "https://github.com/shashidharbiradar",
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
    role: "Freelance Full Stack Developer & Technical Solution Builder",
    company: "Independent Technical Contractor (Remote)",
    period: "May 2026 – Present",
    type: "Freelance / Client Engineering",
    responsibilities: [
      "Own full software development lifecycle (SDLC) for client applications from initial requirements gathering to final production cloud deployment.",
      "Architect and build robust Java & Spring Boot backend micro-services, REST APIs, Spring Security authentication, and MySQL databases.",
      "Develop modern, responsive frontends with React.js, TypeScript, and Tailwind CSS focusing on visual excellence and conversion UX.",
      "Deliver industry-specific digital solutions for e-commerce, professional services, renewable energy, and corporate B2B clients.",
      "Implement third-party business integrations including Razorpay payment gateways, WhatsApp Business API chat triggers, and automated email services.",
      "Incorporate AI APIs, LLM workflows, and intelligent automation into client solutions to streamline business operations.",
      "Manage version control with Git/GitHub, perform performance optimization, and provide continuous production support.",
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

export const aiAutomationSteps = [
  {
    step: "01",
    title: "Java Engineering",
    subtitle: "Solid Foundation",
    description: "Mastered core Java OOP concepts, data structures, multithreading, and relational SQL database design.",
    icon: "Code2",
  },
  {
    step: "02",
    title: "Full Stack Architecture",
    subtitle: "Spring Boot & React",
    description: "Built complete web applications connecting React frontends with Spring Boot REST services, JWT auth, and JPA data layers.",
    icon: "Layers",
  },
  {
    step: "03",
    title: "Production Delivery",
    subtitle: "Real Client Platforms",
    description: "Engineered and deployed production platforms like UniversalUrja and Manasa's Gift Studio, handling sales, bookings, and payments.",
    icon: "Rocket",
  },
  {
    step: "04",
    title: "Third-Party Integrations",
    subtitle: "Payments & Messaging",
    description: "Connected applications with Razorpay checkout gateways, WhatsApp communication triggers, and email API pipelines.",
    icon: "Workflow",
  },
  {
    step: "05",
    title: "Workflow Automation",
    subtitle: "Operational Efficiency",
    description: "Automated client lead routing, instant customer follow-ups, triggered notifications, and deployment scripts.",
    icon: "Zap",
  },
  {
    step: "06",
    title: "AI Integration",
    subtitle: "Intelligent Systems",
    description: "Integrated modern AI APIs, prompt workflows, and automated intelligence into production web solutions.",
    icon: "BrainCircuit",
  },
];

export const developmentWorkflow = [
  {
    number: "01",
    phase: "Discover",
    title: "Requirements & Discovery",
    description: "Understand the core business problem, user personas, client goals, and technical feasibility.",
  },
  {
    number: "02",
    phase: "Design",
    title: "Architecture & UI Planning",
    description: "Design normalized database schemas, REST API endpoints, component hierarchy, and responsive UI mockups.",
  },
  {
    number: "03",
    phase: "Develop",
    title: "Full Stack Development",
    description: "Write clean, maintainable Spring Boot backend services and modular React frontend components.",
  },
  {
    number: "04",
    phase: "Integrate",
    title: "Integrations & Automation",
    description: "Wire up Razorpay payments, WhatsApp messaging triggers, email dispatchers, and AI API endpoints.",
  },
  {
    number: "05",
    phase: "Test",
    title: "Testing & Optimization",
    description: "Validate authentication security, API performance, mobile responsiveness, and cross-browser quality.",
  },
  {
    number: "06",
    phase: "Deploy",
    title: "Production Cloud Launch",
    description: "Configure production environment variables, domain routing, and cloud deployment pipelines.",
  },
  {
    number: "07",
    phase: "Improve",
    title: "Support & Iteration",
    description: "Monitor system health, fix edge-case bugs, and continuously improve user experience based on real feedback.",
  },
];

export const services = [
  {
    title: "Full Stack Java Applications",
    description: "Custom enterprise web applications built with Spring Boot, Spring Security, MySQL, and React.js.",
    icon: "Server",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
  },
  {
    title: "AI-Powered Business Applications",
    description: "Enhance traditional web software with AI capabilities, smart chatbots, and intelligent content workflows.",
    icon: "BrainCircuit",
    tags: ["AI APIs", "Prompt Engineering", "Intelligent Workflows"],
  },
  {
    title: "Business & Client Digital Storefronts",
    description: "High-conversion, mobile-optimized digital storefronts, e-commerce hampers, and professional landing pages.",
    icon: "Globe",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "E-Commerce & Booking Platforms",
    description: "Complete digital shopfronts featuring product catalogs, Razorpay checkout, booking calendars, and admin management.",
    icon: "ShoppingCart",
    tags: ["Razorpay", "Bookings", "Inventory", "Admin UI"],
  },
  {
    title: "API Development & Security",
    description: "Secure, scalable RESTful APIs with stateless JWT authentication, role management, and clean swagger documentation.",
    icon: "ShieldCheck",
    tags: ["REST APIs", "JWT", "Spring Security"],
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
    title: "End-to-End Ownership",
    description: "I manage every layer — UI/UX, frontend, backend, database, APIs, integrations, and deployment.",
    icon: "CheckCircle2",
  },
  {
    title: "Production Mindset",
    description: "I build real-world software designed for uptime, security, performance, and real business use.",
    icon: "Target",
  },
  {
    title: "AI + Engineering Hybrid",
    description: "Combining solid core Java software architecture with modern AI capabilities and automation.",
    icon: "Sparkles",
  },
  {
    title: "Integration Expertise",
    description: "Seamlessly connecting apps to payment gateways, WhatsApp, email triggers, and third-party APIs.",
    icon: "Plug",
  },
  {
    title: "Business Understanding",
    description: "Translating ambiguous client requirements into clear technical specs and on-time solutions.",
    icon: "TrendingUp",
  },
  {
    title: "Continuous Evolution",
    description: "Constantly mastering new tools, frameworks, AI APIs, and deployment practices.",
    icon: "RefreshCw",
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
  { label: "Digital / Dev Projects", value: "8", suffix: "+" },
  { label: "Client & Business Solutions", value: "5", suffix: "+" },
  { label: "Languages Spoken", value: "6", suffix: "" },
  { label: "Years Building Stack", value: "2", suffix: "+" },
];

export const achievements = [
  "Maintained outstanding academic record with a 9.17 CGPA in Bachelor of Computer Applications (BCA)",
  "Independently designed, developed, and deployed full-stack production platforms end-to-end (Java, Spring Boot, React, MySQL)",
  "Delivered client & business projects across diverse domains: E-commerce, Gifting, Professional Services, Solar, and Organizations",
  "Integrated Razorpay payment gateway and WhatsApp-based customer support into live production platforms",
  "Optimized application load times and resolved backend bottlenecks through efficient database querying and indexing",
  "Recommended digital tools and trained 5+ employees during internship, boosting onboarding speed and productivity",
];

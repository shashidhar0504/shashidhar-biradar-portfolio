import { useState, useRef, useEffect, FormEvent } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, ExternalLink, Mail, Phone, CheckCircle2, AlertCircle, FileText, Linkedin, Github } from "lucide-react";
import { profile } from "../../data/portfolio";

type LinkItem = {
  label: string;
  url: string;
  type?: "whatsapp" | "call" | "email" | "linkedin" | "github" | "external" | "resume";
};

type Message = {
  sender: "bot" | "user";
  text: string;
  quickReplies?: string[];
  links?: LinkItem[];
};

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"chat" | "form">("chat");
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Form State inside Chatbot
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Job Opportunity",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formErrorMsg, setFormErrorMsg] = useState("");

  const projectTypes = [
    "Job Opportunity",
    "Freelance Project",
    "Full Stack Development",
    "AI & Automation Project",
    "Website / Digital Storefront",
    "Other Inquiry",
  ];

  // Rule 9 & Rule 8: Smart suggested questions & Assistant identity
  const initialBotMsg: Message = {
    sender: "bot",
    text: `Hello! 👋 I'm Shashidhar's Portfolio Assistant.\n\nI can answer questions about his Full Stack Java & AI background, projects, 9.17 BCA CGPA, or connect you directly with him!`,
    quickReplies: [
      "What does Shashidhar do?",
      "Show me his projects",
      "What are his strongest skills?",
      "Tell me about UniversalUrja",
      "What AI work has he done?",
      "Is he available for a job?",
      "Can I hire him for a project?",
      "How can I contact him?",
    ],
  };

  const [messages, setMessages] = useState<Message[]>([initialBotMsg]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && viewMode === "chat") scrollToBottom();
  }, [messages, isOpen, isTyping, viewMode]);

  // Verified Direct Contact Links
  const phoneCallUrl = `tel:${profile.phone}`;
  const whatsappNumber = profile.whatsappNumber || "916363284060";
  const emailAddress = profile.email;
  const linkedinUrl = profile.linkedin;
  const githubUrl = profile.github;
  const resumeUrl = profile.resumeFile;

  const defaultWhatsappMsg = encodeURIComponent(
    "Hello Shashidhar, I visited your portfolio and would like to discuss an opportunity/project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultWhatsappMsg}`;

  // Standard Contact Actions Link Array
  const standardContactLinks: LinkItem[] = [
    { label: "WhatsApp 💬", url: whatsappUrl, type: "whatsapp" },
    { label: "Call +91 6363284060 📞", url: phoneCallUrl, type: "call" },
    { label: "Email Shashidhar ✉️", url: `mailto:${emailAddress}`, type: "email" },
    { label: "LinkedIn Profile 💼", url: linkedinUrl, type: "linkedin" },
    { label: "GitHub Profile 💻", url: githubUrl, type: "github" },
  ];

  // Comprehensive Knowledge Engine covering all 50 questions & 10 Rules
  const generateBotReply = (userQuery: string): Message => {
    const q = userQuery.toLowerCase().trim();

    // Trigger Inquiry Form Mode
    if (q.includes("form") || q.includes("inquiry") || q.includes("enquiry") || q.includes("fill")) {
      setViewMode("form");
      return {
        sender: "bot",
        text: `Opening the Inquiry Form for you! You can submit details directly via API, WhatsApp, or Email below.`,
      };
    }

    // Q1, Q3, Q4: Who is Shashidhar / Identity / Location
    if (q.includes("who is") || q.includes("about shashidhar") || q.includes("tell me about shashidhar") || q.includes("who is shashidhar biradar")) {
      return {
        sender: "bot",
        text: `Shashidhar Biradar is a Full Stack Java Developer and AI & Automation Engineer based in Pune, Maharashtra, India.\n\nHe specializes in Java, Spring Boot, React, REST APIs, MySQL, AI integrations, automation, third-party integrations, and production-ready digital solutions.`,
        quickReplies: ["What does Shashidhar do?", "What are his strongest skills?", "Show me his projects", "How can I contact him?"],
      };
    }

    // Q4: Location
    if (q.includes("where is") || q.includes("location") || q.includes("based in") || q.includes("pune")) {
      return {
        sender: "bot",
        text: `Shashidhar is based in Pune, Maharashtra, India.`,
        quickReplies: ["How can I contact him?", "Is he available for a job?", "Show me his projects"],
      };
    }

    // Q2, Q12, Q13, Q40, Q41: What does Shashidhar do / Capabilities / Full-Stack / Scratch dev
    if (q.includes("what does") || q.includes("do shashidhar do") || q.includes("what he do") || q.includes("capabilities") || q.includes("workflow") || q.includes("scratch")) {
      return {
        sender: "bot",
        text: `Shashidhar builds complete digital solutions — including full-stack web applications, business websites, e-commerce platforms, AI-powered solutions, automation workflows, REST APIs, payment integrations, communication integrations, and production deployments.\n\nHis workflow covers:\nDiscover → Design → Develop → Integrate → Test → Deploy → Improve`,
        quickReplies: ["Show me his projects", "What are his strongest skills?", "Is he available for a job?", "Can I hire him for a project?"],
      };
    }

    // Q5, Q48, Q50, Rule 3: Job Recruiters / Employment / Resume / Availability
    if (
      q.includes("job") ||
      q.includes("hiring") ||
      q.includes("hire") ||
      q.includes("recruiter") ||
      q.includes("employment") ||
      q.includes("full-time") ||
      q.includes("role") ||
      q.includes("available for a job") ||
      q.includes("resume") ||
      q.includes("cv")
    ) {
      return {
        sender: "bot",
        text: `Yes! Shashidhar is open to suitable full-time opportunities, particularly roles related to Full Stack Java Development, Spring Boot, Backend Development, React, AI, Automation, and Software Engineering.\n\n• Primary Title: Full Stack Java Developer | AI & Automation Engineer\n• Education: BCA (9.17 CGPA)\n• Core Stack: Java, Spring Boot, React, MySQL, REST APIs\n• Production Work: UniversalUrja & Live Client Storefronts\n• Location: Pune, India\n\nYou can contact Shashidhar directly through WhatsApp, email, or LinkedIn below.`,
        links: [
          { label: "View Resume PDF 📄", url: resumeUrl, type: "resume" },
          { label: "WhatsApp Shashidhar 💬", url: whatsappUrl, type: "whatsapp" },
          { label: "Email Shashidhar ✉️", url: `mailto:${emailAddress}`, type: "email" },
          { label: "View LinkedIn 💼", url: linkedinUrl, type: "linkedin" },
        ],
        quickReplies: ["Show me his projects", "What are his strongest skills?", "📝 Fill Inquiry Form"],
      };
    }

    // Q6, Q38, Q39, Q49, Rule 4: Freelance / Clients / Hire for Project
    if (
      q.includes("freelance") ||
      q.includes("client") ||
      q.includes("hire him for a project") ||
      q.includes("hire for project") ||
      q.includes("project inquiry") ||
      q.includes("business idea") ||
      q.includes("discuss a project")
    ) {
      return {
        sender: "bot",
        text: `Yes! Shashidhar is available for suitable freelance and client projects involving websites, full-stack applications, AI solutions, automation, integrations, e-commerce platforms, and custom digital products.\n\nHe handles the entire project life cycle — requirements, UI/UX, backend APIs, database, payment/communication integrations, testing, and cloud deployment.`,
        links: [
          { label: "WhatsApp Shashidhar 💬", url: whatsappUrl, type: "whatsapp" },
          { label: "Email Shashidhar ✉️", url: `mailto:${emailAddress}`, type: "email" },
          { label: "Call +91 6363284060 📞", url: phoneCallUrl, type: "call" },
        ],
        quickReplies: ["📝 Fill Inquiry Form", "Show me his projects", "What can he build?"],
      };
    }

    // Q7, Q8, Rule 5: Technologies & Strongest Stack
    if (q.includes("strongest") || q.includes("best skills") || q.includes("core skills")) {
      return {
        sender: "bot",
        text: `Shashidhar's strongest core areas include:\n\n1. Java & Spring Boot\n2. REST API Development\n3. Spring Security & JWT Authentication\n4. Hibernate/JPA & MySQL Database Architecture\n5. React.js, TypeScript & Modern UI/UX\n6. Full-Stack Integration & Production Deployment\n7. AI & Automation Workflows`,
        quickReplies: ["Show me his projects", "Tell me about UniversalUrja", "Is he available for a job?"],
      };
    }

    if (
      q.includes("tech") ||
      q.includes("stack") ||
      q.includes("skill") ||
      q.includes("know") ||
      q.includes("language") ||
      q.includes("framework")
    ) {
      // Q27: React
      if (q.includes("react")) {
        return {
          sender: "bot",
          text: `Yes! React is one of Shashidhar's primary frontend technologies. He uses React to build responsive, interactive, and component-based user interfaces.`,
          quickReplies: ["Does he know Spring Boot?", "Show me his projects"],
        };
      }
      // Q28: Spring Boot
      if (q.includes("spring boot") || q.includes("springboot")) {
        return {
          sender: "bot",
          text: `Yes! Spring Boot is one of his core backend technologies. He uses it for REST APIs, backend business logic, authentication, database integration, and production-oriented Java applications.`,
          quickReplies: ["Does he know React?", "Tell me about UniversalUrja"],
        };
      }
      // Q29: Spring Security
      if (q.includes("security") || q.includes("jwt") || q.includes("auth")) {
        return {
          sender: "bot",
          text: `Yes! Shashidhar has practical experience with Spring Security, including authorization workflows, role-based security, and JWT-based authentication.`,
          quickReplies: ["Does he know Spring Boot?", "Tell me about UniversalUrja"],
        };
      }
      // Q30: Databases / MySQL
      if (q.includes("database") || q.includes("mysql") || q.includes("sql") || q.includes("hibernate") || q.includes("jpa")) {
        return {
          sender: "bot",
          text: `Yes! MySQL is one of his primary databases. He has experience with database design, normalization, Hibernate/JPA, entity relationships, queries, and backend database integration.`,
          quickReplies: ["What are his strongest skills?", "Show me his projects"],
        };
      }
      // Q31: REST APIs
      if (q.includes("api") || q.includes("rest")) {
        return {
          sender: "bot",
          text: `Yes! REST API development is one of his core backend skills. He has built APIs for authentication, business logic, e-commerce workflows, orders, bookings, and third-party integrations.`,
          quickReplies: ["Tell me about UniversalUrja", "Show me his projects"],
        };
      }
      // Q32: Razorpay / Payments
      if (q.includes("razorpay") || q.includes("payment")) {
        return {
          sender: "bot",
          text: `Yes! Shashidhar has practical experience integrating Razorpay into production-oriented applications, including payment workflows connected with business and order processes.`,
          quickReplies: ["Tell me about UniversalUrja", "Show me his projects"],
        };
      }

      // General Tech Stack (Q7)
      return {
        sender: "bot",
        text: `Shashidhar's technical stack includes:\n\n• Programming & Frameworks: Java, JavaScript, TypeScript, HTML5, CSS3, React, Spring Boot, Spring Security, Spring MVC, Hibernate/JPA, Node.js, Express\n• Core Backend: REST APIs, JWT authentication, MySQL\n• Tools & Styling: Git/GitHub, Postman, Bootstrap, Tailwind CSS\n• Integrations: Razorpay payments, WhatsApp API, Nodemailer/Email, AI/LLM APIs`,
        quickReplies: ["What are his strongest skills?", "Show me his projects", "Does he work with AI?"],
      };
    }

    // Q9: AI Work
    if (q.includes("ai") || q.includes("artificial intelligence") || q.includes("llm") || q.includes("prompt")) {
      return {
        sender: "bot",
        text: `Yes! Shashidhar has expanded his development work into AI and intelligent digital solutions.\n\nHis AI-related work includes AI integration, AI-assisted workflows, prompt engineering, AI-powered applications, API/LLM integrations where applicable, and combining AI with traditional software development and automation.`,
        quickReplies: ["Does he work with automation?", "Show me his projects", "Can I hire him for a project?"],
      };
    }

    // Q10: Automation Work
    if (q.includes("automation") || q.includes("workflow")) {
      return {
        sender: "bot",
        text: `Yes! Shashidhar works with automation and API-driven workflows, including automated communication, business workflows, WhatsApp integration, email integration, lead-generation workflows, deployment workflows, and AI-enhanced automation.`,
        quickReplies: ["What AI work has he done?", "Can Shashidhar integrate WhatsApp?", "Show me his projects"],
      };
    }

    // Q15, Q16: UniversalUrja
    if (q.includes("universal") || q.includes("urja") || q.includes("universalurja")) {
      return {
        sender: "bot",
        text: `UniversalUrja is a production-oriented e-commerce and wellness platform developed using Java, Spring Boot, Spring Security, Hibernate/JPA, MySQL, React, REST APIs, JWT authentication, Razorpay, and Git/GitHub.\n\nIt supports online sales, course bookings, consultation scheduling, payments, order management, administrative workflows, and WhatsApp support.\n\nShashidhar's Role: Full SDLC development — frontend, backend, REST APIs, JWT auth, database design, Razorpay payment integration, order workflows, and deployment.`,
        quickReplies: ["Show me other projects", "What are his strongest skills?", "📝 Fill Inquiry Form"],
      };
    }

    // Q17: UrbanEye
    if (q.includes("urbaneye") || q.includes("urban eye") || q.includes("citizen")) {
      return {
        sender: "bot",
        text: `UrbanEye is an academic citizen portal designed for reporting and tracking urban infrastructure issues such as road damage and waste-management problems.\n\nIt was developed using Java, JSP, Servlets, MySQL, HTML5, CSS3, and JavaScript.`,
        quickReplies: ["Show me other projects", "Tell me about UniversalUrja"],
      };
    }

    // Q18, Q19: Manasa's Gift Studio
    if (q.includes("manasa") || q.includes("gift studio") || q.includes("gift")) {
      return {
        sender: "bot",
        text: `Manasa's Gift Studio is a premium digital storefront project focused on customized gifts, curated hampers, corporate gifting, occasion-based gifting, product presentation, and a Build Your Hamper experience.\n\nThe project focuses strongly on modern UI/UX, product presentation, responsiveness, and customer conversion.`,
        links: [
          { label: "Manasa's Gift Studio Live Site ↗", url: "https://manasa-gift-studio.vercel.app/", type: "external" },
        ],
        quickReplies: ["Show me other projects", "Can I hire him for a project?"],
      };
    }

    // Q20, Q21: V Technologies
    if (q.includes("v technologies") || q.includes("vtechnologies") || q.includes("v tech")) {
      return {
        sender: "bot",
        text: `V Technologies is a business-focused website project designed to strengthen the company's digital presence, present its services professionally, and improve lead generation and customer communication.\n\nShashidhar's Focus: Professional website design, responsive UI/UX, service presentation, lead generation, WhatsApp communication, call & email CTAs, and strengthening online presence.`,
        links: [
          { label: "V Technologies Live Site ↗", url: "https://v-technologies.vercel.app/", type: "external" },
        ],
        quickReplies: ["Show me other projects", "Can I hire him for a project?"],
      };
    }

    // Q22: CA Shailesh
    if (q.includes("shailesh") || q.includes("ca shailesh") || q.includes("chartered accountant")) {
      return {
        sender: "bot",
        text: `The CA Shailesh project is a professional-services website designed to establish a strong online presence for a Chartered Accountant and make it easier for potential clients to understand services and initiate contact.\n\nIt focuses on professional presentation, responsive design, service information, and direct communication through WhatsApp, phone, and email.`,
        links: [
          { label: "CA Shailesh & Co. Live Site ↗", url: "https://ca-shailesh-patil.vercel.app/", type: "external" },
        ],
        quickReplies: ["Show me other projects", "Can I hire him for a project?"],
      };
    }

    // Q23: Solar / Vishwa Solar
    if (q.includes("solar") || q.includes("vishwa")) {
      return {
        sender: "bot",
        text: `The Solar website (Vishwa Solar Energy Solutions) is a renewable-energy/solar business project designed to showcase solar services and create a professional digital presence with strong customer-conversion opportunities (WhatsApp, call, email).`,
        links: [
          { label: "Vishwa Solar Energy Live Site ↗", url: "https://vishwa-solar-energy-solutions.vercel.app/", type: "external" },
        ],
        quickReplies: ["Show me other projects", "Can I hire him for a project?"],
      };
    }

    // Q24, Q25: VLBVN
    if (q.includes("vlbvn")) {
      return {
        sender: "bot",
        text: `VLBVN is a recent website and digital-experience project focused on creating a modern, responsive, and professional web presence with structured information, interactive UI/UX, and automation-oriented workflows.`,
        links: [
          { label: "VLBVN Live Site ↗", url: "https://vlbvn.vercel.app/", type: "external" },
        ],
        quickReplies: ["Show me other projects", "Can I hire him for a project?"],
      };
    }

    // Q26, Rule 2: All Projects & Live URLs
    if (
      q.includes("project") ||
      q.includes("show me his projects") ||
      q.includes("portfolio") ||
      q.includes("work") ||
      q.includes("apps") ||
      q.includes("live link") ||
      q.includes("demo")
    ) {
      return {
        sender: "bot",
        text: `Shashidhar has worked across full-stack applications, e-commerce platforms, business websites, professional services, solar portals, digital storefronts, AI solutions, and automation workflows.\n\nHere are his verified live deployed projects:`,
        links: [
          { label: "Manasa's Gift Studio ↗", url: "https://manasa-gift-studio.vercel.app/", type: "external" },
          { label: "V Technologies ↗", url: "https://v-technologies.vercel.app/", type: "external" },
          { label: "CA Shailesh & Co. ↗", url: "https://ca-shailesh-patil.vercel.app/", type: "external" },
          { label: "Vishwa Solar Energy ↗", url: "https://vishwa-solar-energy-solutions.vercel.app/", type: "external" },
          { label: "VLBVN Platform ↗", url: "https://vlbvn.vercel.app/", type: "external" },
          { label: "GitHub Repositories ↗", url: githubUrl, type: "github" },
        ],
        quickReplies: ["Tell me about UniversalUrja", "Tell me about UrbanEye", "📝 Fill Inquiry Form"],
      };
    }

    // Q33, Q34, Q35: Integrations (WhatsApp, Email, Phone)
    if (q.includes("whatsapp")) {
      return {
        sender: "bot",
        text: `Yes! Shashidhar implements WhatsApp-based communication and support functionality — including direct WhatsApp buttons, floating widgets, pre-filled inquiry templates, and customer contact workflows.`,
        links: [{ label: "WhatsApp Shashidhar 💬", url: whatsappUrl, type: "whatsapp" }],
        quickReplies: ["How can I contact him?", "Show me his projects"],
      };
    }

    if (q.includes("email") || q.includes("mail")) {
      return {
        sender: "bot",
        text: `Yes! Shashidhar implements email/contact workflows and backend email functionality (e.g., Nodemailer/JavaMail). You can email him directly at shashidharbiradar6@gmail.com.`,
        links: [{ label: "Email Shashidhar ✉️", url: `mailto:${emailAddress}`, type: "email" }],
        quickReplies: ["How can I contact him?", "📝 Fill Inquiry Form"],
      };
    }

    if (q.includes("call") || q.includes("phone") || q.includes("number") || q.includes("mobile")) {
      return {
        sender: "bot",
        text: `Yes! You can call Shashidhar directly to discuss full-time roles or client projects:\n\nPhone: +91 6363284060`,
        links: [{ label: "Call +91 6363284060 📞", url: phoneCallUrl, type: "call" }],
        quickReplies: ["How can I contact him?", "Is he available for a job?"],
      };
    }

    // Q36, Q37, Rule 6, Rule 10: How to Contact / GitHub / LinkedIn
    if (
      q.includes("contact") ||
      q.includes("reach") ||
      q.includes("connect") ||
      q.includes("github") ||
      q.includes("linkedin") ||
      q.includes("how can i contact him")
    ) {
      return {
        sender: "bot",
        text: `You can contact Shashidhar directly through WhatsApp, Call, Email, LinkedIn, or GitHub:\n\n• Phone: +91 6363284060\n• Email: shashidharbiradar6@gmail.com\n• Location: Pune, Maharashtra, India\n• GitHub: github.com/shashidharbiradar\n• LinkedIn: linkedin.com/in/shashidharbiradar`,
        links: standardContactLinks,
        quickReplies: ["📝 Fill Inquiry Form", "Show me his projects", "What does Shashidhar do?"],
      };
    }

    // Q44, Q45: Education / CGPA
    if (
      q.includes("cgpa") ||
      q.includes("education") ||
      q.includes("marks") ||
      q.includes("college") ||
      q.includes("bca") ||
      q.includes("degree") ||
      q.includes("qualification")
    ) {
      return {
        sender: "bot",
        text: `🎓 Education Background:\n\n• Degree: Bachelor of Computer Applications (BCA)\n• Institution: Sarhad College of Arts, Commerce and Science, Pune\n• Cumulative CGPA: 9.17!\n• Intermediate in Commerce: VVS Independent PU College (74%)`,
        quickReplies: ["What are his strongest skills?", "Show me his projects", "Is he available for a job?"],
      };
    }

    // Q46: Languages Spoken
    if (q.includes("speak") || q.includes("languages spoken") || q.includes("languages")) {
      return {
        sender: "bot",
        text: `Shashidhar can communicate in 6 languages:\n• English\n• Hindi\n• Kannada\n• Marathi\n• Telugu\n• Tamil`,
        quickReplies: ["Where is he located?", "How can I contact him?"],
      };
    }

    // Q47: Internship Experience
    if (q.includes("internship") || q.includes("i-well") || q.includes("graphic")) {
      return {
        sender: "bot",
        text: `Shashidhar worked as a Marketing & Graphic Design Intern at I-Well Health Solutions from May 2025 to August 2025.\n\nHis responsibilities included digital marketing initiatives, graphic design activities, and team support/training.`,
        quickReplies: ["What does Shashidhar do?", "Show me his projects"],
      };
    }

    // Q42, Q50: Why Hire Shashidhar / What makes him different
    if (q.includes("why hire") || q.includes("why work") || q.includes("different") || q.includes("why should i hire")) {
      return {
        sender: "bot",
        text: `Shashidhar brings a combination of full-stack development, Java/Spring Boot expertise, React, AI, automation, API integrations, payment systems, communication integrations, UI/UX implementation, deployment experience, and client-facing project ownership.\n\nHis focus is not simply on writing code, but on turning requirements and ideas into practical, deployed digital solutions.`,
        links: standardContactLinks,
        quickReplies: ["📝 Fill Inquiry Form", "Show me his projects", "How can I contact him?"],
      };
    }

    // Rule 1: Honest Fallback when information is unverified or unknown
    return {
      sender: "bot",
      text: `I don't have verified information about that yet. You can contact Shashidhar directly and he'll be happy to discuss it!`,
      links: [
        { label: "WhatsApp Shashidhar 💬", url: whatsappUrl, type: "whatsapp" },
        { label: "Call +91 6363284060 📞", url: phoneCallUrl, type: "call" },
        { label: "Email Shashidhar ✉️", url: `mailto:${emailAddress}`, type: "email" },
        { label: "View LinkedIn 💼", url: linkedinUrl, type: "linkedin" },
      ],
      quickReplies: ["📝 Fill Inquiry Form", "What does Shashidhar do?", "Show me his projects", "How can I contact him?"],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || inputMessage;
    if (!messageText.trim()) return;

    if (messageText.includes("Fill Inquiry Form")) {
      setViewMode("form");
      return;
    }

    const userMsg: Message = { sender: "user", text: messageText };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");

    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotReply(messageText);
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 400);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  // Inquiry Form Submission Handler
  const handleInquiryFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setFormErrorMsg("");

    try {
      let apiUrl = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
      if (!apiUrl) {
        if (typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
          apiUrl = "";
        } else {
          apiUrl = "http://localhost:5000";
        }
      }

      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Server error occurred while submitting inquiry.");
      }

      setFormStatus("success");
      
      // Push confirmation into Chat stream & switch back to Chat
      const confirmBotMsg: Message = {
        sender: "bot",
        text: `✅ Thank you ${formData.name}! Your inquiry for "${formData.projectType}" has been submitted successfully.\n\nShashidhar will respond to ${formData.email} promptly.`,
        quickReplies: ["Show me his projects", "What are his strongest skills?", "View Resume"],
      };

      setMessages((prev) => [...prev, confirmBotMsg]);
      setTimeout(() => setViewMode("chat"), 1500);
    } catch (err: any) {
      console.error("Chatbot Inquiry Form Error:", err);
      setFormStatus("error");
      if (err.message && err.message.includes("Failed to fetch")) {
        setFormErrorMsg("Email server unreachable right now. Click WhatsApp or Email below to deliver your inquiry instantly!");
      } else {
        setFormErrorMsg(err.message || "Network error. Please use WhatsApp or Email buttons below.");
      }
    }
  };

  const whatsappInquiryText = encodeURIComponent(
    `Hi Shashidhar!\nName: ${formData.name || "N/A"}\nEmail: ${formData.email || "N/A"}\nPhone: ${formData.phone || "N/A"}\nType: ${formData.projectType}\nMessage: ${formData.message || "I visited your portfolio and would like to discuss an opportunity."}`
  );
  const whatsappInquiryUrl = `https://wa.me/${whatsappNumber}?text=${whatsappInquiryText}`;

  const mailtoInquiryUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(`Chatbot Inquiry: ${formData.projectType}`)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
  )}`;

  const renderIconForLink = (linkType?: string) => {
    switch (linkType) {
      case "whatsapp":
        return <MessageSquare className="h-3.5 w-3.5 text-emerald-600 shrink-0" />;
      case "call":
        return <Phone className="h-3.5 w-3.5 text-emerald-600 shrink-0" />;
      case "email":
        return <Mail className="h-3.5 w-3.5 text-blue-600 shrink-0" />;
      case "linkedin":
        return <Linkedin className="h-3.5 w-3.5 text-sky-600 shrink-0" />;
      case "github":
        return <Github className="h-3.5 w-3.5 text-slate-700 shrink-0" />;
      case "resume":
        return <FileText className="h-3.5 w-3.5 text-rose-600 shrink-0" />;
      default:
        return <ExternalLink className="h-3.5 w-3.5 text-blue-600 shrink-0" />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Light Theme AI Chatbot Window */}
      {isOpen && (
        <div className="glass-panel w-[92vw] sm:w-[390px] max-w-[390px] h-[540px] max-h-[85vh] rounded-3xl p-4 shadow-2xl flex flex-col justify-between border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-300 backdrop-blur-2xl bg-white/95">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md">
                <Bot className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div>
                <h4 className="font-heading text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  Shashidhar's Assistant
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                </h4>
                <p className="text-[10px] text-blue-600 font-mono font-medium">Full Stack Java & AI Developer</p>
              </div>
            </div>

            {/* Mode Switcher & Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setViewMode(viewMode === "chat" ? "form" : "chat")}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all border ${
                  viewMode === "form"
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-100 text-blue-600 border-slate-200 hover:bg-slate-200"
                }`}
                title="Toggle Inquiry Form"
              >
                {viewMode === "form" ? "💬 Chat" : "📝 Form"}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                title="Direct WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close chatbot"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* VIEW MODE 1: CHAT CONVERSATION */}
          {viewMode === "chat" && (
            <>
              {/* Messages Scroll Area */}
              <div className="flex-1 overflow-y-auto my-3 space-y-3 pr-1 text-xs custom-scrollbar">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} gap-1`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl p-3 whitespace-pre-line leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-sm"
                          : "bg-slate-50 border border-slate-200/80 text-slate-800"
                      }`}
                    >
                      {msg.text}

                      {/* Attachment Links / Direct Action Buttons */}
                      {msg.links && (
                        <div className="mt-2.5 pt-2 border-t border-slate-200 flex flex-col gap-1.5">
                          {msg.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target={link.url.startsWith("http") ? "_blank" : "_self"}
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-sans font-semibold text-slate-800 hover:bg-slate-100 hover:border-slate-300 transition-colors shadow-2xs"
                            >
                              {renderIconForLink(link.type)}
                              <span>{link.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Quick Reply Chips */}
                    {msg.quickReplies && (
                      <div className="flex flex-wrap gap-1.5 mt-1 max-w-[95%]">
                        {msg.quickReplies.map((chip, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(chip)}
                            className={`rounded-full px-2.5 py-1 text-[10px] font-mono font-semibold transition-colors shadow-2xs ${
                              chip.includes("Inquiry")
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-white border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white"
                            }`}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px] bg-slate-100 p-2.5 rounded-2xl w-24 border border-slate-200">
                    <Bot className="h-3.5 w-3.5 text-blue-600 animate-bounce" />
                    <span>Thinking...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask about skills, projects, CGPA, hiring..."
                    className="flex-1 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shrink-0 shadow-sm"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-1">
                  <button
                    onClick={() => setViewMode("form")}
                    className="text-blue-600 hover:underline flex items-center gap-1 font-bold"
                  >
                    <FileText className="h-3 w-3 text-blue-600" />
                    Fill Quick Inquiry Form
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <MessageSquare className="h-3 w-3 text-emerald-600" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </>
          )}

          {/* VIEW MODE 2: INQUIRY FORM */}
          {viewMode === "form" && (
            <div className="flex-1 flex flex-col justify-between overflow-y-auto py-2 pr-1 custom-scrollbar">
              <form onSubmit={handleInquiryFormSubmit} className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h5 className="font-heading text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <FileText className="h-4 w-4 text-blue-600" />
                    Submit Quick Inquiry
                  </h5>
                  <button
                    type="button"
                    onClick={() => setViewMode("chat")}
                    className="text-[10px] font-mono text-blue-600 hover:underline"
                  >
                    ← Back to Chat
                  </button>
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-slate-700 font-semibold mb-1">
                    Your Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-mono text-[10px] text-slate-700 font-semibold mb-1">
                      Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-slate-700 font-semibold mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91..."
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-slate-700 font-semibold mb-1">
                    Inquiry Type <span className="text-blue-600">*</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none"
                  >
                    {projectTypes.map((pt) => (
                      <option key={pt} value={pt} className="bg-white text-slate-900">
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-slate-700 font-semibold mb-1">
                    Requirements / Details <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your project or opportunity..."
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                {/* Status Banners */}
                {formStatus === "success" && (
                  <div className="flex items-center gap-1.5 rounded-xl bg-emerald-50 p-2.5 border border-emerald-200 text-emerald-800 text-[11px] font-mono">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Inquiry submitted! Redirecting to chat...</span>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="flex flex-col gap-1.5 rounded-xl bg-rose-50 p-2.5 border border-rose-200 text-rose-800 text-[11px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
                      <span>{formErrorMsg}</span>
                    </div>
                  </div>
                )}

                {/* Submit via API / Standard Button */}
                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="btn-primary w-full justify-center py-2.5 text-xs"
                >
                  {formStatus === "loading" ? (
                    <span className="flex items-center gap-2">
                      <span className="h-3.5 w-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-3.5 w-3.5" />
                      Submit Inquiry
                    </span>
                  )}
                </button>
              </form>

              {/* Direct Submit Buttons (WhatsApp & Email) */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <span className="block font-mono text-[9px] text-slate-400 font-semibold uppercase text-center">
                  Direct 1-Click Submission Options:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 border border-emerald-200 py-2 text-[11px] font-sans font-bold text-emerald-700 hover:bg-emerald-100 transition-colors shadow-2xs"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                    WhatsApp
                  </a>

                  <a
                    href={mailtoInquiryUrl}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-50 border border-blue-200 py-2 text-[11px] font-sans font-bold text-blue-700 hover:bg-blue-100 transition-colors shadow-2xs"
                  >
                    <Mail className="h-3.5 w-3.5 text-blue-600" />
                    Direct Email
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="group relative flex items-center">
        {!isOpen && (
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 font-mono text-xs font-semibold text-blue-600 opacity-0 shadow-md border border-slate-200 transition-opacity duration-200 group-hover:opacity-100 flex items-center gap-1.5">
            <Bot className="h-3.5 w-3.5 text-blue-600" />
            AI Portfolio Assistant
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-110 active:scale-95"
          aria-label="Toggle AI assistant chatbot"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7 animate-pulse" />}
        </button>
      </div>
    </div>
  );
}

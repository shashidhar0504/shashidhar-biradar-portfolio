import { useState, useRef, useEffect, FormEvent } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, ExternalLink } from "lucide-react";
import { profile } from "../../data/portfolio";

type Message = {
  sender: "bot" | "user";
  text: string;
  quickReplies?: string[];
  links?: { label: string; url: string }[];
};

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const initialBotMsg: Message = {
    sender: "bot",
    text: `Hello! 👋 I'm Shashidhar's AI Portfolio Assistant.\nHow can I help you today? Ask me about his Java & AI tech stack, live client projects, 9.17 BCA CGPA, or hiring availability!`,
    quickReplies: [
      "Core Tech Stack",
      "Live Client Projects",
      "BCA CGPA & Education",
      "Hire / Contact Info",
    ],
  };

  const [messages, setMessages] = useState<Message[]>([initialBotMsg]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const defaultWhatsappMsg = encodeURIComponent(
    "Hello Shashidhar, I visited your portfolio and would like to discuss an opportunity/project."
  );
  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${defaultWhatsappMsg}`;

  // Comprehensive Knowledge Engine & Answer Generator
  const generateBotReply = (userQuery: string): Message => {
    const q = userQuery.toLowerCase().trim();

    // 1. Tech Stack / Skills / Languages / Frameworks
    if (
      q.includes("skill") ||
      q.includes("tech") ||
      q.includes("stack") ||
      q.includes("java") ||
      q.includes("spring") ||
      q.includes("react") ||
      q.includes("backend") ||
      q.includes("frontend") ||
      q.includes("ai") ||
      q.includes("automation")
    ) {
      return {
        sender: "bot",
        text: `Shashidhar is a Full Stack Java Developer & AI Engineer with complete SDLC ownership!\n\n💻 Backend: Java 17+, Spring Boot, Spring Security (JWT), Hibernate/JPA, REST APIs, MySQL.\n⚛️ Frontend: React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap.\n🤖 AI & Automation: LLM API Integration, Prompt Engineering, WhatsApp API, Nodemailer, Deployment.\n\nHe builds end-to-end applications from database architecture through cloud deployment.`,
        quickReplies: ["Live Client Projects", "BCA CGPA & Education", "Hire / Contact Info"],
      };
    }

    // 2. Specific Projects & Portfolio Work
    if (
      q.includes("project") ||
      q.includes("work") ||
      q.includes("portfolio") ||
      q.includes("client") ||
      q.includes("storefront") ||
      q.includes("app") ||
      q.includes("live") ||
      q.includes("demo")
    ) {
      return {
        sender: "bot",
        text: `Shashidhar has delivered 8+ major projects including live production platforms:\n\n1. UniversalUrja — Flagship Production Platform (Spring Boot + React + Razorpay + JWT)\n2. Manasa's Gift Studio — Digital Storefront\n3. V Technologies — B2B Lead Platform\n4. CA Shailesh & Co. — Professional Services\n5. Vishwa Solar Energy — Renewable Energy Portal\n6. VLBVN — Organization Platform\n7. UrbanEye — Academic Complaint System`,
        links: [
          { label: "Manasa's Gift Studio ↗", url: "https://manasa-gift-studio.vercel.app/" },
          { label: "V Technologies ↗", url: "https://v-technologies.vercel.app/" },
          { label: "CA Shailesh & Co. ↗", url: "https://ca-shailesh-patil.vercel.app/" },
          { label: "Vishwa Solar Energy ↗", url: "https://vishwa-solar-energy-solutions.vercel.app/" },
          { label: "VLBVN Platform ↗", url: "https://vlbvn.vercel.app/" },
          { label: "GitHub Code Repository ↗", url: profile.github },
        ],
        quickReplies: ["Hire / Contact Info", "BCA CGPA & Education"],
      };
    }

    // 3. Education / CGPA / College
    if (
      q.includes("cgpa") ||
      q.includes("education") ||
      q.includes("college") ||
      q.includes("bca") ||
      q.includes("academic") ||
      q.includes("marks") ||
      q.includes("score") ||
      q.includes("degree")
    ) {
      return {
        sender: "bot",
        text: `🎓 Education Background:\n\n• Degree: Bachelor of Computer Applications (BCA)\n• Institution: Sarhad College of Arts, Commerce and Science, Pune\n• Graduation Year: 2026\n• Academic Result: 9.17 Cumulative CGPA!\n\n• Intermediate in Commerce: VVS Independent PU College (74%)`,
        quickReplies: ["Core Tech Stack", "Live Client Projects"],
      };
    }

    // 4. Contact / Hiring / Availability / Phone / Email / Resume
    if (
      q.includes("contact") ||
      q.includes("hire") ||
      q.includes("email") ||
      q.includes("phone") ||
      q.includes("call") ||
      q.includes("whatsapp") ||
      q.includes("resume") ||
      q.includes("cv") ||
      q.includes("freelance") ||
      q.includes("job") ||
      q.includes("hiring")
    ) {
      return {
        sender: "bot",
        text: `💼 Availability & Contact Details:\n\nShashidhar is currently AVAILABLE for Full-Time Roles and Freelance Client Projects!\n\n• Phone: ${profile.phone}\n• Email: ${profile.email}\n• Location: Pune, Maharashtra, India\n• GitHub: ${profile.github}\n• LinkedIn: ${profile.linkedin}`,
        links: [
          { label: "View Resume PDF 📄", url: profile.resumeFile },
          { label: "Chat on WhatsApp 💬", url: whatsappUrl },
        ],
        quickReplies: ["Live Client Projects", "Core Tech Stack"],
      };
    }

    // 5. What Can He Build / Services
    if (
      q.includes("build") ||
      q.includes("service") ||
      q.includes("offer") ||
      q.includes("ecommerce") ||
      q.includes("website") ||
      q.includes("cost") ||
      q.includes("price") ||
      q.includes("solution")
    ) {
      return {
        sender: "bot",
        text: `🛠️ What Shashidhar Can Build For You:\n\n1. Full Stack Java Web Applications (Spring Boot + React + MySQL)\n2. AI-Powered Applications & Intelligent Workflows\n3. High-Conversion Business Storefronts & Websites\n4. E-Commerce Platforms with Razorpay Payments\n5. RESTful API Architecture & JWT Security\n6. WhatsApp & Email Communication Automation`,
        quickReplies: ["Hire / Contact Info", "Live Client Projects"],
      };
    }

    // 6. Experience & Background
    if (q.includes("experience") || q.includes("intern") || q.includes("freelance") || q.includes("history")) {
      return {
        sender: "bot",
        text: `📌 Professional Experience:\n\n• Freelance Full Stack Developer & Technical Solution Builder (May 2026 – Present)\n  - Owning full SDLC for clients, building Spring Boot backends, React frontends, payment gateways, and AI automation workflows.\n\n• Marketing & Graphic Design Intern — I-Well Health Solutions (May 2025 – Aug 2025)\n  - Trained 5+ team members on digital tools and improved brand onboarding workflows.`,
        quickReplies: ["Live Client Projects", "Hire / Contact Info"],
      };
    }

    // Default Fallback Response
    return {
      sender: "bot",
      text: `I'm here to help! Shashidhar is a Full Stack Java Developer and AI Engineer with a 9.17 BCA CGPA based in Pune.\n\nYou can ask about his tech stack, live project links, resume PDF, or hiring availability!`,
      quickReplies: ["Core Tech Stack", "Live Client Projects", "BCA CGPA & Education", "Hire / Contact Info"],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || inputMessage;
    if (!messageText.trim()) return;

    const userMsg: Message = { sender: "user", text: messageText };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");

    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotReply(messageText);
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 500);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Light Theme AI Chatbot Window */}
      {isOpen && (
        <div className="glass-panel w-[92vw] sm:w-[360px] max-w-[360px] h-[480px] sm:h-[500px] max-h-[82vh] rounded-3xl p-4 shadow-2xl flex flex-col justify-between border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-300 backdrop-blur-2xl bg-white/95">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-glow">
                <Bot className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div>
                <h4 className="font-heading text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  AI Portfolio Assistant
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                </h4>
                <p className="text-[10px] text-blue-600 font-mono font-medium">Shashidhar Biradar • Online</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
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

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto my-3 space-y-3 pr-1 text-xs custom-scrollbar">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} gap-1`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 whitespace-pre-line leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-sm"
                      : "bg-slate-50 border border-slate-200/80 text-slate-800"
                  }`}
                >
                  {msg.text}

                  {/* Attachment Links */}
                  {msg.links && (
                    <div className="mt-2.5 pt-2 border-t border-slate-200 flex flex-col gap-1.5">
                      {msg.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <ExternalLink className="h-3 w-3 text-blue-600" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick Reply Chips */}
                {msg.quickReplies && (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {msg.quickReplies.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(chip)}
                        className="rounded-full bg-white border border-blue-200 px-2.5 py-1 text-[10px] font-mono font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
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
                placeholder="Ask about skills, projects, CGPA..."
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
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <MessageSquare className="h-3 w-3 text-emerald-600" />
                WhatsApp Direct
              </a>
              <span>Powered by AI</span>
            </div>
          </div>
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

import { useState, useRef, useEffect, FormEvent } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, ExternalLink, Mail, CheckCircle2, AlertCircle, FileText } from "lucide-react";
import { profile } from "../../data/portfolio";

type Message = {
  sender: "bot" | "user";
  text: string;
  quickReplies?: string[];
  links?: { label: string; url: string }[];
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
    "AI Project",
    "Automation Solution",
    "Website / Digital Storefront",
    "Other Inquiry",
  ];

  const initialBotMsg: Message = {
    sender: "bot",
    text: `Hello! 👋 I'm Shashidhar's AI Portfolio Assistant.\nHow can I help you today? Ask me about his Java & AI tech stack, live client projects, 9.17 BCA CGPA, or fill an inquiry form directly!`,
    quickReplies: [
      "📝 Fill Inquiry Form",
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
    if (isOpen && viewMode === "chat") scrollToBottom();
  }, [messages, isOpen, isTyping, viewMode]);

  const defaultWhatsappMsg = encodeURIComponent(
    "Hello Shashidhar, I visited your portfolio and would like to discuss an opportunity/project."
  );
  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${defaultWhatsappMsg}`;

  // Comprehensive Knowledge Engine & Answer Generator
  const generateBotReply = (userQuery: string): Message => {
    const q = userQuery.toLowerCase().trim();

    if (q.includes("form") || q.includes("inquiry") || q.includes("enquiry") || q.includes("submit")) {
      setViewMode("form");
      return {
        sender: "bot",
        text: `Opening Inquiry Form for you! You can submit details directly via API, WhatsApp, or Email below.`,
      };
    }

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
        quickReplies: ["📝 Fill Inquiry Form", "Live Client Projects", "BCA CGPA & Education"],
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
        quickReplies: ["📝 Fill Inquiry Form", "Hire / Contact Info"],
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
        quickReplies: ["Core Tech Stack", "Live Client Projects", "📝 Fill Inquiry Form"],
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
        quickReplies: ["📝 Fill Inquiry Form", "Live Client Projects"],
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
        quickReplies: ["📝 Fill Inquiry Form", "Live Client Projects"],
      };
    }

    // Default Fallback Response
    return {
      sender: "bot",
      text: `I'm here to help! Shashidhar is a Full Stack Java Developer and AI Engineer with a 9.17 BCA CGPA based in Pune.\n\nYou can ask about skills, project links, or click 'Fill Inquiry Form' to send an inquiry directly!`,
      quickReplies: ["📝 Fill Inquiry Form", "Core Tech Stack", "Live Client Projects", "Hire / Contact Info"],
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
    }, 500);
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
        quickReplies: ["Live Client Projects", "Core Tech Stack", "View Resume"],
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
  const whatsappInquiryUrl = `https://wa.me/${profile.whatsappNumber}?text=${whatsappInquiryText}`;

  const mailtoInquiryUrl = `mailto:${profile.email}?subject=${encodeURIComponent(`Chatbot Inquiry: ${formData.projectType}`)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Light Theme AI Chatbot Window */}
      {isOpen && (
        <div className="glass-panel w-[92vw] sm:w-[380px] max-w-[380px] h-[520px] max-h-[85vh] rounded-3xl p-4 shadow-2xl flex flex-col justify-between border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-300 backdrop-blur-2xl bg-white/95">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md">
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
                            className={`rounded-full px-2.5 py-1 text-[10px] font-mono font-semibold transition-colors shadow-sm ${
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
                  <button
                    onClick={() => setViewMode("form")}
                    className="text-blue-600 hover:underline flex items-center gap-1 font-bold"
                  >
                    <FileText className="h-3 w-3 text-blue-600" />
                    Submit Inquiry Form
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
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 border border-emerald-200 py-2 text-[11px] font-sans font-bold text-emerald-700 hover:bg-emerald-100 transition-colors shadow-sm"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                    WhatsApp
                  </a>

                  <a
                    href={mailtoInquiryUrl}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-50 border border-blue-200 py-2 text-[11px] font-sans font-bold text-blue-700 hover:bg-blue-100 transition-colors shadow-sm"
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

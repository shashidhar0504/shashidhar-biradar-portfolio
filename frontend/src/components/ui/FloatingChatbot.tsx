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
    text: `Hi! I'm Shashidhar's AI Portfolio Assistant. 🤖\nHow can I help you today? Ask me about his tech stack, live projects, BCA CGPA, or availability!`,
    quickReplies: [
      "Core Tech Stack",
      "Featured Projects",
      "BCA CGPA & Education",
      "Hire / Contact Details",
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

  const generateBotReply = (query: string): Message => {
    const q = query.toLowerCase();

    if (q.includes("tech") || q.includes("stack") || q.includes("skill") || q.includes("java")) {
      return {
        sender: "bot",
        text: `Shashidhar is a Full Stack Java Developer & AI Engineer!\n\n• Backend: Java 17+, Spring Boot, Spring Security, Hibernate/JPA, REST APIs, JWT Auth, Servlets.\n• Frontend: React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Bootstrap.\n• Database: MySQL (Normalized DB Design, JDBC).\n• AI & Automation: AI API Integration, Prompt Engineering, WhatsApp API, Nodemailer, Deployment.`,
        quickReplies: ["Featured Projects", "BCA CGPA & Education", "Hire / Contact Details"],
      };
    }

    if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
      return {
        sender: "bot",
        text: `Shashidhar has delivered 8+ major projects! Highlights:\n\n1. UniversalUrja — Production E-commerce & Booking Platform (Spring Boot + React + Razorpay)\n2. Manasa's Gift Studio — Digital Storefront\n3. V Technologies — B2B Lead Platform\n4. CA Shailesh & Co. — Professional Services\n5. Vishwa Solar Energy — Renewable Energy Portal\n6. VLBVN — Organization Platform\n7. UrbanEye — Academic Complaint System`,
        links: [
          { label: "Manasa's Gift Studio ↗", url: "https://manasa-gift-studio.vercel.app/" },
          { label: "V Technologies ↗", url: "https://v-technologies.vercel.app/" },
          { label: "CA Shailesh ↗", url: "https://ca-shailesh-patil.vercel.app/" },
          { label: "Vishwa Solar ↗", url: "https://vishwa-solar-energy-solutions.vercel.app/" },
        ],
        quickReplies: ["Hire / Contact Details", "Core Tech Stack"],
      };
    }

    if (q.includes("cgpa") || q.includes("education") || q.includes("college") || q.includes("bca")) {
      return {
        sender: "bot",
        text: `Graduating in 2026 with a Bachelor of Computer Applications (BCA) from Sarhad College of Arts, Commerce and Science, Pune.\n\n🏆 Outstanding Academic Record: 9.17 Cumulative CGPA!`,
        quickReplies: ["Core Tech Stack", "Featured Projects"],
      };
    }

    if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("phone") || q.includes("whatsapp")) {
      return {
        sender: "bot",
        text: `Shashidhar is currently AVAILABLE for Full-Time Opportunities and Client Projects! 🚀\n\n• Phone: ${profile.phone}\n• Email: ${profile.email}\n• Location: Pune, Maharashtra, India\n\nYou can also click below to open a direct WhatsApp conversation or view his resume PDF!`,
        links: [
          { label: "Chat on WhatsApp 💬", url: whatsappUrl },
          { label: "View Resume PDF 📄", url: profile.resumeFile },
        ],
        quickReplies: ["Featured Projects", "Core Tech Stack"],
      };
    }

    return {
      sender: "bot",
      text: `Thanks for your inquiry! Shashidhar specializes in Full Stack Java development (Spring Boot + React), AI integrations, and automated client solutions. Feel free to ask about his projects, skills, or contact info!`,
      quickReplies: ["Core Tech Stack", "Featured Projects", "Hire / Contact Details"],
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
    }, 600);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Interactive AI Chatbot Window */}
      {isOpen && (
        <div className="glass-panel w-[90vw] max-w-[360px] h-[480px] rounded-3xl p-4 shadow-2xl flex flex-col justify-between border border-cyan-500/40 animate-in fade-in slide-in-from-bottom-4 duration-300 backdrop-blur-2xl bg-slate-950/95">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-glow-cyan">
                <Bot className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
              </div>
              <div>
                <h4 className="font-heading text-xs font-bold text-white flex items-center gap-1.5">
                  AI Portfolio Assistant
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                </h4>
                <p className="text-[10px] text-cyan-400 font-mono">Shashidhar Biradar • Online</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-emerald-400 hover:bg-emerald-950/40 transition-colors"
                title="Switch to WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
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
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md"
                      : "bg-slate-900 border border-slate-800 text-slate-200"
                  }`}
                >
                  {msg.text}

                  {/* Attachment Links */}
                  {msg.links && (
                    <div className="mt-2.5 pt-2 border-t border-slate-800 flex flex-col gap-1.5">
                      {msg.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 hover:text-white hover:underline"
                        >
                          <ExternalLink className="h-3 w-3 text-cyan-400" />
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
                        className="rounded-full bg-slate-900 border border-cyan-500/30 px-2.5 py-1 text-[10px] font-mono font-semibold text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-colors"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] bg-slate-900/60 p-2.5 rounded-2xl w-24 border border-slate-800">
                <Bot className="h-3.5 w-3.5 text-cyan-400 animate-bounce" />
                <span>Thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions & Input Form */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <form onSubmit={handleFormSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask AI assistant anything..."
                className="flex-1 rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors shrink-0"
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
                className="text-emerald-400 hover:underline flex items-center gap-1"
              >
                <MessageSquare className="h-3 w-3" />
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
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 font-mono text-xs font-semibold text-cyan-400 opacity-0 shadow-lg border border-slate-800 transition-opacity duration-200 group-hover:opacity-100 flex items-center gap-1.5">
            <Bot className="h-3.5 w-3.5 text-cyan-400" />
            AI Portfolio Assistant
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-glow-cyan transition-transform duration-300 hover:scale-110 active:scale-95"
          aria-label="Toggle AI assistant chatbot"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7 animate-pulse" />}
        </button>
      </div>
    </div>
  );
}

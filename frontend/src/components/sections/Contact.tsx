import { useState, FormEvent } from "react";
import { MessageSquare, Phone, Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { profile } from "../../data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Job Opportunity",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "Job Opportunity",
    "Freelance Project",
    "Full Stack Development",
    "AI Project",
    "Automation Solution",
    "Website / Digital Storefront",
    "Technical Collaboration",
    "Other Inquiry",
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "Job Opportunity",
        message: "",
      });
    } catch (err: any) {
      console.error("Contact Form Error:", err);
      setStatus("error");
      setErrorMessage(err.message || "Network error. Please try direct WhatsApp or Email below.");
    }
  };

  const defaultWhatsappMsg = encodeURIComponent(
    "Hello Shashidhar, I visited your portfolio and would like to discuss an opportunity/project."
  );

  return (
    <section id="contact" className="relative section-padding bg-[#0B0F17]">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <MessageSquare className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a project, opportunity, or idea? <span className="gradient-text">Let's build it.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Whether you're hiring a developer, launching a product, or looking for someone to turn an idea into a working solution — let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-700/80 shadow-2xl">
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                Direct Communication
              </h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${profile.whatsappNumber}?text=${defaultWhatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-emerald-950/40 p-4 border border-emerald-500/30 hover:border-emerald-400/60 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-emerald-400 font-semibold uppercase">INSTANT MESSAGING</span>
                    <span className="font-heading text-sm font-bold text-white">Chat on WhatsApp</span>
                    <span className="block text-xs text-slate-300">+91 6363284060</span>
                  </div>
                </a>

                {/* Call */}
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-4 rounded-2xl bg-slate-900/80 p-4 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-cyan-400 font-semibold uppercase">DIRECT VOICE CALL</span>
                    <span className="font-heading text-sm font-bold text-white">Call Me Directly</span>
                    <span className="block text-xs text-slate-300">{profile.phone}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-slate-900/80 p-4 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-cyan-400 font-semibold uppercase">PRIMARY EMAIL</span>
                    <span className="font-heading text-sm font-bold text-white">Send an Email</span>
                    <span className="block text-xs text-slate-300">{profile.email}</span>
                  </div>
                </a>
              </div>

              {/* Social Profiles Row */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400 font-semibold uppercase">Professional Links:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2 border border-slate-800 text-xs font-mono font-semibold text-slate-200 hover:text-white hover:border-cyan-500/50 transition-colors"
                  >
                    <Github className="h-4 w-4 text-cyan-400" />
                    GitHub
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2 border border-slate-800 text-xs font-mono font-semibold text-slate-200 hover:text-white hover:border-cyan-500/50 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-cyan-400" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-700/80 shadow-2xl"
            >
              <h3 className="font-heading text-xl font-bold text-white mb-2">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-400 font-semibold mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 font-semibold mb-1.5">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-400 font-semibold mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 font-semibold mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                    className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 font-semibold mb-1.5">
                  Project / Opportunity Type <span className="text-cyan-400">*</span>
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                >
                  {projectTypes.map((pt) => (
                    <option key={pt} value={pt} className="bg-slate-900 text-white">
                      {pt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 font-semibold mb-1.5">
                  Message Details <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your requirements, project scope, or opportunity..."
                  className="w-full rounded-xl bg-slate-900 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-950/80 p-4 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. Shashidhar will respond promptly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl bg-rose-950/80 p-4 border border-rose-500/40 text-rose-300 text-xs font-mono">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full justify-center py-3.5"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Submit Inquiry
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

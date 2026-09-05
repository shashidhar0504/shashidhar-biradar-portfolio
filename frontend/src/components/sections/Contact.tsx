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
    <section id="contact" className="relative section-padding bg-slate-50/60">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <MessageSquare className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Have a project, opportunity, or idea? <span className="gradient-text">Let's build it.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Whether you're hiring a developer, launching a product, or looking for someone to turn an idea into a working solution — let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-xl bg-white/90">
              <h3 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                Direct Communication
              </h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${profile.whatsappNumber}?text=${defaultWhatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-emerald-50 p-4 border border-emerald-200 hover:border-emerald-400 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-emerald-700 font-semibold uppercase">INSTANT MESSAGING</span>
                    <span className="font-heading text-sm font-bold text-slate-900">Chat on WhatsApp</span>
                    <span className="block text-xs text-slate-600">+91 6363284060</span>
                  </div>
                </a>

                {/* Call */}
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-4 rounded-2xl bg-slate-100/70 p-4 border border-slate-200 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-blue-600 font-semibold uppercase">DIRECT VOICE CALL</span>
                    <span className="font-heading text-sm font-bold text-slate-900">Call Me Directly</span>
                    <span className="block text-xs text-slate-600">{profile.phone}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-slate-100/70 p-4 border border-slate-200 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-blue-600 font-semibold uppercase">PRIMARY EMAIL</span>
                    <span className="font-heading text-sm font-bold text-slate-900">Send an Email</span>
                    <span className="block text-xs text-slate-600">{profile.email}</span>
                  </div>
                </a>
              </div>

              {/* Social Profiles Row */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 font-semibold uppercase">Professional Links:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 border border-slate-200 text-xs font-mono font-semibold text-slate-700 hover:text-slate-900 hover:border-blue-500/50 transition-colors"
                  >
                    <Github className="h-4 w-4 text-blue-600" />
                    GitHub
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 border border-slate-200 text-xs font-mono font-semibold text-slate-700 hover:text-slate-900 hover:border-blue-500/50 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-blue-600" />
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
              className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-xl bg-white/90"
            >
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                    Your Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                    Email Address <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company Name"
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                  Project / Opportunity Type <span className="text-blue-600">*</span>
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:bg-white focus:outline-none"
                >
                  {projectTypes.map((pt) => (
                    <option key={pt} value={pt} className="bg-white text-slate-900">
                      {pt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                  Message Details <span className="text-blue-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your requirements, project scope, or opportunity..."
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none resize-none"
                />
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-50 p-4 border border-emerald-200 text-emerald-800 text-xs font-mono">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span>Thank you! Your message has been sent successfully. Shashidhar will respond promptly.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl bg-rose-50 p-4 border border-rose-200 text-rose-800 text-xs font-mono">
                  <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
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

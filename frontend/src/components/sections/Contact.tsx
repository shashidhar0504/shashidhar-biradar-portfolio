import { useState, FormEvent } from "react";
import { MessageSquare, Phone, Mail, Github, Linkedin, CheckCircle2, AlertCircle, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { profile } from "../../data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Full Stack Development",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const projectTypes = [
    "Full-Time Opportunity",
    "Freelance Project",
    "Full Stack Java Backend",
    "AI Integration & Automation",
    "Business Website / Digital Storefront",
    "Technical Solution Consultation",
    "Other Inquiry",
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

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
        throw new Error(errorData.message || "Server error occurred while sending message.");
      }

      setStatus("success");
      setSubmittedEmail(formData.email);
      setSubmittedName(formData.name);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "Full-Time Opportunity",
        message: "",
      });
    } catch (err: any) {
      console.error("Contact Form Error:", err);
      setStatus("error");
      if (err.message && err.message.includes("Failed to fetch")) {
        setErrorMessage("Backend mail service is offline. Please use the direct WhatsApp or Email buttons below to connect instantly!");
      } else {
        setErrorMessage(err.message || "Network error. Please use direct WhatsApp or Email options below.");
      }
    }
  };

  const defaultWhatsappMsg = encodeURIComponent(
    "Hello Shashidhar, I visited your portfolio and would like to discuss a project / opportunity."
  );

  return (
    <section id="contact" className="relative section-padding bg-slate-50/60">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-orange-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <MessageSquare className="h-4 w-4 text-orange-600" />
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a software idea, business automation requirement, or development project? Let's connect and build something impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-xl bg-white/95">
              <h3 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-orange-600" />
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
                    <span className="block font-mono text-[10px] text-emerald-700 font-bold uppercase">INSTANT WHATSAPP</span>
                    <span className="font-heading text-sm font-bold text-slate-900">Chat on WhatsApp</span>
                    <span className="block text-xs text-slate-600">+91 6363284060</span>
                  </div>
                </a>

                {/* Direct Phone Call */}
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-4 rounded-2xl bg-slate-100/70 p-4 border border-slate-200 hover:border-orange-500/50 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-orange-600 font-bold uppercase">DIRECT PHONE CALL</span>
                    <span className="font-heading text-sm font-bold text-slate-900">Call Me Directly</span>
                    <span className="block text-xs text-slate-600">{profile.phone}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 rounded-2xl bg-slate-100/70 p-4 border border-slate-200 hover:border-orange-500/50 transition-colors group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-orange-600 font-bold uppercase">PRIMARY EMAIL</span>
                    <span className="font-heading text-sm font-bold text-slate-900">Send an Email</span>
                    <span className="block text-xs text-slate-600">{profile.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl bg-slate-100/70 p-4 border border-slate-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-200 text-slate-700">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-500 font-bold uppercase">LOCATION</span>
                    <span className="font-heading text-sm font-bold text-slate-900">Pune, Maharashtra</span>
                    <span className="block text-xs text-slate-600">Available Remote & Onsite</span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 font-semibold uppercase">Professional Links:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 border border-slate-200 text-xs font-mono font-semibold text-slate-700 hover:text-orange-600 hover:border-orange-300 transition-colors"
                  >
                    <Github className="h-4 w-4 text-slate-800" />
                    GitHub
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 border border-slate-200 text-xs font-mono font-semibold text-slate-700 hover:text-orange-600 hover:border-orange-300 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-slate-800" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form or Success Card */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div className="glass-panel rounded-3xl p-8 sm:p-12 space-y-6 border border-emerald-200 shadow-xl bg-white/95 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center mb-2 shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Thank you, <span className="text-emerald-600">{submittedName}</span>!
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
                  Your message has been successfully received. A confirmation email has been sent to your inbox at <span className="font-semibold text-slate-900 px-1 py-0.5 bg-slate-100 rounded-md">{submittedEmail}</span>.
                </p>
                <div className="pt-4 w-full max-w-xs">
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setSubmittedEmail("");
                      setSubmittedName("");
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-xl bg-white/95 relative overflow-hidden"
              >
                {/* Optional subtle gradient in background */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-500/10 blur-2xl rounded-full pointer-events-none" />

                <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 relative z-10">Send a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  <div>
                    <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                      Your Name <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-600 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                      Email Address <span className="text-orange-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-600 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  <div>
                    <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-600 focus:bg-white focus:outline-none transition-all"
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
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-600 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="relative z-10">
                  <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                    Project / Opportunity Type <span className="text-orange-600">*</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-orange-600 focus:bg-white focus:outline-none transition-all"
                  >
                    {projectTypes.map((pt) => (
                      <option key={pt} value={pt} className="bg-white text-slate-900">
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative z-10">
                  <label className="block font-mono text-xs text-slate-700 font-semibold mb-1.5">
                    Message Details <span className="text-orange-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirements, software goals, or opportunity..."
                    className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-orange-600 focus:bg-white focus:outline-none resize-none transition-all"
                  />
                </div>

                {status === "error" && (
                  <div className="flex flex-col gap-3 rounded-xl bg-rose-50 p-4 border border-rose-200 text-rose-800 text-xs font-mono relative z-10 animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 shrink-0 text-rose-600" />
                      <span>{errorMessage}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
                          `Hi Shashidhar!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nMessage: ${formData.message}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 text-white font-sans text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Send via WhatsApp Instead ↗
                      </a>
                      <a
                        href={`mailto:${profile.email}?subject=${encodeURIComponent(`Inquiry: ${formData.projectType}`)}&body=${encodeURIComponent(
                          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nMessage: ${formData.message}`
                        )}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-orange-600 text-white font-sans text-xs font-bold hover:bg-orange-700 transition-colors shadow-sm"
                      >
                        <Mail className="h-4 w-4" />
                        Send via Direct Email ↗
                      </a>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center py-3.5 relative z-10 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  {status === "loading" ? (
                    <span className="flex items-center gap-2 relative z-10">
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 relative z-10">
                      <span>Let's Talk</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

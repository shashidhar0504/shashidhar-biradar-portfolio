import { useState, useEffect } from "react";
import { MessageSquare, Phone, Mail, Github, Linkedin, ArrowRight, FileText, Sparkles } from "lucide-react";
import { profile } from "../../data/portfolio";
import CommandCenter from "../ui/CommandCenter";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profile.roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 80);
    }

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const defaultWhatsappMsg = encodeURIComponent(
    "Hello Shashidhar, I visited your portfolio and would like to discuss an opportunity/project."
  );

  return (
    <section id="hero" className="relative min-h-screen pt-32 lg:pt-36 pb-20 flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] bg-gradient-radial from-blue-400/15 via-indigo-400/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 h-80 w-80 bg-sky-400/10 blur-3xl pointer-events-none rounded-full" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Status Badge */}
          <div className="inline-flex flex-wrap items-center gap-2.5 rounded-full bg-white border border-slate-200 shadow-sm px-4 py-2 text-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono font-semibold text-emerald-600">{profile.status}</span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Building Digital Products with{" "}
              <span className="gradient-text">Code, AI & Automation.</span>
            </h1>

            {/* Typewriter Line */}
            <div className="flex items-center gap-2 font-mono text-lg sm:text-xl font-semibold text-blue-600 h-9">
              <span className="text-slate-400">&gt;</span>
              <span>{displayedText}</span>
              <span className="w-2.5 h-6 bg-blue-600 animate-pulse" />
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              I'm <strong className="text-slate-900 font-semibold">{profile.name}</strong> — a Full Stack Java Developer and AI & Automation Engineer focused on building production-ready applications, intelligent solutions, and scalable digital experiences.
            </p>
          </div>

          {/* Brand Promise Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-4 max-w-xl shadow-sm flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              <strong className="text-slate-900">Full SDLC Ownership:</strong> Requirements → UI/UX → Development → Backend → Database → Integrations → Testing → Deployment → Support.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <a href="#projects" className="btn-primary w-full sm:w-auto justify-center">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>

            <a href="#contact" className="btn-secondary w-full sm:w-auto justify-center">
              Let's Work Together
            </a>

            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-heading text-sm font-semibold text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm w-full sm:w-auto"
            >
              <FileText className="h-4 w-4 text-blue-600" />
              View Resume PDF
            </a>
          </div>

          {/* Direct Communication Channels Row */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
            <span className="text-slate-500 font-semibold uppercase tracking-wider">Direct Channels:</span>

            <a
              href={`https://wa.me/${profile.whatsappNumber}?text=${defaultWhatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-emerald-700 hover:bg-emerald-100 transition-colors font-semibold"
            >
              <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
              WhatsApp
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-slate-700 hover:text-blue-600 hover:border-slate-300 transition-colors shadow-sm font-medium"
            >
              <Phone className="h-3.5 w-3.5 text-blue-600" />
              Call
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-slate-700 hover:text-blue-600 hover:border-slate-300 transition-colors shadow-sm font-medium"
            >
              <Mail className="h-3.5 w-3.5 text-blue-600" />
              Email
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-slate-700 hover:text-blue-600 hover:border-slate-300 transition-colors shadow-sm font-medium"
            >
              <Github className="h-3.5 w-3.5 text-blue-600" />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-slate-700 hover:text-blue-600 hover:border-slate-300 transition-colors shadow-sm font-medium"
            >
              <Linkedin className="h-3.5 w-3.5 text-blue-600" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex justify-center">
          <CommandCenter />
        </div>
      </div>
    </section>
  );
}

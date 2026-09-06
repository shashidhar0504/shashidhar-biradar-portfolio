import { useState, useEffect } from "react";
import { MessageSquare, Phone, Mail, Github, Linkedin, ArrowRight, FileText, Layers } from "lucide-react";
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
    <section id="hero" className="relative min-h-screen pt-28 lg:pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
      {/* Subtle Ambient Radial Orange Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] bg-gradient-radial from-orange-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-7 text-left">
          {/* Status Badges & Currently Building Pill */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 shadow-sm px-3.5 py-1.5 text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono font-semibold text-emerald-700">{profile.status}</span>
            </div>

            {/* Currently Building Indicator */}
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1.5 text-xs font-mono font-bold text-orange-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span>Currently Building:</span>
              <span className="text-slate-800 font-semibold">{profile.currentlyBuilding}</span>
            </div>
          </div>

          {/* Main Title & Positioning */}
          <div className="space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              SHASHIDHAR BIRADAR
            </h1>

            <div className="space-y-1">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-orange-600">
                Full Stack Java Developer | AI & Automation Engineer
              </h2>
              <p className="font-mono text-xs sm:text-sm font-semibold text-slate-600">
                Spring Boot & React Specialist | Backend Developer | Technical Solution Builder
              </p>
            </div>

            {/* Typewriter Line */}
            <div className="flex items-center gap-2 font-mono text-base sm:text-lg font-semibold text-orange-600 h-8 pt-1">
              <span className="text-slate-400">&gt;</span>
              <span>{displayedText}</span>
              <span className="w-2 h-5 bg-orange-600 animate-pulse" />
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed pt-1">
              I build scalable web applications, backend systems, AI-powered solutions and automation workflows that solve real-world problems.
            </p>
          </div>

          {/* SDLC Ownership Banner */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-4 max-w-xl shadow-sm flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
              <Layers className="h-5 w-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">
              <strong className="text-slate-900">End-to-End Ownership:</strong> Requirement → Development → Integration → Testing → Deployment → Production.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <a href="#projects" className="btn-primary w-full sm:w-auto justify-center">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <FileText className="h-4 w-4 text-orange-600" />
              Download Resume →
            </a>
          </div>

          {/* Direct Communication Channels */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-600">
            <span className="text-slate-500 font-semibold uppercase tracking-wider text-[11px]">Direct Channels:</span>

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
              className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-slate-700 hover:text-orange-600 hover:border-orange-200 transition-colors shadow-sm font-medium"
            >
              <Phone className="h-3.5 w-3.5 text-orange-600" />
              Call
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-slate-700 hover:text-orange-600 hover:border-orange-200 transition-colors shadow-sm font-medium"
            >
              <Mail className="h-3.5 w-3.5 text-orange-600" />
              Email
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-slate-700 hover:text-orange-600 hover:border-orange-200 transition-colors shadow-sm font-medium"
            >
              <Github className="h-3.5 w-3.5 text-slate-800" />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-slate-700 hover:text-orange-600 hover:border-orange-200 transition-colors shadow-sm font-medium"
            >
              <Linkedin className="h-3.5 w-3.5 text-slate-800" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Portrait Visual */}
        <div className="lg:col-span-5 flex justify-center">
          <CommandCenter />
        </div>
      </div>
    </section>
  );
}

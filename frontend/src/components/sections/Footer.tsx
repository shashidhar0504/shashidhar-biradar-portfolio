import { Github, Linkedin, Mail, MessageSquare, Phone, ArrowUp } from "lucide-react";
import { profile } from "../../data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const defaultWhatsappMsg = encodeURIComponent(
    "Hello Shashidhar, I visited your portfolio and would like to discuss an opportunity/project."
  );

  return (
    <footer className="relative bg-slate-900 text-slate-300 border-t border-slate-800 py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-start">
          {/* Left Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 font-mono font-bold text-white shadow-md">
                SB
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white tracking-tight">
                  Shashidhar Biradar
                </span>
                <span className="block text-xs font-mono text-blue-400">
                  Full Stack Java Developer | AI & Automation Engineer
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              I don't just write code. I build complete digital solutions — from Spring Boot backends and React UIs to intelligent AI workflows and cloud deployments.
            </p>

            <div className="font-mono text-xs text-slate-300">
              📍 Based in Pune, Maharashtra, India
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-blue-400 transition-colors">
                  Capability Map
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skill Ecosystem
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#ai-automation" className="hover:text-blue-400 transition-colors">
                  AI & Automation Journey
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-blue-400 transition-colors">
                  Development Workflow
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Social / Action Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-semibold text-white uppercase tracking-wider">
              Connect Directly
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono">
              <a
                href={`https://wa.me/${profile.whatsappNumber}?text=${defaultWhatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:underline"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp Direct Chat
              </a>

              <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-blue-400" />
                {profile.phone}
              </a>

              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-blue-400" />
                {profile.email}
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Github className="h-4 w-4 text-blue-400" />
                GitHub Profile
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-blue-400" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© 2026 Shashidhar Biradar. All rights reserved.</p>
          <p className="text-slate-400">Designed & built with code, curiosity, and continuous learning.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-3 py-1.5 text-slate-200 hover:text-white hover:border-blue-400 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5 text-blue-400" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}

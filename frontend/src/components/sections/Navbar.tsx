import { useState, useEffect } from "react";
import { Menu, X, MessageSquare, FileText } from "lucide-react";
import { profile } from "../../data/portfolio";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "AI & Automation", href: "#ai-automation" },
  { name: "Experience", href: "#experience" },
  { name: "Workflow", href: "#workflow" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 font-mono font-extrabold text-white shadow-md shadow-orange-500/20 transition-transform group-hover:scale-105">
            SB
          </div>
          <div>
            <span className="font-heading text-base font-bold text-slate-900 tracking-tight flex items-center gap-1">
              Shashidhar Biradar
              <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            </span>
            <span className="block text-[10px] font-mono text-orange-600 font-bold">Full Stack & AI Engineer</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/90 border border-slate-200 p-1.5 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-full px-3.5 py-1.5 font-heading text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-orange-50 text-orange-700 border border-orange-200 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (Resume & Let's Talk) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:border-orange-500 hover:text-orange-600 transition-colors shadow-sm"
          >
            <FileText className="h-3.5 w-3.5 text-orange-600" />
            Resume PDF
          </a>

          <a href="#contact" className="btn-primary py-2 px-4 text-xs shadow-none">
            <MessageSquare className="h-3.5 w-3.5" />
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 hover:text-slate-900 shadow-sm"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-200 px-6 py-6 animate-in slide-in-from-top-4 duration-200 bg-white/95 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-2.5 font-heading text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={profile.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3 text-xs font-semibold text-slate-700 shadow-sm"
              >
                <FileText className="h-4 w-4 text-orange-600" />
                View Resume PDF
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full justify-center py-3 text-xs"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

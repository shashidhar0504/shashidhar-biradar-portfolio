import { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle, Server, Layers, ShieldCheck, Cpu, ArrowRight } from "lucide-react";
import { Project } from "../../data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-slate-200 shadow-2xl p-5 sm:p-8 md:p-10 text-slate-800 bg-white custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors border border-slate-200 z-10"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 pr-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-orange-50 px-3.5 py-1 font-mono text-xs font-bold text-orange-700 border border-orange-200">
              {project.category}
            </span>
            {project.isProduction && (
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Production / Verified
              </span>
            )}
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {project.title}
          </h2>
          {project.subtitle && (
            <p className="font-mono text-xs font-bold text-orange-600">
              {project.subtitle}
            </p>
          )}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
            {project.description}
          </p>
        </div>

        {/* Action Links Bar */}
        <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-slate-200 pb-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 text-xs"
            >
              <ExternalLink className="h-4 w-4" />
              View Live Project ↗
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2.5 text-xs"
            >
              <Github className="h-4 w-4 text-slate-800" />
              GitHub Repository ↗
            </a>
          )}
        </div>

        {/* Case Study Detailed Breakdown */}
        {caseStudy ? (
          <div className="mt-8 space-y-8">
            {/* Challenge & Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/90">
                <h3 className="font-heading text-xs font-extrabold uppercase tracking-wider text-orange-600 flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-4 w-4" />
                  01 — The Problem / Challenge
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{caseStudy.challenge}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/90">
                <h3 className="font-heading text-xs font-extrabold uppercase tracking-wider text-orange-600 flex items-center gap-2 mb-3">
                  <Cpu className="h-4 w-4" />
                  02 — Engineered Solution
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Architecture Flow Diagram */}
            <div>
              <h3 className="font-heading text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-orange-600" />
                03 — System Architecture & Flow
              </h3>
              <div className="rounded-2xl bg-slate-900 p-5 text-white border border-slate-800 shadow-inner">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
                  {caseStudy.architecture.map((layer, idx) => (
                    <div key={idx} className="flex items-center gap-2 my-1">
                      <span className="rounded-lg bg-slate-800 px-3 py-2 border border-slate-700 text-orange-400 font-bold shadow-sm">
                        {layer}
                      </span>
                      {idx < caseStudy.architecture.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-orange-500 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features & Integrations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Features List */}
              <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/90">
                <h3 className="font-heading text-sm font-bold text-slate-900 mb-3">Key Features & Capabilities</h3>
                <ul className="space-y-2.5">
                  {caseStudy.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Integrations & Deployment */}
              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/90">
                  <h3 className="font-heading text-sm font-bold text-slate-900 mb-3">Integrations Implemented</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.integrations.map((integ, idx) => (
                      <span key={idx} className="tech-pill bg-white border-slate-200">
                        {integ}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200/90">
                  <h3 className="font-heading text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Server className="h-4 w-4 text-orange-600" />
                    Deployment Environment
                  </h3>
                  <p className="text-xs text-slate-700">{caseStudy.deployment}</p>
                </div>
              </div>
            </div>

            {/* Personal Contribution & Verified Outcome */}
            <div className="rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 p-5 border border-orange-200">
              <h3 className="font-heading text-sm font-bold text-orange-800 mb-1">My Personal Ownership & Role</h3>
              <p className="text-xs sm:text-sm text-slate-800 font-medium mb-3">{project.myContribution}</p>
              <h4 className="font-heading text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Verified Outcome</h4>
              <p className="text-xs sm:text-sm text-slate-700">{caseStudy.outcome}</p>
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            <h3 className="font-heading text-base font-semibold text-slate-900">Project Deliverables</h3>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

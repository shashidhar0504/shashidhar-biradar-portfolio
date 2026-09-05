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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 md:p-10 text-slate-200 custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="space-y-4 pr-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cyan-950/80 px-3 py-1 font-mono text-xs font-semibold text-cyan-400 border border-cyan-500/30">
              {project.category}
            </span>
            {project.isProduction && (
              <span className="rounded-full bg-emerald-950/80 px-3 py-1 font-mono text-xs font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Production
              </span>
            )}
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-slate-800 pb-6">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 text-xs"
            >
              <ExternalLink className="h-4 w-4" />
              View Live Project ↗
            </a>
          ) : (
            <span className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 font-mono text-xs text-slate-400">
              Live Demo Coming Soon
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2.5 text-xs"
            >
              <Github className="h-4 w-4" />
              Source Code ↗
            </a>
          )}
        </div>

        {/* Case Study Details */}
        {caseStudy ? (
          <div className="mt-8 space-y-8">
            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                  <ShieldCheck className="h-4 w-4" />
                  The Business Challenge
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{caseStudy.challenge}</p>
              </div>

              <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-3">
                  <Cpu className="h-4 w-4" />
                  Engineered Solution
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Architecture Stack */}
            <div>
              <h3 className="font-heading text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-cyan-400" />
                System Architecture & Flow
              </h3>
              <div className="rounded-2xl bg-slate-950 p-5 border border-slate-800">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-300">
                  {caseStudy.architecture.map((layer, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="rounded-lg bg-slate-900 px-3 py-2 border border-slate-800 text-cyan-300">
                        {layer}
                      </span>
                      {idx < caseStudy.architecture.length - 1 && (
                        <ArrowRight className="h-4 w-4 text-slate-600 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features & Integrations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Features List */}
              <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
                <h3 className="font-heading text-sm font-semibold text-white mb-3">Key Platform Capabilities</h3>
                <ul className="space-y-2">
                  {caseStudy.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Integrations & Deployment */}
              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
                  <h3 className="font-heading text-sm font-semibold text-white mb-3">Integrations Implemented</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.integrations.map((integ, idx) => (
                      <span key={idx} className="tech-pill">
                        {integ}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-900/90 p-5 border border-slate-800">
                  <h3 className="font-heading text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Server className="h-4 w-4 text-cyan-400" />
                    Deployment & Hosting
                  </h3>
                  <p className="text-xs text-slate-300">{caseStudy.deployment}</p>
                </div>
              </div>
            </div>

            {/* Personal Contribution & Outcome */}
            <div className="rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 p-5 border border-cyan-500/30">
              <h3 className="font-heading text-sm font-semibold text-cyan-400 mb-1">My Personal Ownership</h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium mb-3">{project.myContribution}</p>
              <h4 className="font-heading text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Practical Outcome</h4>
              <p className="text-xs sm:text-sm text-slate-300">{caseStudy.outcome}</p>
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            <h3 className="font-heading text-base font-semibold text-white">Project Highlights</h3>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
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

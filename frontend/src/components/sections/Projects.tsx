import { useState } from "react";
import { FolderGit2, Github, CheckCircle2, Sparkles } from "lucide-react";
import { projects, Project } from "../../data/portfolio";
import ProjectModal from "../ui/ProjectModal";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ["All", "Full Stack", "Production", "AI & Automation", "Client Project", "Academic"];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.filterCategories.includes(activeFilter) || p.category === activeFilter;
  });

  return (
    <section id="projects" className="relative section-padding bg-[#0B0F17]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="eyebrow justify-center">
            <FolderGit2 className="h-4 w-4" />
            Featured Engineering Work
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Platforms & <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Every project demonstrates end-to-end SDLC ownership — from architecture, Spring Boot REST services, and database normalization to React frontends and cloud deployments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 font-heading text-xs font-bold transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-cyan-500 text-slate-950 shadow-glow-cyan scale-105"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Ambient Accent Header Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

              <div>
                {/* Status Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="rounded-full bg-cyan-950/80 px-3.5 py-1 font-mono text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  {project.isProduction ? (
                    <span className="rounded-full bg-emerald-950/80 px-3 py-1 font-mono text-xs font-semibold text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Production
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-900 px-3 py-1 font-mono text-xs text-slate-400 border border-slate-800">
                      Academic Architecture
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 rounded-2xl bg-slate-900/60 p-4 border border-slate-800/80">
                  <h4 className="font-heading text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Key Features & Technical Ownership
                  </h4>
                  {project.highlights.slice(0, 3).map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-6">
                  <h4 className="font-heading text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies Owned
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-primary py-2.5 px-5 text-xs"
                >
                  <Sparkles className="h-4 w-4" />
                  View Case Study
                </button>

                <div className="flex items-center gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-heading text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      VIEW LIVE ↗
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-slate-400">
                      Live Demo Coming Soon
                    </span>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                      aria-label="View Source Code"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

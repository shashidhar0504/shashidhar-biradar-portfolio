import { Briefcase, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding bg-[#0B0F17]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <Briefcase className="h-4 w-4" />
            Professional History
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="gradient-text">Client Engineering</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Practical full-stack development, end-to-end SDLC ownership, and digital transformation for real-world applications.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative shadow-2xl"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="rounded-full bg-cyan-950/80 px-3 py-1 font-mono text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                      {item.type}
                    </span>
                    <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">{item.role}</h3>
                  <p className="font-mono text-xs text-cyan-400 font-semibold mt-1">{item.company}</p>
                </div>

                <div className="rounded-2xl bg-slate-900/80 p-3.5 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Pune, MH / Remote</span>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <div className="space-y-3">
                <h4 className="font-heading text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Deliverables & Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed rounded-xl bg-slate-900/40 p-3 border border-slate-800/60">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

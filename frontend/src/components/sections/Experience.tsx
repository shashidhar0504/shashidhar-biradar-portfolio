import { Briefcase, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { experience } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding bg-slate-50/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <Briefcase className="h-4 w-4 text-orange-600" />
            Professional History
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Work Experience & <span className="gradient-text">Engineering Roles</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Hands-on backend micro-services development, full-stack client engineering, and continuous production delivery.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-orange-500/40 transition-all duration-300 relative shadow-lg shadow-slate-200/50 bg-white/95"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="rounded-full bg-orange-50 px-3.5 py-1 font-mono text-xs font-bold text-orange-700 border border-orange-200">
                      {item.type}
                    </span>
                    <span className="font-mono text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-orange-600" />
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">{item.role}</h3>
                  <p className="font-mono text-xs text-orange-600 font-semibold mt-1">{item.company}</p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-3.5 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-600 shrink-0" />
                  <span>Bangalore / Pune / Remote</span>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <div className="space-y-3">
                <h4 className="font-heading text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Key Deliverables & Engineering Accomplishments
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed rounded-xl bg-slate-50 p-3.5 border border-slate-200/80">
                      <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
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

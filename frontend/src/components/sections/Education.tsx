import { GraduationCap, Award, BookOpen } from "lucide-react";
import { education } from "../../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative section-padding bg-[#0B0F17]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <GraduationCap className="h-4 w-4" />
            Academic Foundation
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Academic Record</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Strong academic background in Computer Applications with top CGPA performance.
          </p>
        </div>

        {/* Education Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-cyan-950/80 px-3.5 py-1 font-mono text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-1">{item.degree}</h3>
                <p className="font-mono text-xs text-cyan-400 font-semibold mb-4">{item.institution}</p>

                <div className="space-y-2">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Award className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
                  Sarhad College, Pune
                </span>
                <span className="text-emerald-400 font-semibold">High Distinction</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

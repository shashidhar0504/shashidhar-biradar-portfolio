import { GraduationCap, Award, BookOpen } from "lucide-react";
import { education } from "../../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative section-padding bg-slate-50/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <GraduationCap className="h-4 w-4" />
            Academic Foundation
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Education & <span className="gradient-text">Academic Record</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Strong academic background in Computer Applications with top CGPA performance.
          </p>
        </div>

        {/* Education Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-blue-500/40 transition-all duration-300 relative shadow-lg shadow-slate-200/50 flex flex-col justify-between bg-white/90"
            >
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 border border-slate-200 text-blue-600">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-blue-50 px-3.5 py-1 font-mono text-xs font-semibold text-blue-700 border border-blue-200">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">{item.degree}</h3>
                <p className="font-mono text-xs text-blue-600 font-semibold mb-4">{item.institution}</p>

                <div className="space-y-2">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Award className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                  Sarhad College, Pune
                </span>
                <span className="text-emerald-700 font-semibold">High Distinction</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

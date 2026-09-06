import { GraduationCap, Award, BookOpen, Sparkles } from "lucide-react";
import { education } from "../../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative section-padding bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <GraduationCap className="h-4 w-4 text-orange-600" />
            Academic Foundation
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Education & <span className="gradient-text">Academic Performance</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Strong foundational computer science and applications background with outstanding academic distinction.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-orange-500/40 transition-all duration-300 relative shadow-lg shadow-slate-200/40 flex flex-col justify-between bg-white/95"
            >
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200 text-orange-600">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-orange-50 px-3.5 py-1 font-mono text-xs font-bold text-orange-700 border border-orange-200">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">{item.degree}</h3>
                <p className="font-mono text-xs text-orange-600 font-semibold mb-4">{item.institution}</p>

                <div className="space-y-2.5">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Award className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className={detail.includes("9.17") ? "font-bold text-slate-900" : ""}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-orange-600" />
                  Computer Applications Focus
                </span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                  High Distinction
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

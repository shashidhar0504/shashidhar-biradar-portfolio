import { Award, CheckCircle2 } from "lucide-react";
import { achievements, stats } from "../../data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-padding bg-slate-100/60 border-t border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Animated Metrics Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, idx) => (
            <div key={idx} className="glass-panel rounded-3xl p-6 text-center border border-slate-200 shadow-md shadow-slate-200/50 bg-white/90">
              <span className="block font-heading text-4xl sm:text-5xl font-extrabold text-blue-600 font-mono tracking-tight">
                {s.value}
                <span className="text-indigo-600">{s.suffix}</span>
              </span>
              <span className="block font-mono text-xs text-slate-700 mt-2 font-bold uppercase tracking-wider">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="eyebrow justify-center">
            <Award className="h-4 w-4" />
            Milestones & Highlights
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Accomplishments & <span className="gradient-text">Production Milestones</span>
          </h2>
        </div>

        {/* Accomplishments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-slate-200/80 flex items-start gap-3.5 hover:border-blue-500/40 transition-colors bg-white/90 shadow-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600 mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">{ach}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

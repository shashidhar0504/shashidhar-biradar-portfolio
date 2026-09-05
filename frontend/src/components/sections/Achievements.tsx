import { Award, CheckCircle2 } from "lucide-react";
import { achievements, stats } from "../../data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-padding bg-slate-950/80 border-t border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl">
        {/* Animated Metrics Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s, idx) => (
            <div key={idx} className="glass-panel rounded-3xl p-6 text-center border border-slate-700/80 shadow-2xl">
              <span className="block font-heading text-4xl sm:text-5xl font-extrabold text-cyan-400 font-mono tracking-tight">
                {s.value}
                <span className="text-cyan-300">{s.suffix}</span>
              </span>
              <span className="block font-mono text-xs text-slate-300 mt-2 font-semibold uppercase tracking-wider">
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
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Accomplishments & <span className="gradient-text">Production Milestones</span>
          </h2>
        </div>

        {/* Accomplishments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-slate-800 flex items-start gap-3.5 hover:border-cyan-500/40 transition-colors"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 mt-0.5">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">{ach}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

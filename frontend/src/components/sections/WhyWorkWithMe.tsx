import { CheckCircle2, Target, Sparkles, Plug, TrendingUp, RefreshCw, Award } from "lucide-react";
import { whyWorkWithMe } from "../../data/portfolio";

export default function WhyWorkWithMe() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "CheckCircle2": return CheckCircle2;
      case "Target": return Target;
      case "Sparkles": return Sparkles;
      case "Plug": return Plug;
      case "TrendingUp": return TrendingUp;
      case "RefreshCw": return RefreshCw;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="why-work-with-me" className="relative section-padding bg-slate-950/80 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <Award className="h-4 w-4" />
            Value Proposition
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Work <span className="gradient-text">With Me</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Combining rigorous software engineering, modern AI integration, business understanding, and real-world execution.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMe.map((item, idx) => {
            const Icon = getPillarIcon(item.icon);
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 mb-5 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
    <section id="why-work-with-me" className="relative section-padding bg-slate-100/50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <Award className="h-4 w-4" />
            Value Proposition
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Work <span className="gradient-text">With Me</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
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
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-blue-500/40 transition-all duration-300 group bg-white/90 shadow-md shadow-slate-200/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

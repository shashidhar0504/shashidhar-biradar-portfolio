import { CheckCircle2, Target, Sparkles, Plug, TrendingUp, RefreshCw, Award, BrainCircuit } from "lucide-react";
import { whyWorkWithMe } from "../../data/portfolio";

export default function WhyWorkWithMe() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "CheckCircle2": return CheckCircle2;
      case "Target": return Target;
      case "Sparkles": return Sparkles;
      case "BrainCircuit": return BrainCircuit;
      case "Plug": return Plug;
      case "TrendingUp": return TrendingUp;
      case "RefreshCw": return RefreshCw;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="why-work-with-me" className="relative section-padding bg-slate-100/60 border-t border-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <Award className="h-4 w-4 text-orange-600" />
            Value Proposition
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Work <span className="gradient-text">With Me?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Combining core Java backend engineering, modern full stack development, AI & automation capabilities, and real-world client delivery.
          </p>
        </div>

        {/* 6 Value Proposition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMe.map((item, idx) => {
            const Icon = getPillarIcon(item.icon);
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-orange-500/40 transition-all duration-300 group bg-white/95 shadow-md shadow-slate-200/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 mb-5 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="text-orange-600 font-semibold uppercase tracking-wider">Pillar 0{idx + 1}</span>
                  <span className="text-slate-400 font-medium">Hiring Advantage</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

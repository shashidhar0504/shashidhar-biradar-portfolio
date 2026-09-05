import { Workflow as WorkflowIcon, ArrowRight } from "lucide-react";
import { developmentWorkflow } from "../../data/portfolio";

export default function Workflow() {
  return (
    <section id="workflow" className="relative section-padding bg-slate-950/80 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <WorkflowIcon className="h-4 w-4" />
            Methodology & Execution
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real-World <span className="gradient-text">Development Workflow</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            A battle-tested 7-stage engineering pipeline ensuring client requirements turn into scalable, secure, production-ready software.
          </p>
        </div>

        {/* Workflow 7-Stage Horizontal / Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentWorkflow.map((step, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xl font-extrabold text-cyan-400">{step.number}</span>
                  <span className="rounded-full bg-slate-900 px-3 py-1 font-mono text-[10px] font-semibold text-slate-400 border border-slate-800">
                    STAGE {step.phase}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Phase {step.number} of 07</span>
                <ArrowRight className="h-3.5 w-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Workflow as WorkflowIcon, ArrowRight } from "lucide-react";
import { developmentWorkflow } from "../../data/portfolio";

export default function Workflow() {
  return (
    <section id="workflow" className="relative section-padding bg-slate-100/60 border-t border-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <WorkflowIcon className="h-4 w-4 text-orange-600" />
            Software Development Lifecycle
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How I <span className="gradient-text">Build Software</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            A structured 7-stage engineering process ensuring business requirements transform into reliable, production-ready digital products.
          </p>
        </div>

        {/* Workflow 7-Stage Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentWorkflow.map((step, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between border border-slate-200/80 hover:border-orange-500/40 transition-all duration-300 group bg-white/95 shadow-md shadow-slate-200/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xl font-extrabold text-orange-600">{step.number}</span>
                  <span className="rounded-full bg-orange-50 px-3 py-1 font-mono text-[10px] font-bold text-orange-700 border border-orange-200">
                    STAGE {step.phase}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Phase {step.number} of 07</span>
                <ArrowRight className="h-3.5 w-3.5 text-orange-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { BrainCircuit, Code2, Layers, Rocket, Workflow, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { aiAutomationSteps } from "../../data/portfolio";

export default function AiAutomationJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2": return Code2;
      case "Layers": return Layers;
      case "Rocket": return Rocket;
      case "Workflow": return Workflow;
      case "Zap": return Zap;
      case "BrainCircuit": return BrainCircuit;
      default: return Sparkles;
    }
  };

  const currentStep = aiAutomationSteps[activeStep];
  const CurrentIcon = getStepIcon(currentStep.icon);

  return (
    <section id="ai-automation" className="relative section-padding bg-slate-100/60 border-t border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <BrainCircuit className="h-4 w-4 text-blue-600" />
            Technical Progression
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Traditional Java to <span className="gradient-text">Intelligent Systems</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            A visual evolution mapping how core Java backend engineering expanded into production applications, automated communication workflows, and AI integration.
          </p>
        </div>

        {/* Node Graph Flow (Step Nodes Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {aiAutomationSteps.map((item, idx) => {
            const Icon = getStepIcon(item.icon);
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-between group ${
                  isActive
                    ? "bg-white border-blue-500 shadow-md shadow-blue-500/10 scale-105"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <span className="font-mono text-[10px] font-bold text-blue-600 mb-2">{item.step}</span>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl mb-3 transition-colors ${
                    isActive ? "bg-blue-600 text-white shadow-md" : "bg-slate-100 text-blue-600 group-hover:bg-blue-50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xs font-bold text-slate-900 line-clamp-1">{item.title}</h3>
                <span className="font-mono text-[9px] text-slate-500 mt-1">{item.subtitle}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Panel */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl bg-white/90">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shrink-0">
                <CurrentIcon className="h-7 w-7" />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  STAGE {currentStep.step} — {currentStep.subtitle}
                </span>
                <h3 className="font-heading text-2xl font-bold text-slate-900">{currentStep.title}</h3>
              </div>
            </div>

            <div className="rounded-full bg-blue-50 px-4 py-2 text-xs font-mono text-blue-700 border border-blue-200 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span>Production Value Delivered</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {currentStep.description}
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                Verified Capability
              </span>
              <span>·</span>
              <span>Modular Architecture</span>
              <span>·</span>
              <span>Client Solutions Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

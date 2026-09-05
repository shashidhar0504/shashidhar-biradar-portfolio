import { useState } from "react";
import { Server, Layout, BrainCircuit, Zap, Layers, Cloud, ChevronRight, CheckCircle2 } from "lucide-react";
import { capabilities } from "../../data/portfolio";

export default function CapabilityMap() {
  const [selectedId, setSelectedId] = useState(capabilities[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case "Server": return Server;
      case "Layout": return Layout;
      case "BrainCircuit": return BrainCircuit;
      case "Zap": return Zap;
      case "Layers": return Layers;
      case "Cloud": return Cloud;
      default: return Server;
    }
  };

  const selectedCap = capabilities.find((c) => c.id === selectedId) || capabilities[0];
  const SelectedIcon = getIcon(selectedCap.iconName);

  return (
    <section id="capabilities" className="relative section-padding bg-[#0B0F17]">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <Layers className="h-4 w-4" />
            Engineering Spectrum
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Capability Map</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Comprehensive technical depth across traditional enterprise Java backends, modern React UIs, intelligent AI workflows, automated integrations, and cloud deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Capability Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((cap) => {
              const Icon = getIcon(cap.iconName);
              const isSelected = cap.id === selectedId;
              return (
                <button
                  key={cap.id}
                  onClick={() => setSelectedId(cap.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-slate-900 border-cyan-500/80 shadow-glow-cyan"
                      : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isSelected ? "bg-cyan-500 text-white shadow-md" : "bg-slate-900 text-cyan-400 group-hover:bg-slate-800"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className={`font-heading text-sm font-bold ${isSelected ? "text-white" : "text-slate-200"}`}>
                        {cap.title}
                      </h3>
                      <p className="font-mono text-[11px] text-slate-400">{cap.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform ${
                      isSelected ? "text-cyan-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Side: Active Capability Interactive Detail Card */}
          <div className="lg:col-span-7">
            <div className="h-full glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-700/80 shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg">
                    <SelectedIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                      {selectedCap.subtitle}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white">{selectedCap.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedCap.description}
                </p>

                {/* Technologies Grid */}
                <div>
                  <h4 className="font-heading text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Core Technologies & Protocols
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedCap.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-3.5 py-2 font-mono text-xs font-semibold text-cyan-300 hover:border-cyan-500/50 transition-colors"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div className="mt-8 rounded-2xl bg-slate-900/80 p-4 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span className="font-mono text-emerald-400 font-semibold">✓ Verified Implementation Experience</span>
                <a href="#projects" className="text-cyan-400 hover:underline font-heading font-semibold flex items-center gap-1">
                  See in Projects &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="capabilities" className="relative section-padding bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <Layers className="h-4 w-4 text-blue-600" />
            Engineering Spectrum
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Professional <span className="gradient-text">Capability Map</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Comprehensive technical depth across traditional enterprise Java backends, modern React UIs, intelligent AI workflows, automated integrations, and cloud deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side */}
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
                      ? "bg-white border-blue-500 shadow-md shadow-blue-500/10"
                      : "bg-slate-50/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isSelected ? "bg-blue-600 text-white shadow-sm" : "bg-white border border-slate-200 text-blue-600 group-hover:bg-blue-50"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className={`font-heading text-sm font-bold ${isSelected ? "text-blue-700" : "text-slate-800"}`}>
                        {cap.title}
                      </h3>
                      <p className="font-mono text-[11px] text-slate-500 font-medium">{cap.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform ${
                      isSelected ? "text-blue-600 translate-x-1" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7">
            <div className="h-full glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200 shadow-xl bg-white">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-glow">
                    <SelectedIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider">
                      {selectedCap.subtitle}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-slate-900">{selectedCap.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedCap.description}
                </p>

                {/* Technologies Grid */}
                <div>
                  <h4 className="font-heading text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Core Technologies & Protocols
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedCap.technologies.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-xl bg-blue-50/70 border border-blue-200/80 px-3.5 py-2 font-mono text-xs font-semibold text-blue-800 hover:border-blue-300 transition-colors"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div className="mt-8 rounded-2xl bg-slate-50 p-4 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span className="font-mono text-emerald-700 font-semibold">✓ Verified Implementation Experience</span>
                <a href="#projects" className="text-blue-600 hover:underline font-heading font-semibold flex items-center gap-1">
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

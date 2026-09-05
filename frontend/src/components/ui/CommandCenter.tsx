import { useState, useEffect } from "react";
import { Server, Layout, Brain, Zap, Database, Cloud, Cpu, ShieldCheck, Terminal } from "lucide-react";

export default function CommandCenter() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const nodes = [
    { name: "Java 17+", role: "Core Language", icon: Cpu, color: "text-amber-700 border-amber-200 bg-amber-50", posX: -120, posY: -90 },
    { name: "Spring Boot", role: "Backend Microservices", icon: Server, color: "text-emerald-700 border-emerald-200 bg-emerald-50", posX: 110, posY: -110 },
    { name: "React.js", role: "Frontend UI", icon: Layout, color: "text-sky-700 border-sky-200 bg-sky-50", posX: -140, posY: 40 },
    { name: "AI & LLMs", role: "Intelligent Workflows", icon: Brain, color: "text-purple-700 border-purple-200 bg-purple-50", posX: 120, posY: 30 },
    { name: "MySQL", role: "Relational DB", icon: Database, color: "text-blue-700 border-blue-200 bg-blue-50", posX: 0, posY: 110 },
    { name: "Automation", role: "Workflows & APIs", icon: Zap, color: "text-orange-700 border-orange-200 bg-orange-50", posX: 0, posY: -130 },
  ];

  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-4">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-indigo-400/10 to-transparent blur-3xl rounded-full" />

      {/* Central Command Core Card */}
      <div
        className="relative z-10 glass-panel rounded-3xl p-6 border border-slate-200 shadow-xl text-center transition-transform duration-300 ease-out bg-white"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        }}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20 text-white mb-3">
          <Terminal className="h-7 w-7" />
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-mono font-semibold text-blue-700 border border-blue-200 mb-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          SYSTEM_ONLINE
        </div>
        <h3 className="font-heading text-lg font-bold text-slate-900 tracking-tight">Shashidhar Biradar</h3>
        <p className="font-mono text-xs text-slate-500 mt-1">Full Stack Java & AI Architecture</p>

        {/* Live Metrics Grid */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-left pt-3 border-t border-slate-100">
          <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200">
            <span className="block text-[10px] text-slate-500 font-mono">BACKEND</span>
            <span className="font-heading text-xs font-semibold text-blue-700 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Spring Security
            </span>
          </div>
          <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-200">
            <span className="block text-[10px] text-slate-500 font-mono">DEPLOYMENT</span>
            <span className="font-heading text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <Cloud className="h-3.5 w-3.5" /> Production Ready
            </span>
          </div>
        </div>
      </div>

      {/* Floating Orbit Tech Nodes */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div
              key={i}
              className={`absolute top-1/2 left-1/2 pointer-events-auto rounded-2xl p-3 backdrop-blur-md border border-slate-200 shadow-md shadow-slate-200/50 transition-transform duration-500 ease-out animate-float bg-white/90`}
              style={{
                transform: `translate(calc(-50% + ${node.posX}px + ${mousePos.x * (i % 2 === 0 ? 0.8 : -0.8)}px), calc(-50% + ${node.posY}px + ${mousePos.y * (i % 2 === 0 ? 0.8 : -0.8)}px))`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <div className={`flex items-center gap-2.5 rounded-xl ${node.color} px-3 py-1.5 border`}>
                <Icon className="h-4 w-4 shrink-0" />
                <div className="text-left whitespace-nowrap">
                  <div className="font-heading text-xs font-bold">{node.name}</div>
                  <div className="font-mono text-[9px] opacity-80">{node.role}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

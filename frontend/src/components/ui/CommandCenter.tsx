import { useState, useEffect } from "react";
import { Server, Layout, Brain, Zap, Database, Cloud, Cpu, ShieldCheck, Terminal } from "lucide-react";

export default function CommandCenter() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // range -10 to 10
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const nodes = [
    { name: "Java 17+", role: "Core Language", icon: Cpu, color: "text-amber-400 border-amber-500/30 bg-amber-950/40", posX: -120, posY: -90 },
    { name: "Spring Boot", role: "Backend Microservices", icon: Server, color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/40", posX: 110, posY: -110 },
    { name: "React.js", role: "Frontend UI", icon: Layout, color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/40", posX: -140, posY: 40 },
    { name: "AI & LLMs", role: "Intelligent Workflows", icon: Brain, color: "text-purple-400 border-purple-500/30 bg-purple-950/40", posX: 120, posY: 30 },
    { name: "MySQL", role: "Relational DB", icon: Database, color: "text-blue-400 border-blue-500/30 bg-blue-950/40", posX: 0, posY: 110 },
    { name: "Automation", role: "Workflows & APIs", icon: Zap, color: "text-yellow-400 border-yellow-500/30 bg-yellow-950/40", posX: 0, posY: -130 },
  ];

  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-4">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl rounded-full" />
      <div className="absolute h-64 w-64 bg-purple-600/10 blur-3xl rounded-full animate-pulse-slow" />

      {/* Central Command Core Card */}
      <div
        className="relative z-10 glass-panel rounded-3xl p-6 border border-cyan-500/30 shadow-glow-cyan text-center transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        }}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg text-white mb-3">
          <Terminal className="h-7 w-7" />
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-950/80 px-3 py-1 text-[11px] font-mono font-semibold text-cyan-300 border border-cyan-500/30 mb-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          SYSTEM_ONLINE
        </div>
        <h3 className="font-heading text-lg font-bold text-white tracking-tight">Shashidhar Biradar</h3>
        <p className="font-mono text-xs text-slate-400 mt-1">Full Stack Java & AI Architecture</p>

        {/* Live Metrics Grid */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-left pt-3 border-t border-slate-800">
          <div className="rounded-xl bg-slate-900/80 p-2.5 border border-slate-800">
            <span className="block text-[10px] text-slate-400 font-mono">BACKEND</span>
            <span className="font-heading text-xs font-semibold text-cyan-300 flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Spring Security
            </span>
          </div>
          <div className="rounded-xl bg-slate-900/80 p-2.5 border border-slate-800">
            <span className="block text-[10px] text-slate-400 font-mono">DEPLOYMENT</span>
            <span className="font-heading text-xs font-semibold text-emerald-400 flex items-center gap-1">
              <Cloud className="h-3.5 w-3.5" /> Production Ready
            </span>
          </div>
        </div>
      </div>

      {/* Floating Orbit Tech Nodes (Mouse Responsive) */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div
              key={i}
              className={`absolute top-1/2 left-1/2 pointer-events-auto rounded-2xl p-3 backdrop-blur-md border shadow-lg transition-transform duration-500 ease-out animate-float`}
              style={{
                transform: `translate(calc(-50% + ${node.posX}px + ${mousePos.x * (i % 2 === 0 ? 0.8 : -0.8)}px), calc(-50% + ${node.posY}px + ${mousePos.y * (i % 2 === 0 ? 0.8 : -0.8)}px))`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <div className={`flex items-center gap-2.5 rounded-xl ${node.color} px-3 py-1.5 border`}>
                <Icon className="h-4 w-4 shrink-0" />
                <div className="text-left whitespace-nowrap">
                  <div className="font-heading text-xs font-bold text-white">{node.name}</div>
                  <div className="font-mono text-[9px] text-slate-300">{node.role}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

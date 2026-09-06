import { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowUpRight, Code2, Server, BrainCircuit, Award } from "lucide-react";
import { profile } from "../../data/portfolio";

export default function CommandCenter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Subtle tilt ranges (-5deg to +5deg)
      const rotateX = -((y / rect.height - 0.5) * 10);
      const rotateY = (x / rect.width - 0.5) * 10;
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;

      setTilt({ rotateX, rotateY, glowX, glowY });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
      }}
      className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] flex items-center justify-center p-4 sm:p-6 perspective-1000 select-none"
    >
      {/* Dynamic Ambient Orange Glow Following Mouse */}
      <div
        className="absolute inset-0 rounded-3xl opacity-40 blur-3xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(249, 115, 22, 0.35) 0%, rgba(249, 115, 22, 0.05) 50%, transparent 80%)`,
        }}
      />

      {/* Geometric Orange Accent Frame Behind Portrait */}
      <div className="absolute inset-4 sm:inset-6 rounded-3xl border-2 border-orange-500/30 bg-gradient-to-tr from-orange-500/10 via-amber-500/5 to-transparent translate-x-3 translate-y-3 pointer-events-none rounded-3xl transition-transform duration-300" />

      {/* Main Interactive Portrait Card */}
      <div
        className="relative z-10 w-full h-full rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden group transition-all duration-200 ease-out"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.02)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Actual Provided Photo */}
        <img
          src={profile.profileImage}
          alt={profile.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="eager"
        />

        {/* Gradient Overlay for Readable Text Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Top-Right Floating Card: "Turning Ideas Into Real Solutions →" */}
        <div className="absolute top-4 right-4 z-20 transition-transform duration-300 group-hover:-translate-y-1">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-md px-3.5 py-2 text-xs font-heading font-bold text-slate-900 shadow-lg border border-slate-200/80 hover:border-orange-500 hover:text-orange-600 transition-colors"
          >
            <span>Turning Ideas Into Real Solutions</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-orange-600" />
          </a>
        </div>

        {/* Bottom-Left Floating Badge: "Build • Automate • Innovate" */}
        <div className="absolute bottom-4 left-4 z-20 transition-transform duration-300 group-hover:translate-x-1">
          <div className="flex items-center gap-2 rounded-2xl bg-slate-900/90 backdrop-blur-md px-3.5 py-2 text-xs font-mono font-semibold text-orange-400 border border-orange-500/40 shadow-lg">
            <Sparkles className="h-3.5 w-3.5 text-orange-500 animate-pulse" />
            <span>Build • Automate • Innovate</span>
          </div>
        </div>

        {/* Bottom-Right Pill: "BCA 9.17 CGPA" */}
        <div className="absolute bottom-4 right-4 z-20 hidden sm:block transition-transform duration-300 group-hover:scale-105">
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/90 text-white backdrop-blur-md px-3 py-1 text-[11px] font-mono font-bold shadow-lg">
            <Award className="h-3.5 w-3.5" />
            <span>9.17 CGPA</span>
          </div>
        </div>
      </div>

      {/* Orbiting Tech Chips (Desktop only) */}
      <div className="absolute -top-2 -left-2 z-30 hidden lg:block animate-float">
        <div className="flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md border border-slate-200 text-xs font-heading font-bold text-slate-800">
          <Code2 className="h-4 w-4 text-orange-600" />
          <span>Java 21</span>
        </div>
      </div>

      <div className="absolute top-1/2 -right-4 z-30 hidden lg:block animate-float-slow">
        <div className="flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md border border-slate-200 text-xs font-heading font-bold text-slate-800">
          <Server className="h-4 w-4 text-orange-600" />
          <span>Spring Boot 3</span>
        </div>
      </div>

      <div className="absolute -bottom-2 -left-2 z-30 hidden lg:block animate-float">
        <div className="flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md border border-slate-200 text-xs font-heading font-bold text-slate-800">
          <BrainCircuit className="h-4 w-4 text-orange-600" />
          <span>AI & Automation</span>
        </div>
      </div>
    </div>
  );
}

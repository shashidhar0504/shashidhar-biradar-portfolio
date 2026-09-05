import { useState } from "react";
import {
  Code2,
  Server,
  ShieldCheck,
  Database,
  Globe,
  Cpu,
  Layout,
  FileCode,
  Palette,
  Smartphone,
  Monitor,
  Brain,
  MessageSquare,
  CreditCard,
  Mail,
  Workflow,
  GitBranch,
  CloudUpload,
  Terminal,
  Laptop,
  CheckCircle,
} from "lucide-react";
import { skillCategories } from "../../data/portfolio";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2": return Code2;
      case "Server": return Server;
      case "ShieldCheck": return ShieldCheck;
      case "Database": return Database;
      case "Globe": return Globe;
      case "Cpu": return Cpu;
      case "Layout": return Layout;
      case "FileCode": return FileCode;
      case "Palette": return Palette;
      case "Smartphone": return Smartphone;
      case "Monitor": return Monitor;
      case "Brain": return Brain;
      case "MessageSquare": return MessageSquare;
      case "CreditCard": return CreditCard;
      case "Mail": return Mail;
      case "Workflow": return Workflow;
      case "GitBranch": return GitBranch;
      case "CloudUpload": return CloudUpload;
      case "Terminal": return Terminal;
      case "Laptop": return Laptop;
      default: return Code2;
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-cyan-950/80 text-cyan-300 border-cyan-500/40";
      case "Strong":
        return "bg-emerald-950/80 text-emerald-300 border-emerald-500/40";
      case "Experienced":
        return "bg-blue-950/80 text-blue-300 border-blue-500/40";
      default:
        return "bg-purple-950/80 text-purple-300 border-purple-500/40";
    }
  };

  return (
    <section id="skills" className="relative section-padding bg-slate-950/80 border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="eyebrow justify-center">
            <Code2 className="h-4 w-4" />
            Technical Arsenal
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Interactive <span className="gradient-text">Skill Ecosystem</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Categorized technologies backed by production experience, clear architecture patterns, and practical delivery.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`rounded-2xl px-5 py-2.5 font-heading text-xs font-bold transition-all duration-200 ${
                activeTab === idx
                  ? "bg-cyan-500 text-slate-950 shadow-glow-cyan scale-105"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeTab].skills.map((skill, idx) => {
            const Icon = getSkillIcon(skill.icon);
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-[10px] font-semibold border ${getLevelBadgeColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-2">
                    {skill.category}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">{skill.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Verified Proficiency
                  </span>
                  <span className="text-slate-400">Java / Full Stack</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

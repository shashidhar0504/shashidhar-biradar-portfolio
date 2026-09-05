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
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Strong":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Experienced":
        return "bg-sky-50 text-sky-700 border-sky-200";
      default:
        return "bg-purple-50 text-purple-700 border-purple-200";
    }
  };

  return (
    <section id="skills" className="relative section-padding bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="eyebrow justify-center">
            <Code2 className="h-4 w-4" />
            Technical Arsenal
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Interactive <span className="gradient-text">Skill Ecosystem</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
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
                  ? "bg-blue-600 text-white shadow-glow scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
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
                className="glass-card rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between bg-white border border-slate-200 shadow-soft"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
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

                  <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="block font-mono text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-2">
                    {skill.category}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">{skill.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Verified Proficiency
                  </span>
                  <span>Java / Full Stack</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

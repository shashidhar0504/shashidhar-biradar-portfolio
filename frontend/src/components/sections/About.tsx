import { User, Code2, Server, BrainCircuit, Rocket, Award } from "lucide-react";
import { about } from "../../data/portfolio";

export default function About() {
  const timelineSteps = [
    {
      year: "2023 - 2024",
      title: "Core Java & Database Mastery",
      description: "Deep-dived into Object-Oriented Java, Data Structures, Servlets, JSP, and relational MySQL database architecture.",
      icon: Code2,
    },
    {
      year: "2024 - 2025",
      title: "Full Stack Java Architecture",
      description: "Mastered Spring Boot, Spring Security with JWT authentication, Hibernate/JPA entity persistence, and React.js frontend development.",
      icon: Server,
    },
    {
      year: "2025 - 2026",
      title: "Production Client Platforms & Marketing Internship",
      description: "Delivered UniversalUrja full-stack production app end-to-end with Razorpay checkout & WhatsApp chat. Completed internship at I-Well Health Solutions.",
      icon: Rocket,
    },
    {
      year: "2026 - Present",
      title: "AI Integration & Technical Solution Builder",
      description: "Evolved into an AI & Automation Engineer, integrating LLMs, automated WhatsApp/email workflows, and full-stack solutions for clients.",
      icon: BrainCircuit,
    },
  ];

  return (
    <section id="about" className="relative section-padding bg-white border-t border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow & Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <User className="h-4 w-4" />
            Engineering Background
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            I don't just write code. <br className="hidden sm:inline" />
            <span className="gradient-text">I build complete digital solutions.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {about.headline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 bg-slate-50/70 border border-slate-200">
              <h3 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-blue-600" />
                Full SDLC Ownership & Technical Evolution
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {about.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Highlights Pill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                {about.highlights.map((h, i) => (
                  <div key={i} className="rounded-2xl bg-white p-3.5 border border-slate-200 shadow-sm">
                    <span className="block text-[11px] font-mono text-blue-600 font-semibold uppercase">{h.label}</span>
                    <span className="font-heading text-xs font-semibold text-slate-900 mt-1 block">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card rounded-2xl p-4 text-center bg-white border border-slate-200">
                <span className="block text-2xl font-extrabold text-blue-600 font-mono">BCA</span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">Graduating 2026</span>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center bg-white border border-slate-200">
                <span className="block text-2xl font-extrabold text-emerald-600 font-mono">9.17</span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">BCA CGPA</span>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center bg-white border border-slate-200">
                <span className="block text-2xl font-extrabold text-indigo-600 font-mono">6</span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">Languages Spoken</span>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center bg-white border border-slate-200">
                <span className="block text-2xl font-extrabold text-sky-600 font-mono">2+ Yrs</span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">Building Stack</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-blue-600" />
              Technical Evolution Timeline
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-sky-500">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-blue-600 text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                    </div>

                    <div className="glass-card rounded-2xl p-5 hover:border-blue-500/40 transition-all bg-white border border-slate-200">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-xs font-semibold text-blue-600">{step.year}</span>
                        <Icon className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <h4 className="font-heading text-sm font-bold text-slate-900">{step.title}</h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

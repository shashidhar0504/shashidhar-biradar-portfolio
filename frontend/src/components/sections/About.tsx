import { User, Code2, Server, BrainCircuit, Rocket, Award } from "lucide-react";
import { about, atAGlance } from "../../data/portfolio";

export default function About() {
  const timelineSteps = [
    {
      year: "2023 - 2024",
      title: "Core Java & Relational Databases",
      description: "Deep-dived into Object-Oriented Java, Data Structures, Servlets, JSP, JDBC, and normalized MySQL database design.",
      icon: Code2,
    },
    {
      year: "2024 - 2025",
      title: "Full Stack Java Architecture",
      description: "Mastered Spring Boot 3, Spring Security with JWT stateless auth, Hibernate/JPA entity persistence, and React.js frontend engineering.",
      icon: Server,
    },
    {
      year: "2025 - 2026",
      title: "Production Client Platforms & Internships",
      description: "Delivered UniversalUrja full-stack production platform end-to-end with Razorpay checkout & WhatsApp chat. Completed internship at I-Well Health Solutions.",
      icon: Rocket,
    },
    {
      year: "2026 - Present",
      title: "Event-Driven Engineering & AI Integration",
      description: "Joined Infotact Solutions as Intern building GridWeaver (Java 21, Virtual Threads, Kafka). Freelancing AI & automation solutions for business clients.",
      icon: BrainCircuit,
    },
  ];

  return (
    <section id="about" className="relative section-padding bg-white border-t border-b border-slate-200">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Eyebrow & Section Heading */}
        <div className="text-center space-y-3">
          <div className="eyebrow justify-center">
            <User className="h-4 w-4" />
            Engineering Background
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Transforming Business Requirements into <br className="hidden sm:inline" />
            <span className="gradient-text">Production Software Systems</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {about.headline}
          </p>
        </div>

        {/* At a Glance Summary Card Grid for Hiring Managers */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-5 w-5 text-orange-600" />
            <h3 className="font-heading text-lg font-bold text-slate-900">At a Glance — Candidate Summary</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {atAGlance.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-4 bg-slate-50/70 border border-slate-200/90 hover:border-orange-500/40 transition-all shadow-sm group"
              >
                <span className="block font-mono text-[10px] text-orange-600 font-bold uppercase tracking-wider mb-1">
                  {item.label}
                </span>
                <span className="font-heading text-base font-extrabold text-slate-900 group-hover:text-orange-600 transition-colors block">
                  {item.value}
                </span>
                <span className="block font-mono text-xs text-slate-500 mt-1">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 bg-slate-50/70 border border-slate-200">
              <h3 className="font-heading text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-orange-600" />
                Full SDLC Ownership & Problem Solving
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
                    <span className="block text-[11px] font-mono text-orange-600 font-semibold uppercase">{h.label}</span>
                    <span className="font-heading text-xs font-semibold text-slate-900 mt-1 block">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card rounded-2xl p-4 text-center bg-white border border-slate-200">
                <span className="block text-2xl font-extrabold text-orange-600 font-mono">BCA</span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">Graduating 2026</span>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center bg-white border border-slate-200">
                <span className="block text-2xl font-extrabold text-emerald-600 font-mono">9.17</span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">BCA CGPA</span>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center bg-white border border-slate-200">
                <span className="block text-2xl font-extrabold text-slate-900 font-mono">6</span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">Languages</span>
              </div>
              <div className="glass-card rounded-2xl p-4 text-center bg-white border border-slate-200">
                <span className="block text-2xl font-extrabold text-orange-600 font-mono">2+ Yrs</span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">Building Stack</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Award className="h-5 w-5 text-orange-600" />
              Technical Evolution Timeline
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-orange-600 before:via-amber-500 before:to-slate-400">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white border-2 border-orange-600 text-orange-600 group-hover:scale-110 transition-transform shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-orange-600" />
                    </div>

                    <div className="glass-card rounded-2xl p-5 hover:border-orange-500/40 transition-all bg-white border border-slate-200">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-xs font-semibold text-orange-600">{step.year}</span>
                        <Icon className="h-4 w-4 text-slate-400 group-hover:text-orange-600 transition-colors" />
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

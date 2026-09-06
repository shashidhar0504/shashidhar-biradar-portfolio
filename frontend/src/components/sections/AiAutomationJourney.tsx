import { BrainCircuit, CheckCircle2, Bot, MessageSquare, Mail } from "lucide-react";

export default function AiAutomationJourney() {
  const pillars = [
    {
      title: "AI API & LLM Integration",
      icon: Bot,
      description: "Connecting OpenAI and third-party LLM REST APIs into production web applications to handle intelligent query parsing, dynamic content drafting, and automated client responses.",
      technologies: ["LLM REST APIs", "JSON Response Parsing", "System Prompt Engineering", "Async Fetch"],
    },
    {
      title: "Prompt Engineering & Structured Outputs",
      icon: BrainCircuit,
      description: "Designing deterministic system prompts and structured JSON schema constraints so language models return reliable, clean data payloads that feed directly into web frontends.",
      technologies: ["Prompt Design", "JSON Schema Enforcement", "Temperature Control", "Context Window Management"],
    },
    {
      title: "WhatsApp & Communication Automation",
      icon: MessageSquare,
      description: "Building direct deep-link generators and webhook triggers that forward customer orders, consultation requests, and product inquiries directly to client WhatsApp channels.",
      technologies: ["WhatsApp Business API", "Deep Link Generation", "Instant Chat Routing", "Lead Conversion"],
    },
    {
      title: "Email & Lead Capture Workflows",
      icon: Mail,
      description: "Automating server-side SMTP email dispatching via Nodemailer to alert business owners instantly upon customer form submissions with inquiry details.",
      technologies: ["Nodemailer / SMTP", "Automated Email Alerts", "Lead Form Validation", "Webhook Notification"],
    },
  ];

  return (
    <section id="ai-automation" className="relative section-padding bg-slate-100/60 border-t border-b border-slate-200">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <BrainCircuit className="h-4 w-4 text-orange-600" />
            AI & Automation Capabilities
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            AI Integration & <span className="gradient-text">Business Automation</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Enhancing core web engineering with intelligent API integrations, prompt workflows, automated messaging triggers, and lead generation routing.
          </p>
        </div>

        {/* 4 Capability Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 hover:border-orange-500/40 transition-all duration-300 bg-white/95 shadow-md shadow-slate-200/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 border border-orange-200 text-orange-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{pillar.description}</p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="block font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">
                      Key Tools & Techniques
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {pillar.technologies.map((t, i) => (
                        <span key={i} className="tech-pill bg-slate-50">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                    <CheckCircle2 className="h-4 w-4" />
                    Production Ready
                  </span>
                  <span className="text-slate-400">Business Impact</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

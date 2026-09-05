import { Server, BrainCircuit, Globe, ShoppingCart, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { services } from "../../data/portfolio";

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Server": return Server;
      case "BrainCircuit": return BrainCircuit;
      case "Globe": return Globe;
      case "ShoppingCart": return ShoppingCart;
      case "ShieldCheck": return ShieldCheck;
      case "Zap": return Zap;
      default: return Server;
    }
  };

  return (
    <section id="services" className="relative section-padding bg-slate-50/60">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="eyebrow justify-center">
            <Globe className="h-4 w-4" />
            Client Solutions
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What I Can <span className="gradient-text">Build For You</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            From initial concept to full-stack code, API integrations, automated workflows, and production cloud launch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 hover:border-blue-500/40 transition-all duration-300 group shadow-lg shadow-slate-200/50 bg-white/90"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="flex items-center gap-2 font-heading text-xs font-bold text-blue-600 group-hover:text-blue-800 transition-colors pt-3 border-t border-slate-200"
                  >
                    Discuss This Solution
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

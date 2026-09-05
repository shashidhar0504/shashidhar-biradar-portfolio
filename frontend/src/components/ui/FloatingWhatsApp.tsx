import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { profile } from "../../data/portfolio";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    "Hello Shashidhar, I visited your portfolio and would like to discuss an opportunity/project."
  );
  const whatsappUrl = `https://wa.me/${profile.whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popover Card */}
      {isOpen && (
        <div className="glass-panel w-72 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
              </div>
              <div>
                <h4 className="font-heading text-xs font-semibold text-white">Shashidhar Biradar</h4>
                <p className="text-[10px] text-emerald-400 font-mono">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
              aria-label="Close message"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="my-3 rounded-xl bg-slate-900/90 p-3 text-xs text-slate-300 border border-slate-800/80">
            <p>
              Hi there! 👋 Looking for full-stack Java development, AI integration, or client project collaboration?
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 font-heading text-xs font-semibold text-white shadow-lg transition-all hover:bg-emerald-500"
          >
            <MessageSquare className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="group relative flex items-center">
        {/* Tooltip */}
        {!isOpen && (
          <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 font-mono text-xs font-medium text-emerald-400 opacity-0 shadow-lg border border-slate-800 transition-opacity duration-200 group-hover:opacity-100">
            Chat on WhatsApp
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-glow-cyan transition-transform duration-300 hover:scale-110 active:scale-95"
          aria-label="Toggle WhatsApp chat"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6 animate-pulse" />}
        </button>
      </div>
    </div>
  );
}

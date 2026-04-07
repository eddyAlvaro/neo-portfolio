"use client";

import { m, LazyMotion, domAnimation, AnimatePresence, useReducedMotion } from "framer-motion";
import { NeonCard, NeonButton, NeonInput, NeonTextarea } from "@/shared/components/ui/neon";
import { useContactForm, useSocials } from "../application";

function TerminalPrompt({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs text-gray-600">
      <span className="text-green-400">user@neo-portfolio</span>
      <span className="text-gray-500">:</span>
      <span className="text-cyan-400">~$</span>{" "}
      <span className="text-gray-300">{children}</span>
    </p>
  );
}

export function SaveTerminal() {
  const prefersReduced = useReducedMotion();
  const { form, update, submit, status } = useContactForm();
  const socials = useSocials();

  const socialColor = {
    cyan: "border-cyan-700/50 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]",
    fuchsia: "border-fuchsia-700/50 text-fuchsia-400 hover:border-fuchsia-400 hover:shadow-[0_0_10px_rgba(232,121,249,0.3)]",
    green: "border-green-700/50 text-green-400 hover:border-green-400 hover:shadow-[0_0_10px_rgba(74,222,128,0.3)]",
  };

  return (
    <LazyMotion features={domAnimation}>
    <NeonCard glowColor="fuchsia" className="flex flex-col gap-5 h-auto lg:h-full">
      {/* Terminal header */}
      <div className="border-b border-fuchsia-900/50 pb-3">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-fuchsia-500">
          ▸ Save Terminal
        </span>
        <div className="mt-2 flex flex-col gap-0.5 px-4">
          <TerminalPrompt>initialize_contact --mode=async</TerminalPrompt>
          <TerminalPrompt>awaiting input...</TerminalPrompt>
        </div>
      </div>

      {/* Form */}
      <form
        className="flex flex-col gap-4 overflow-y-auto overflow-x-hidden px-4 pb-4 flex-1 custom-scrollbar min-h-0"
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        aria-label="Contact form"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <NeonInput
            id="contact-name"
            label="Name"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
          />
          <NeonInput
            id="contact-email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
          />
        </div>
        <NeonInput
          id="contact-subject"
          label="Subject"
          placeholder="Mission Briefing..."
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
        />
        <NeonTextarea
          id="contact-message"
          label="Message"
          placeholder="Transmit your message..."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          required
        />

        {/* Status feedback */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <m.p
              key="success"
              initial={prefersReduced ? false : { opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs font-mono text-green-400 bg-green-950/40 border border-green-800/50 rounded-lg px-3 py-2"
            >
              ✓ Message transmitted successfully. Standing by for response.
            </m.p>
          )}
          {status === "error" && (
            <m.p
              key="error"
              initial={prefersReduced ? false : { opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs font-mono text-red-400 bg-red-950/40 border border-red-800/50 rounded-lg px-3 py-2"
            >
              ✗ Transmission failed. Retry or use direct channel below.
            </m.p>
          )}
        </AnimatePresence>

        <NeonButton
          type="submit"
          variant="fuchsia"
          disabled={status === "loading" || status === "success"}
          id="contact-submit"
        >
          {status === "loading" ? "[ transmitting... ]" : "[ SEND MESSAGE ]"}
        </NeonButton>
      </form>

      {/* Social Links */}
      <div className="border-t border-fuchsia-900/40 pt-4 px-4">
        <p className="text-xs font-mono uppercase tracking-widest text-gray-600 mb-3">
          Direct Channels
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
          {socials.map((social) => (
            <m.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={prefersReduced ? {} : { scale: 1.05 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
              style={{ willChange: "transform" }}
              className={`
                flex items-center gap-2 px-3 py-2.5 rounded-lg border
                font-mono text-xs transition-all duration-300
                bg-gray-950/50 backdrop-blur-sm
                ${socialColor[social.color]}
              `}
              id={`social-${social.id}`}
              aria-label={`Visit ${social.label}`}
            >
              {/* <span className="font-bold text-sm w-5 text-center">{social.icon}</span> */}
              <span className="truncate">{social.label}</span>
            </m.a>
          ))}
        </div>
      </div>
    </NeonCard>
    </LazyMotion>
  );
}

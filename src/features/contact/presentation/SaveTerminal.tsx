"use client";

import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { NeonCard, NeonButton, NeonInput, NeonTextarea } from "@/shared/components/ui/neon";
import { useContactForm, useSocials } from "../application";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

function TerminalPrompt({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs text-subtle">
      <span className="text-neon-green">user@neo-portfolio</span>
      <span className="text-muted">:</span>
      <span className="text-neon-cyan">~$</span>{" "}
      <span className="text-text/70">{children}</span>
    </p>
  );
}

const socialColor = {
  cyan: "border-neon-cyan/30 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_10px_var(--color-neon-cyan)/20]",
  fuchsia: "border-neon-fuchsia/30 text-neon-fuchsia hover:border-neon-fuchsia hover:bg-neon-fuchsia/10 hover:shadow-[0_0_10px_var(--color-neon-fuchsia)/20]",
  green: "border-neon-green/30 text-neon-green hover:border-neon-green hover:bg-neon-green/10 hover:shadow-[0_0_10px_var(--color-neon-green)/20]",
} as const;

export function SaveTerminal() {
  const prefersReduced = useReducedMotion();
  const { form, update, submit, status } = useContactForm();
  const socials = useSocials();

  return (
    <NeonCard glowColor="fuchsia" className="flex flex-col gap-5 h-auto lg:h-full">
      {/* Terminal header */}
      <div className="border-b border-neon-fuchsia/20 pb-3">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-fuchsia">
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
              className="text-xs font-mono text-neon-green bg-neon-green/10 border border-neon-green/30 rounded-lg px-3 py-2"
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
              className="text-xs font-mono text-red-500 dark:text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2"
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
      <div className="border-t border-neon-fuchsia/20 pt-4 px-4">
        <p className="text-xs font-mono uppercase tracking-widest text-subtle mb-3">
          Direct Channels
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
          {socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.id] ?? ExternalLink;
            return (
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
                  bg-surface/60 backdrop-blur-sm
                  ${socialColor[social.color]}
                `}
                id={`social-${social.id}`}
                aria-label={`Visit ${social.label}`}
              >
                <Icon size={14} />
                <span className="truncate">{social.label}</span>
              </m.a>
            );
          })}
        </div>
      </div>
    </NeonCard>
  );
}

"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface NeonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface NeonTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const baseClass = `
  w-full bg-surface-2/70 border border-neon-cyan/20 rounded-lg px-4 py-3
  text-text font-mono text-sm placeholder:text-subtle
  focus:outline-none focus:border-neon-cyan/60 dark:focus:shadow-[0_0_12px_rgba(34,211,238,0.35)]
  transition-all duration-300 min-h-[48px]
`;

export function NeonInput({ label, className = "", ...props }: NeonInputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-xs font-mono uppercase tracking-widest text-neon-cyan">
        &gt; {label}
      </label>
      <input className={`${baseClass} ${className}`} {...props} />
    </div>
  );
}

export function NeonTextarea({ label, className = "", ...props }: NeonTextareaProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-xs font-mono uppercase tracking-widest text-neon-cyan">
        &gt; {label}
      </label>
      <textarea
        className={`${baseClass} resize-none min-h-25 ${className}`}
        {...props}
      />
    </div>
  );
}

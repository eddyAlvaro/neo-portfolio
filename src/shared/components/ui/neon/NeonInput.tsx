"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface NeonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface NeonTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const baseClass = `
  w-full bg-gray-950/60 border border-cyan-900/60 rounded-lg px-4 py-3
  text-cyan-100 font-mono text-sm placeholder-cyan-900
  focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_12px_rgba(34,211,238,0.35)]
  transition-all duration-300 min-h-[48px]
`;

export function NeonInput({ label, className = "", ...props }: NeonInputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-xs font-mono uppercase tracking-widest text-cyan-500">
        &gt; {label}
      </label>
      <input className={`${baseClass} ${className}`} {...props} />
    </div>
  );
}

export function NeonTextarea({ label, className = "", ...props }: NeonTextareaProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-xs font-mono uppercase tracking-widest text-cyan-500">
        &gt; {label}
      </label>
      <textarea
        className={`${baseClass} resize-none min-h-25 ${className}`}
        {...props}
      />
    </div>
  );
}

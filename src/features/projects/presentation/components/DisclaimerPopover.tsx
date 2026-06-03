"use client";

import { motion } from "framer-motion";
import { usePopover } from "@/shared/hooks/use-popover";

interface DisclaimerPopoverProps {
  disclaimer: string;
}

export function DisclaimerPopover({ disclaimer }: DisclaimerPopoverProps) {
  const { 
    isOpen, 
    alignmentClass, 
    containerRef, 
    triggerRef, 
    toggle 
  } = usePopover<HTMLDivElement, HTMLButtonElement>();

  return (
    <div ref={containerRef} className="relative flex items-center">
      <motion.button 
        ref={triggerRef}
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.7, 1, 0.7] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="text-neon-yellow cursor-pointer text-[12px] block outline-none focus:text-neon-yellow/70" 
        aria-label="Disclaimer"
      >
        ⚠
      </motion.button>
      <div className={`absolute top-[120%] mb-2 w-max max-w-50 p-2 bg-surface border border-neon-yellow/30 rounded-lg shadow-xl transition-all duration-200 z-50 pointer-events-none ${alignmentClass} ${
        isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-1"
      }`}>
        <p className="text-[10px] font-mono text-neon-yellow/90 italic leading-tight whitespace-normal">
          [LOG_NOTE]: {disclaimer}
        </p>
      </div>
    </div>
  );
}

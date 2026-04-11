import { useState, useRef, useEffect } from "react";

export interface PopoverConfig {
  threshold?: number;
}

export function usePopover<C extends HTMLElement = HTMLDivElement, T extends HTMLElement = HTMLElement>(config: PopoverConfig = {}) {
  const { threshold = 120 } = config;
  const [isOpen, setIsOpen] = useState(false);
  const [alignment, setAlignment] = useState<"left" | "right" | "center">("center");
  const containerRef = useRef<C>(null);
  const triggerRef = useRef<T>(null);

  const toggle = () => {
    if (!isOpen && triggerRef.current) {
      const rect = (triggerRef.current as HTMLElement).getBoundingClientRect();
      const screenWidth = window.innerWidth;
      
      if (rect.left < threshold) {
        setAlignment("left");
      } else if (screenWidth - rect.right < threshold) {
        setAlignment("right");
      } else {
        setAlignment("center");
      }
    }
    setIsOpen(!isOpen);
  };

  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        containerRef.current && 
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const alignmentClass = alignment === "left" ? "left-0" : 
                         alignment === "right" ? "right-0" : 
                         "left-1/2 -translate-x-1/2";

  return {
    isOpen,
    alignment,
    alignmentClass,
    containerRef,
    triggerRef,
    toggle,
    close,
  };
}

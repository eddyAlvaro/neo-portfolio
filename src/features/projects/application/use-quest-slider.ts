"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const AUTOPLAY_INTERVAL = 6000; // 6 s

interface UseQuestSliderOptions {
  total: number;
}

export interface UseQuestSliderReturn {
  activeIndex: number;
  direction: 1 | -1;
  isPaused: boolean;
  progress: number; // 0–100
  goNext: () => void;
  goPrev: () => void;
  goTo: (index: number) => void;
  pauseHandlers: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onFocus: () => void;
    onBlur: () => void;
    onTouchStart: () => void;
    onTouchEnd: () => void;
  };
  dragHandlers: {
    onDragStart: (e: React.PointerEvent) => void;
    onDragEnd: (e: React.PointerEvent) => void;
  };
}

export function useQuestSlider({ total }: UseQuestSliderOptions): UseQuestSliderReturn {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Tick ref so the RAF loop always reads current values
  const startTimeRef = useRef<number>(0);
  const pausedAtRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const dragStartXRef = useRef<number | null>(null);

  const advance = useCallback(
    (dir: 1 | -1 = 1) => {
      setDirection(dir);
      setActiveIndex((i) => (i + dir + total) % total);
      setProgress(0);
      startTimeRef.current = performance.now();
    },
    [total],
  );

  const goNext = useCallback(() => advance(1), [advance]);
  const goPrev = useCallback(() => advance(-1), [advance]);
  const goTo = useCallback(
    (index: number) => {
      setDirection((prev) => (index > prev ? 1 : -1));
      setActiveIndex(index);
      setProgress(0);
      startTimeRef.current = performance.now();
    },
    [],
  );

  // RAF-based progress ticker — GPU-friendly, no setState on every ms
  useEffect(() => {
    const tick = (now: number) => {
      if (!isPausedRef.current) {
        const elapsed = now - startTimeRef.current;
        const pct = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);
        setProgress(pct);

        if (elapsed >= AUTOPLAY_INTERVAL) {
          advance(1);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [advance]);

  // Sync isPaused → ref so the RAF closure reads it without stale closure
  useEffect(() => {
    isPausedRef.current = isPaused;
    if (isPaused) {
      pausedAtRef.current = performance.now();
    } else if (pausedAtRef.current !== null) {
      // Shift start time forward by how long we were paused
      startTimeRef.current += performance.now() - pausedAtRef.current;
      pausedAtRef.current = null;
    }
  }, [isPaused]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  // Swipe / drag detection
  const onDragStart = useCallback((e: React.PointerEvent) => {
    dragStartXRef.current = e.clientX;
  }, []);

  const onDragEnd = useCallback(
    (e: React.PointerEvent) => {
      if (dragStartXRef.current === null) return;
      const delta = e.clientX - dragStartXRef.current;
      dragStartXRef.current = null;
      if (Math.abs(delta) < 40) return; // dead zone
      advance(delta < 0 ? 1 : -1);
    },
    [advance],
  );

  return {
    activeIndex,
    direction,
    isPaused,
    progress,
    goNext,
    goPrev,
    goTo,
    pauseHandlers: {
      onMouseEnter: pause,
      onMouseLeave: resume,
      onFocus: pause,
      onBlur: resume,
      onTouchStart: pause,
      onTouchEnd: resume,
    },
    dragHandlers: { onDragStart, onDragEnd },
  };
}

"use client";
import { logData } from "../infrastructure";
import type { LogEntry } from "../domain";

export function useLog(): LogEntry[] {
  return logData;
}

"use client";
import { useState } from "react";
import { socialLinks, submitContactForm } from "../infrastructure";
import type { ContactForm, SocialLink } from "../domain";

export function useSocials(): SocialLink[] {
  return socialLinks;
}

export function useContactForm() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const result = await submitContactForm(form);
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return { form, update, submit, status };
}

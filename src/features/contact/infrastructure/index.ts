import type { ContactForm, SocialLink } from "../domain";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    icon: "GH",
    url: "https://github.com/eddyAlvaro",
    color: "cyan",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "LI",
    url: "https://www.linkedin.com/in/eddy-arenas/",
    color: "fuchsia",
  },
  // {
  //   id: "twitter",
  //   label: "X / Twitter",
  //   icon: "TW",
  //   url: "https://x.com",
  //   color: "cyan",
  // },
];

export async function submitContactForm(data: ContactForm): Promise<{ success: boolean }> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return { success: res.ok };
}

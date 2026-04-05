import type { SocialLink } from "../domain";

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
  {
    id: "email",
    label: "Email",
    icon: "@",
    url: "mailto:e.alvaro.arenas@gmail.com",
    color: "green",
  },
];

export async function submitContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean }> {
  // Simulate API call – replace with real endpoint
  await new Promise((resolve) => setTimeout(resolve, 1200));
  console.log("Contact form submitted:", data);
  return { success: true };
}

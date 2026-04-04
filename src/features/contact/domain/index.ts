export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  id: string;
  label: string;
  icon: string;
  url: string;
  color: "cyan" | "fuchsia" | "green";
}

export interface LogEntry {
  id: string;
  date: string;
  title: string;
  body: string;
  tag: string;
  color: "cyan" | "fuchsia" | "green" | "yellow";
}

import { localizeHref, type Locale } from "@/lib/i18n";

export const siteName = "Hermes Agent Playbook";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://hermes-agent-playbook.example.com";

export const officialLinks = [
  { label: "Hermes Agent Docs", href: "https://hermes-agent.nousresearch.com/docs" },
  { label: "Skills Hub", href: "https://hermes-agent.nousresearch.com/docs/skills" },
  { label: "GitHub", href: "https://github.com/NousResearch/hermes-agent" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function absoluteLocalizedUrl(path: string, locale: Locale) {
  return absoluteUrl(localizeHref(path, locale));
}

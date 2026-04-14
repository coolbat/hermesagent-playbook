import type { Metadata } from "next";
import "./globals.css";
import { createPageMetadata } from "@/lib/metadata";
import { getHtmlLang } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createPageMetadata({
    locale,
    title: "Hermes Agent Playbook",
    description: {
      en: "Hermes Agent quick-start and learning hub with workflow templates, setup guidance, skills context, and symptom-first troubleshooting.",
      zh: "Hermes Agent 快速上手与学习中心，包含工作流模板、配置指南、技能语境和按症状组织的排错路径。",
    },
    keywords: {
      en: [
        "Hermes Agent",
        "Hermes Agent quick start",
        "Hermes Agent tutorial",
        "Hermes Agent templates",
        "Hermes Agent troubleshooting",
        "AI workflow guide",
      ],
      zh: [
        "Hermes Agent",
        "Hermes Agent 快速上手",
        "Hermes Agent 教程",
        "Hermes Agent 模板",
        "Hermes Agent 排错",
        "AI 工作流指南",
      ],
    },
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();

  return (
    <html lang={getHtmlLang(locale)} suppressHydrationWarning>
      <head>
        <link href="/llms.txt" rel="llms" />
      </head>
      <body data-theme="light" data-lang={locale}>
        {children}
      </body>
    </html>
  );
}

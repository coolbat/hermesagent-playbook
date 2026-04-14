import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { TroubleshootTabs } from "@/components/troubleshoot-tabs";
import { JsonLd } from "@/components/json-ld";
import { troubleshootIntro, troubleshootTabs } from "@/content/troubleshoot";
import { createPageMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/i18n-server";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createPageMetadata({
    locale,
    title: {
      en: "Troubleshooting Hermes Agent",
      zh: "Hermes Agent 排错指南",
    },
    description: {
      en: "Troubleshoot Hermes Agent from symptoms first: fix bot silence, install failures, invalid credentials, and broken starter workflows.",
      zh: "从症状出发排查 Hermes Agent：机器人沉默、安装失败、凭证异常和入门工作流失效都先在这里缩小范围。",
    },
    path: "/troubleshoot",
    keywords: {
      en: [
        "Hermes Agent troubleshooting",
        "Hermes Agent bot silent",
        "Hermes Agent install failed",
        "Hermes Agent status logs health",
      ],
      zh: [
        "Hermes Agent 排错",
        "Hermes Agent 机器人沉默",
        "Hermes Agent 安装失败",
        "Hermes Agent 状态 日志 健康检查",
      ],
    },
  });
}

export default async function TroubleshootPage() {
  const locale = await getRequestLocale();

  return (
    <SiteShell active="troubleshoot" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: locale === "zh" ? "Hermes Agent 排错指南" : "Troubleshooting Hermes Agent",
            url: absoluteLocalizedUrl("/troubleshoot", locale),
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            description:
              locale === "zh"
                ? "从症状出发排查 Hermes Agent：机器人沉默、安装失败、模型凭证异常和入门工作流失效都先在这里缩小问题范围。"
                : "Troubleshoot Hermes Agent from symptoms first: recover from bot silence, install failures, invalid model credentials, and broken starter workflows.",
            isPartOf: {
              "@type": "WebSite",
              name: siteName,
              url: siteUrl,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: locale === "zh" ? "首页" : "Home",
                item: absoluteLocalizedUrl("/", locale),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: locale === "zh" ? "Troubleshoot" : "Troubleshoot",
                item: absoluteLocalizedUrl("/troubleshoot", locale),
              },
            ],
          },
        ]}
      />
      <PageHero
        className="page-hero troubleshoot-hero"
        kicker={troubleshootIntro.kicker}
        title={troubleshootIntro.title}
        summary={troubleshootIntro.summary}
        ctas={[
          {
            label: { en: "Browse symptom groups", zh: "按症状浏览" },
            href: "#troubleshoot-directory",
            variant: "primary",
          },
          {
            label: { en: "Back to Quick Start", zh: "返回 Quick Start" },
            href: "/#quick-start",
            variant: "secondary",
          },
        ]}
      />

      <TroubleshootTabs locale={locale} tabs={troubleshootTabs} />
    </SiteShell>
  );
}

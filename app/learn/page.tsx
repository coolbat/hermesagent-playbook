import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { JsonLd } from "@/components/json-ld";
import { LearnTabs } from "@/components/learn-tabs";
import { learnIntro, learnTabs } from "@/content/learn";
import { createPageMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/i18n-server";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createPageMetadata({
    locale,
    title: {
      en: "Learn Hub for Hermes Agent",
      zh: "Hermes Agent Learn 资源中心",
    },
    description: {
      en: "Use the Learn hub for Hermes Agent foundations, setup strategy, workflow design, Chinese ecosystem guidance, advanced troubleshooting, and practical usage tips.",
      zh: "在 Learn 中继续补齐 Hermes Agent 基础认知、setup 策略、工作流设计、中文生态适配、进阶排错和日常使用技巧。",
    },
    path: "/learn",
    keywords: {
      en: [
        "Hermes Agent learn hub",
        "Hermes Agent setup guide",
        "Hermes Agent workflow design",
        "Hermes Agent Chinese ecosystem",
      ],
      zh: [
        "Hermes Agent Learn",
        "Hermes Agent setup 指南",
        "Hermes Agent 工作流设计",
        "Hermes Agent 中文生态",
      ],
    },
  });
}

export default async function LearnPage() {
  const locale = await getRequestLocale();

  return (
    <SiteShell active="learn" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: locale === "zh" ? "Hermes Agent Learn 资源中心" : "Learn Hub for Hermes Agent",
            url: absoluteLocalizedUrl("/learn", locale),
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            description:
              locale === "zh"
                ? "在 Learn 中继续补齐更深入的 Hermes Agent 基础认知、setup 策略、工作流设计、中文生态适配、进阶排错和日常使用技巧。"
                : "Use the Learn hub for deeper Hermes Agent foundations, setup strategy, workflow design, Chinese ecosystem guidance, advanced troubleshooting, and practical usage tips.",
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
                name: locale === "zh" ? "Learn" : "Learn",
                item: absoluteLocalizedUrl("/learn", locale),
              },
            ],
          },
        ]}
      />
      <PageHero
        className="page-hero learn-hero"
        kicker={learnIntro.kicker}
        title={learnIntro.title}
        summary={learnIntro.summary}
        ctas={learnIntro.ctas}
      />
      <LearnTabs locale={locale} tabs={learnTabs} />
    </SiteShell>
  );
}

import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { SkillsTabs } from "@/components/skills-tabs";
import { JsonLd } from "@/components/json-ld";
import { skillTabs, skillsIntro } from "@/content/skills";
import { createPageMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/i18n-server";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createPageMetadata({
    locale,
    title: {
      en: "Hermes Agent Skills Guide",
      zh: "Hermes Agent 技能指南",
    },
    description: {
      en: "Understand Hermes Agent skills through built-in essentials, Hub-installed options, coding delegation, and platform utilities.",
      zh: "从内置核心技能、Hub 安装选项、编码委派能力和平台工具四个角度理解 Hermes Agent 技能体系。",
    },
    path: "/skills",
    keywords: {
      en: [
        "Hermes Agent skills",
        "Hermes Agent skills hub",
        "Hermes Agent built-in skills",
        "Hermes Agent skill install",
      ],
      zh: [
        "Hermes Agent 技能",
        "Hermes Agent 技能中心",
        "Hermes Agent 内置技能",
        "Hermes Agent 技能安装",
      ],
    },
  });
}

export default async function SkillsPage() {
  const locale = await getRequestLocale();

  return (
    <SiteShell active="skills" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: locale === "zh" ? "Hermes Agent 技能指南" : "Hermes Agent Skills Guide",
            url: absoluteLocalizedUrl("/skills", locale),
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            description:
              locale === "zh"
                ? "从内置核心技能、Hub 安装技能、编码委派和平台工具四个角度理解 Hermes Agent 技能体系。"
                : "Understand Hermes Agent skills through built-in essentials, Hub-installed options, coding delegation, and platform utilities.",
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
                name: "Skills",
                item: absoluteLocalizedUrl("/skills", locale),
              },
            ],
          },
        ]}
      />
      <PageHero
        className="page-hero skills-hero"
        kicker={skillsIntro.kicker}
        title={skillsIntro.title}
        summary={skillsIntro.summary}
        ctas={[
          {
            label: { en: "Browse by task category", zh: "按任务类别浏览" },
            href: "#skills-directory",
            variant: "primary",
          },
          {
            label: { en: "Read safety guide first", zh: "先读安全指南" },
            href: "/learn/choose-safer-starter-skills",
            variant: "secondary",
          },
        ]}
      />

      <div id="skills-directory">
        <SkillsTabs locale={locale} tabs={skillTabs} />
      </div>
    </SiteShell>
  );
}

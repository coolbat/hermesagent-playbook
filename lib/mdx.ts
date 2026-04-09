import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx";
import type { Locale } from "@/lib/i18n";

type MdxFrontmatter = Record<string, unknown>;
type MdxSection =
  | "pages"
  | "learn"
  | "quick-start"
  | "template-library"
  | "troubleshoot-library";

export type LearnArticleFrontmatter = {
  title: string;
  summary: string;
  readingTime?: string;
};

export type QuickStartArticleFrontmatter = {
  title: string;
  summary: string;
  readingTime?: string;
};

export type TemplateArticleFrontmatter = {
  title: string;
  summary: string;
  readingTime?: string;
};

export type TroubleshootArticleFrontmatter = {
  title: string;
  summary: string;
  readingTime?: string;
};

function getMdxPath(section: MdxSection, locale: Locale, slug: string) {
  return path.join(process.cwd(), "content", section, locale, `${slug}.mdx`);
}

async function renderMdx<TFrontmatter extends MdxFrontmatter>(
  section: MdxSection,
  slug: string,
  locale: Locale,
) {
  const filePath = getMdxPath(section, locale, slug);

  let raw: string;

  try {
    raw = await fs.readFile(filePath, "utf8");
  } catch (error) {
    throw new Error(
      `Missing MDX content for section "${section}", slug "${slug}", locale "${locale}" at ${filePath}`,
      { cause: error },
    );
  }

  const { content: mdxBody, data: frontmatter } = matter(raw);

  const { default: MDXContent } = await evaluate(mdxBody, {
    ...(runtime as Parameters<typeof evaluate>[1]),
    remarkPlugins: [remarkGfm],
  });

  const content = MDXContent({ components: mdxComponents });

  return { content, frontmatter: frontmatter as TFrontmatter };
}

export async function renderPageMdx(slug: string, locale: Locale) {
  return renderMdx<MdxFrontmatter>("pages", slug, locale);
}

export async function renderLearnArticleMdx(slug: string, locale: Locale) {
  return renderMdx<LearnArticleFrontmatter>("learn", slug, locale);
}

export async function renderQuickStartArticleMdx(slug: string, locale: Locale) {
  return renderMdx<QuickStartArticleFrontmatter>("quick-start", slug, locale);
}

export async function renderTemplateArticleMdx(slug: string, locale: Locale) {
  return renderMdx<TemplateArticleFrontmatter>("template-library", slug, locale);
}

export async function renderTroubleshootArticleMdx(slug: string, locale: Locale) {
  return renderMdx<TroubleshootArticleFrontmatter>("troubleshoot-library", slug, locale);
}

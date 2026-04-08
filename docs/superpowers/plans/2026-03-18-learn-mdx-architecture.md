# Learn MDX Architecture Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Learn into a real MDX-backed tutorial system with locale-aware article files, dynamic article routes, and tutorial cards that deep-link into those pages.

**Architecture:** Keep the Learn hub page as a tabbed index, but give each tutorial card a stable article slug. Store tutorial metadata in `content/learn.ts`, store article bodies in `content/learn/<locale>/<slug>.mdx`, extend the MDX loader to support learn articles, and add a single `[slug]` route under `/learn` that renders localized article content with metadata and structured data.

**Tech Stack:** Next.js App Router, React Server Components, `next-mdx-remote`, filesystem MDX content

---

## Chunk 1: Data and MDX Loading

### Task 1: Add article slugs to Learn cards

**Files:**
- Modify: `content/learn.ts`

- [ ] Add a `slug` field to `LearnTutorialCard`
- [ ] Ensure all tutorial cards have unique slugs
- [ ] Point existing card CTAs to the future `/learn/<slug>` route

### Task 2: Extend the MDX loader for Learn articles

**Files:**
- Modify: `lib/mdx.ts`

- [ ] Add a generic MDX path resolver that supports both `pages` and `learn`
- [ ] Add a `renderLearnArticleMdx(slug, locale)` function
- [ ] Type the expected frontmatter for learn articles

## Chunk 2: Learn Article Routes

### Task 3: Add a learn article lookup helper

**Files:**
- Create: `lib/learn.ts`

- [ ] Add helpers to flatten all Learn tutorials into a slug-indexed list
- [ ] Add a `getLearnTutorialBySlug` helper for page rendering and metadata
- [ ] Add a `getAllLearnTutorialSlugs` helper for static params and sitemap

### Task 4: Create the dynamic Learn article page

**Files:**
- Create: `app/learn/[slug]/page.tsx`

- [ ] Add `generateStaticParams`
- [ ] Add locale-aware `generateMetadata`
- [ ] Render article hero, breadcrumbs, JSON-LD, and MDX prose
- [ ] Return `notFound()` for unknown slugs

## Chunk 3: Content, Discovery, and Verification

### Task 5: Create localized MDX article files

**Files:**
- Create: `content/learn/en/*.mdx`
- Create: `content/learn/zh/*.mdx`

- [ ] Create a localized MDX file for each tutorial slug currently shown in Learn
- [ ] Include frontmatter for title, summary, and optional reading time
- [ ] Use simulated but credible tutorial content for now

### Task 6: Surface the new routes in discovery files

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `app/llms.txt/route.ts`

- [ ] Add Learn article URLs to the sitemap
- [ ] Add Learn article references to `llms.txt`

### Task 7: Verify

**Files:**
- Verify only

- [ ] Run `npm run build`
- [ ] Restart `npm run dev` cleanly after build
- [ ] Spot-check `/en/learn`, `/en/learn/<slug>`, `/zh/learn/<slug>`

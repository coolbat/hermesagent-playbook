# Quick Start MDX Architecture Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move Quick Start long-form tutorial content into MDX while keeping the homepage as a structured 5-step overview that links to dedicated detail pages.

**Architecture:** Keep `content/site.ts` as the structured source for homepage cards, step order, summaries, and CTA labels. Add a dedicated `quick-start` MDX content section plus a small index/helper layer so each step gets a localized detail page with metadata, JSON-LD, neighboring navigation, and cross-links into Learn/Templates/Troubleshoot.

**Tech Stack:** Next.js App Router, localized routes, `next-mdx-remote/rsc`, TypeScript, shared detail-page CSS and JSON-LD helpers.

---

## Chunk 1: Content and data plumbing

### Task 1: Extend Quick Start data model with slugs and article-ready metadata

**Files:**
- Modify: `content/site.ts`

- [ ] Add `slug` to `QuickStartEntry` and each of the 5 entries.
- [ ] Add any small structured fields needed by the detail pages, limited to what the homepage or metadata should own.
- [ ] Keep homepage cards lightweight; do not move long-form body copy into TS.

### Task 2: Add Quick Start library helper

**Files:**
- Create: `lib/quick-start.ts`
- Reference: `lib/learn.ts`
- Reference: `lib/templates.ts`
- Reference: `lib/troubleshoot.ts`

- [ ] Implement `getAllQuickStartEntries()`.
- [ ] Implement `getQuickStartEntryBySlug(slug)`.
- [ ] Implement `getAllQuickStartSlugs()`.
- [ ] Implement `getQuickStartNeighbors(slug)`.
- [ ] Implement `getQuickStartPosition(slug)`.
- [ ] Implement `getRelatedQuickStartEntries(slug, limit)`.

### Task 3: Extend shared MDX renderer for Quick Start

**Files:**
- Modify: `lib/mdx.ts`

- [ ] Add `quick-start` as a valid MDX section.
- [ ] Add a `QuickStartArticleFrontmatter` type.
- [ ] Export `renderQuickStartArticleMdx(slug, locale)`.

### Task 4: Add localized Quick Start MDX content

**Files:**
- Create: `content/quick-start/en/*.mdx`
- Create: `content/quick-start/zh/*.mdx`

- [ ] Create 5 English MDX files matching the Quick Start slugs.
- [ ] Create 5 Chinese MDX files matching the Quick Start slugs.
- [ ] Use publishable starter structure: intro, checklist, what to verify, common mistakes, and next step.
- [ ] Keep syntax conservative; prefer Markdown over custom JSX unless already supported by the MDX component map.

## Chunk 2: Routing and page rendering

### Task 5: Build localized Quick Start detail route

**Files:**
- Create: `app/quick-start/[slug]/page.tsx`
- Reference: `app/learn/[slug]/page.tsx`
- Reference: `app/templates/[slug]/page.tsx`
- Reference: `app/troubleshoot/[slug]/page.tsx`

- [ ] Implement `generateMetadata()` using structured data from `content/site.ts`.
- [ ] Render breadcrumb JSON-LD and WebPage JSON-LD.
- [ ] Render the shared detail-page shell with hero, reading panel, sidebar, next/previous navigation, and related cards.
- [ ] Reuse the shared detail classes already established in `app/globals.css`.
- [ ] Add a visible CTA back to `/#quick-start`.

### Task 6: Add cross-resource recommendations for Quick Start

**Files:**
- Modify: `lib/cross-links.ts`
- Modify: `app/quick-start/[slug]/page.tsx`

- [ ] Add a `getQuickStartCrossLinks(slug)` helper that maps each Quick Start step to one Learn article, one Template, and/or one Troubleshoot guide as appropriate.
- [ ] Render these cards in the detail page using `CrossResourceLinks`.

## Chunk 3: Homepage integration and discovery

### Task 7: Route homepage Quick Start cards into detail pages

**Files:**
- Modify: `components/quick-start-card.tsx`
- Modify: `content/site.ts`

- [ ] Keep the homepage grid and summaries intact.
- [ ] Change each card CTA to point at `/quick-start/[slug]`.
- [ ] Keep card IDs for in-page anchor navigation if still useful.

### Task 8: Include Quick Start detail pages in discovery surfaces

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `app/llms.txt/route.ts`
- Optionally modify: `app/page.tsx`

- [ ] Add Quick Start article routes to the sitemap.
- [ ] Add Quick Start article routes to `llms.txt`.
- [ ] Optionally enrich homepage JSON-LD if a Quick Start-specific connection is useful.

## Chunk 4: Verification

### Task 9: Verify production build and preview

**Files:**
- No code changes required

- [ ] Run `npm run build`.
- [ ] Restart production preview with `npm run start`.
- [ ] Manually spot-check:
  - `/en/quick-start/what-is-hermes`
  - `/zh/quick-start/what-is-hermes`
  - homepage `#quick-start` card CTAs
  - sitemap and `llms.txt` output paths


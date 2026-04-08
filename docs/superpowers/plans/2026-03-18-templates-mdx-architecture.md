# Templates MDX Architecture Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Templates into a real directory plus detail-page system, with each template card linking to a localized MDX detail page.

**Architecture:** Reuse the Learn article pattern: keep category labels and card metadata in `content/templates.ts`, add a `lib/templates.ts` helper layer for slug lookup, and create a dedicated MDX content directory for template bodies. Each template gets a localized MDX document with frontmatter, while the route in `app/templates/[slug]/page.tsx` handles metadata, JSON-LD, breadcrumb, and a reading-oriented template detail layout.

**Tech Stack:** Next.js App Router, localized content model, next-mdx-remote/rsc, existing page shell and JSON-LD components

---

## Chunk 1: Template Content Architecture

### Task 1: Expand template metadata for detail pages

**Files:**
- Modify: `content/templates.ts`
- Create: `lib/templates.ts`

- [ ] Keep category tabs for the directory page
- [ ] Ensure every template card points to its own detail route
- [ ] Add helper functions for slug lookup, neighbors, related templates, and category position

### Task 2: Add MDX support for template articles

**Files:**
- Modify: `lib/mdx.ts`
- Create: `content/template-library/en/*.mdx`
- Create: `content/template-library/zh/*.mdx`

- [ ] Add a template-library MDX section to the shared loader
- [ ] Define frontmatter for template detail pages
- [ ] Add localized MDX bodies for every current template

## Chunk 2: Template Detail Route

### Task 3: Create the Templates detail page

**Files:**
- Create: `app/templates/[slug]/page.tsx`

- [ ] Reuse the existing shell, metadata, and JSON-LD patterns
- [ ] Add hero, breadcrumb, body prose, sidebar, previous/next, and related templates
- [ ] Keep links locale-aware

### Task 4: Connect cards and sitemap

**Files:**
- Modify: `components/template-card.tsx`
- Modify: `app/sitemap.ts`
- Modify: `app/llms.txt/route.ts`

- [ ] Make template cards consistently point to detail pages
- [ ] Include template detail routes in sitemap and llms inventory
- [ ] Preserve homepage preview compatibility

## Chunk 3: Styling and Verification

### Task 5: Add template detail styles

**Files:**
- Modify: `app/globals.css`

- [ ] Add article-style layout and sidebar styles for Templates detail pages
- [ ] Keep card and detail views visually consistent with Learn
- [ ] Add responsive rules for tablet/mobile

### Task 6: Verify

**Files:**
- Verify only

- [ ] Run `npm run build`
- [ ] Restart `npm run start` for production preview
- [ ] Manually spot-check the Templates directory and at least one detail page in Chinese and English

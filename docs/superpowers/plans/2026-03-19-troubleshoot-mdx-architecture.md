# Troubleshoot MDX Architecture Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Troubleshoot into a real symptom-first directory plus detail-page system, with each symptom card linking to a localized MDX troubleshooting guide.

**Architecture:** Reuse the Learn/Templates detail-page pattern: keep category labels and troubleshooting card metadata in `content/troubleshoot.ts`, add a `lib/troubleshoot.ts` helper layer for slug lookup, and create a dedicated MDX content directory for troubleshooting bodies. Each symptom entry gets a localized MDX document with frontmatter, while `app/troubleshoot/[slug]/page.tsx` handles metadata, JSON-LD, breadcrumb, recovery-focused hero, article body, sidebar, and related guides.

**Tech Stack:** Next.js App Router, localized content model, next-mdx-remote/rsc, existing page shell and JSON-LD components

---

## Chunk 1: Troubleshoot Content Architecture

### Task 1: Expand troubleshoot metadata for detail pages

**Files:**
- Modify: `content/troubleshoot.ts`
- Create: `lib/troubleshoot.ts`

- [ ] Keep symptom tabs for the directory page
- [ ] Ensure every troubleshooting card has a stable slug and points to its own detail route
- [ ] Add helper functions for slug lookup, neighbors, related guides, and symptom-group position

### Task 2: Add MDX support for troubleshoot guides

**Files:**
- Modify: `lib/mdx.ts`
- Create: `content/troubleshoot-library/en/*.mdx`
- Create: `content/troubleshoot-library/zh/*.mdx`

- [ ] Add a troubleshoot-library MDX section to the shared loader
- [ ] Define frontmatter for troubleshooting detail pages
- [ ] Add localized MDX bodies for every current troubleshooting guide

## Chunk 2: Troubleshoot Detail Route

### Task 3: Create the Troubleshoot detail page

**Files:**
- Create: `app/troubleshoot/[slug]/page.tsx`

- [ ] Reuse the existing shell, metadata, and JSON-LD patterns
- [ ] Add hero, breadcrumb, body prose, sidebar, previous/next, and related troubleshooting guides
- [ ] Keep links locale-aware and recovery-oriented

### Task 4: Connect cards and site discovery

**Files:**
- Modify: `components/troubleshoot-card.tsx`
- Modify: `app/sitemap.ts`
- Modify: `app/llms.txt/route.ts`

- [ ] Make troubleshoot cards consistently point to detail pages
- [ ] Include troubleshoot detail routes in sitemap and llms inventory
- [ ] Preserve the symptom-first directory layout

## Chunk 3: Styling and Verification

### Task 5: Add troubleshoot detail styles

**Files:**
- Modify: `app/globals.css`

- [ ] Add article-style layout and sidebar styles for Troubleshoot detail pages
- [ ] Keep symptom cards and detail views visually consistent with the site
- [ ] Add responsive rules for tablet/mobile

### Task 6: Verify

**Files:**
- Verify only

- [ ] Run `npm run build`
- [ ] Restart `npm run start` for production preview
- [ ] Manually spot-check the Troubleshoot directory and at least one detail page in Chinese and English

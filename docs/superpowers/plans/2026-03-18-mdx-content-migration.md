# MDX Content Migration Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the four trust/content pages (`About`, `Editorial`, `Privacy`, `Terms`) from inline TSX copy blocks to locale-aware MDX content files while keeping metadata and page shells in TypeScript.

**Architecture:** Keep structured, UI-heavy pages on the existing `content/*.ts` data model. Introduce a minimal MDX runtime that loads locale-specific files from `content/pages/<locale>/`, compiles them on the server, and renders them through a shared prose wrapper plus a small set of reusable MDX components.

**Tech Stack:** Next.js App Router, React Server Components, `next-mdx-remote`, filesystem-based MDX content

---

## Chunk 1: MDX Runtime

### Task 1: Add MDX dependencies

**Files:**
- Modify: `package.json`

- [ ] Install `next-mdx-remote` and `remark-gfm`
- [ ] Verify `package.json` records the new dependencies

### Task 2: Create locale-aware MDX loader

**Files:**
- Create: `lib/mdx.ts`

- [ ] Add a server-only loader that reads `content/pages/<locale>/<slug>.mdx`
- [ ] Compile MDX with `next-mdx-remote/rsc`
- [ ] Expose a function that returns rendered content for a page slug and locale
- [ ] Fail loudly with a clear error if a content file is missing

### Task 3: Create shared MDX components

**Files:**
- Create: `components/mdx.tsx`

- [ ] Define the default tag mappings used by trust pages
- [ ] Add minimal custom components for `Callout`, `Figure`, and `VideoEmbed`
- [ ] Keep the component surface intentionally small for this first migration

## Chunk 2: Trust Page Migration

### Task 4: Add MDX source files

**Files:**
- Create: `content/pages/en/about.mdx`
- Create: `content/pages/zh/about.mdx`
- Create: `content/pages/en/editorial.mdx`
- Create: `content/pages/zh/editorial.mdx`
- Create: `content/pages/en/privacy.mdx`
- Create: `content/pages/zh/privacy.mdx`
- Create: `content/pages/en/terms.mdx`
- Create: `content/pages/zh/terms.mdx`

- [ ] Move the existing page body copy into MDX files
- [ ] Preserve the current meaning in both locales
- [ ] Use semantic Markdown structure so headings remain SEO-friendly

### Task 5: Convert the four pages to render MDX bodies

**Files:**
- Modify: `app/about/page.tsx`
- Modify: `app/editorial/page.tsx`
- Modify: `app/privacy/page.tsx`
- Modify: `app/terms/page.tsx`

- [ ] Keep metadata, JSON-LD, and hero configuration in TS
- [ ] Replace inline `CopyPair` body sections with shared MDX rendering
- [ ] Ensure each page still resolves content from the current request locale

## Chunk 3: Presentation and Verification

### Task 6: Add shared prose styles for MDX content

**Files:**
- Modify: `app/globals.css`

- [ ] Add a page prose wrapper style for headings, paragraphs, lists, and callouts
- [ ] Match the site’s existing card/callout visual language
- [ ] Keep styles compatible with both light and dark themes

### Task 7: Verify the migration end to end

**Files:**
- Verify only

- [ ] Run `npm run build`
- [ ] Restart `npm run dev` cleanly after build verification
- [ ] Manually spot-check `/en/about`, `/zh/about`, `/en/privacy`, `/zh/terms`

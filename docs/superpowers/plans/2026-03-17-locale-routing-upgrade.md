# Locale Routing Upgrade Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the site from cookie-only language switching to URL-prefixed locale routing with `/en` as the default public entry and optional Chinese-language suggestion for Chinese browser users.

**Architecture:** Keep the existing App Router pages in place and add locale-prefixed public URLs through middleware rewrites plus locale-aware helpers. Resolve the active locale from the routed prefix first, then keep metadata, links, sitemap, and language switching aligned with that locale so the site becomes SEO-friendly and extensible to more languages later.

**Tech Stack:** Next.js App Router, middleware rewrites/redirects, TypeScript, existing localized content model

---

### Task 1: Add locale routing foundation

**Files:**
- Create: `middleware.ts`
- Modify: `lib/i18n.ts`
- Modify: `lib/i18n-server.ts`

- [ ] Add locale path helpers for prefix detection, path stripping, and internal-link localization.
- [ ] Resolve request locale from middleware header first, then fall back to cookie/default locale.
- [ ] Add middleware rules:
  - `/` redirects to `/en`
  - unprefixed content routes redirect to `/en/...`
  - `/en/...` and `/zh/...` rewrite internally to existing route files
  - response keeps locale cookie in sync

### Task 2: Make links and navigation locale-aware

**Files:**
- Create: `components/localized-link.tsx`
- Modify: `components/site-shell.tsx`
- Modify: `components/site-footer.tsx`
- Modify: `components/page-hero.tsx`
- Modify: `components/section-heading.tsx`
- Modify: `components/quick-start-card.tsx`
- Modify: `components/template-card.tsx`
- Modify: `components/troubleshoot-card.tsx`
- Modify: `app/learn/page.tsx`

- [ ] Create a shared locale-aware link component for internal paths while leaving external URLs untouched.
- [ ] Switch primary nav, footer links, CTAs, and in-page route links to locale-aware URLs.
- [ ] Preserve hash links on the current page and prefix mixed routes like `/#quick-start` and `/learn#setup`.

### Task 3: Align metadata and discovery with locale URLs

**Files:**
- Modify: `lib/metadata.ts`
- Modify: `lib/site.ts`
- Modify: `app/sitemap.ts`
- Modify: `app/llms.txt/route.ts`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/learn/page.tsx`
- Modify: `app/templates/page.tsx`
- Modify: `app/troubleshoot/page.tsx`
- Modify: `app/about/page.tsx`
- Modify: `app/privacy/page.tsx`
- Modify: `app/editorial/page.tsx`
- Modify: `app/terms/page.tsx`

- [ ] Generate canonical URLs using `/en/...` or `/zh/...` based on the active locale.
- [ ] Add language alternates so crawlers can discover both locale versions.
- [ ] Expand sitemap entries to include both locale variants for all public pages.
- [ ] Update llms.txt key page links to use canonical locale-prefixed URLs.

### Task 4: Replace cookie refresh language switching with route switching

**Files:**
- Modify: `components/preferences.tsx`

- [ ] Update language switching to navigate to the same path in the other locale instead of `router.refresh()`.
- [ ] Keep storing explicit preference in cookie/localStorage for future entry decisions and hint suppression.
- [ ] Preserve theme behavior unchanged.

### Task 5: Add browser-language suggestion and verify

**Files:**
- Create: `components/locale-suggestion.tsx`
- Modify: `components/site-shell.tsx`
- Modify: `app/globals.css`

- [ ] Show a lightweight “Switch to Chinese?” suggestion only on English pages when the browser prefers Chinese and the user has not already chosen a language explicitly.
- [ ] Allow dismissing the suggestion and remembering that choice locally.
- [ ] Verify with `npm run build`, then restart `npm run dev` cleanly and test `/`, `/en`, `/zh`, and cross-page language switching.

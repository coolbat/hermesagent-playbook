# OpenClaw101 Home Quick Start MVP Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the site so the homepage is the primary SEO and onboarding entry, add a mixed-format `Quick Start` section, and convert `Learn` into a deeper resource hub.

**Architecture:** Keep the app static and App Router based. Move homepage, learn, templates, and troubleshoot copy into dedicated typed content modules, then rebuild the homepage around `Hero -> Quick Start -> Preview Sections`. Preserve the existing theme and bilingual preference system while tightening navigation, content hierarchy, and SEO metadata.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, CSS via `app/globals.css`

---

## Spec Reference

- `docs/superpowers/specs/2026-03-16-home-learn-ia-design.md`

## Scope

This plan covers one cohesive slice:

- homepage information architecture rewrite
- homepage `Quick Start` implementation
- `Learn` page repositioning
- homepage preview alignment for `Templates` and `Troubleshoot`
- page-level metadata and layout polish needed to support the new structure

It does not cover:

- lesson detail pages
- template detail pages
- advanced search or filtering
- CMS or editing workflows

## File Map

### Existing files to modify

- `app/layout.tsx`
- `app/globals.css`
- `app/page.tsx`
- `app/learn/page.tsx`
- `app/templates/page.tsx`
- `app/troubleshoot/page.tsx`
- `components/content.tsx`
- `components/site-shell.tsx`
- `components/preferences.tsx`

### New files to create

- `content/site.ts`
- `content/learn.ts`
- `content/templates.ts`
- `content/troubleshoot.ts`
- `components/page-hero.tsx`
- `components/section-heading.tsx`
- `components/quick-start-card.tsx`
- `components/template-card.tsx`
- `components/troubleshoot-card.tsx`
- `components/checklist-list.tsx`
- `lib/metadata.ts`

### Verification commands

- `npm run build`
- `npm run dev`

## Chunk 1: Create Shared Content Sources

### Task 1: Add typed content modules for homepage and support pages

**Files:**
- Create: `content/site.ts`
- Create: `content/learn.ts`
- Create: `content/templates.ts`
- Create: `content/troubleshoot.ts`

- [ ] Define content shapes for homepage hero, quick start cards, FAQ items, resource previews, templates, and troubleshooting entries.
- [ ] Store bilingual content as predictable `en` / `zh` values rather than duplicating large JSX blocks in route files.
- [ ] Add the approved `Quick Start` short-form UI copy to `content/site.ts`.
- [ ] Add the revised `Learn` resource-hub content model to `content/learn.ts`.
- [ ] Add starter-library and symptom-first support content to the templates and troubleshoot modules.
- [ ] Run `npm run build` after content modules are wired into the pages.

### Task 2: Keep bilingual rendering readable and maintainable

**Files:**
- Modify: `components/content.tsx`
- Modify: `content/site.ts`
- Modify: `content/learn.ts`
- Modify: `content/templates.ts`
- Modify: `content/troubleshoot.ts`

- [ ] Confirm one consistent bilingual pattern for short strings, summaries, bullets, and CTA labels.
- [ ] Update helper types or rendering utilities only as needed so route files can stay data-driven.
- [ ] Avoid embedding long fragments of JSX in content modules unless the component API truly requires it.
- [ ] Run `npm run build` and confirm English and Chinese content still render correctly.

## Chunk 2: Add Shared UI Primitives

### Task 3: Create shared hero and section-heading components

**Files:**
- Create: `components/page-hero.tsx`
- Create: `components/section-heading.tsx`
- Modify: `app/page.tsx`
- Modify: `app/learn/page.tsx`
- Modify: `app/templates/page.tsx`
- Modify: `app/troubleshoot/page.tsx`

- [ ] Create a `PageHero` component that supports kicker, title, summary, CTA row, and optional side content.
- [ ] Create a `SectionHeading` component for repeated title plus supporting copy layouts.
- [ ] Replace duplicated hero and section-intro markup across route files with the new components.
- [ ] Keep differences configurable through props instead of branching component logic by page.
- [ ] Run `npm run build` and verify the shared components compile cleanly.

### Task 4: Create reusable cards for Quick Start, Templates, and Troubleshoot

**Files:**
- Create: `components/quick-start-card.tsx`
- Create: `components/template-card.tsx`
- Create: `components/troubleshoot-card.tsx`
- Create: `components/checklist-list.tsx`
- Modify: `app/page.tsx`
- Modify: `app/templates/page.tsx`
- Modify: `app/troubleshoot/page.tsx`

- [ ] Build a dedicated `QuickStartCard` for title, summary, bullets, and CTA.
- [ ] Extract repeated template card markup into `TemplateCard`.
- [ ] Extract repeated troubleshooting issue or check markup into `TroubleshootCard` and `ChecklistList`.
- [ ] Keep components generic enough for later detail-page expansion, but do not build unused abstraction.
- [ ] Run `npm run build` and verify no regressions in any route file using these cards.

## Chunk 3: Rebuild the Homepage Around Quick Start

### Task 5: Replace the homepage structure with the new information architecture

**Files:**
- Modify: `app/page.tsx`
- Modify: `content/site.ts`

- [ ] Rebuild the homepage order to `Hero -> Quick Start -> Learn Preview -> Templates Preview -> Troubleshoot Preview -> FAQ`.
- [ ] Remove or downgrade the old "choose your path" block if it competes with the new Quick Start-first structure.
- [ ] Ensure the hero introduces OpenClaw clearly for beginner-intent SEO and routes users into `#quick-start`.
- [ ] Add enough explanatory copy below the hero to support the homepage's search-intent role without making it feel like a long article.
- [ ] Run `npm run build` after the homepage restructure.

### Task 6: Implement the homepage Quick Start section

**Files:**
- Modify: `app/page.tsx`
- Modify: `content/site.ts`
- Modify: `app/globals.css`

- [ ] Add a `Quick Start` section anchored with a stable `id`, such as `quick-start`.
- [ ] Render the five approved cards: `What Is OpenClaw`, `Deploy / Install`, `Connect a Chat Channel`, `Run a Starter Workflow`, `Basic Troubleshooting`.
- [ ] Use the approved short-form bilingual UI copy for each card.
- [ ] Make the section readable on mobile and desktop without creating excessive scroll friction or card density.
- [ ] Run `npm run build`, then inspect the homepage in `npm run dev` at narrow mobile and desktop widths.

## Chunk 4: Adjust Navigation and Page Positioning

### Task 7: Add the highlighted Quick Start action in the shell

**Files:**
- Modify: `components/site-shell.tsx`
- Modify: `app/globals.css`
- Modify: `components/preferences.tsx`

- [ ] Add a visually distinct `Quick Start` button in the header that links to `/#quick-start`.
- [ ] Keep `Learn`, `Templates`, and `Troubleshoot` as the normal top-level navigation items.
- [ ] Ensure the new CTA works from every page and remains understandable in both language modes.
- [ ] Audit spacing, focus states, and responsive behavior so the header does not collapse awkwardly on small screens.
- [ ] Run `npm run build` and manually verify header behavior in `npm run dev`.

### Task 8: Reposition Learn as the resource hub

**Files:**
- Modify: `app/learn/page.tsx`
- Modify: `content/learn.ts`

- [ ] Remove the old onboarding-style framing that repeats homepage responsibilities.
- [ ] Rewrite the page intro so it explains `Learn` as a deeper resource hub.
- [ ] Organize content into topic or collection groups such as Foundations, Setup, Skills and Workflow Design, Use Cases, Chinese Ecosystem, and Advanced Troubleshooting.
- [ ] Preserve clear exits toward Templates and Troubleshoot where they help the user continue.
- [ ] Run `npm run build` and visually inspect the Learn page in `npm run dev`.

## Chunk 5: Align Support Pages With the New Homepage

### Task 9: Make Templates support the starter-workflow path

**Files:**
- Modify: `app/templates/page.tsx`
- Modify: `content/templates.ts`

- [ ] Reframe the page around starter workflows and scenario-based discovery.
- [ ] Remove fake advanced filters or search controls that imply unsupported behavior.
- [ ] Keep metadata useful and scannable: difficulty, time, risk, tags, and channels where relevant.
- [ ] Ensure at least one featured starter template aligns with the homepage Quick Start recommendation.
- [ ] Run `npm run build` and visually inspect template card consistency.

### Task 10: Make Troubleshoot support the first-run recovery path

**Files:**
- Modify: `app/troubleshoot/page.tsx`
- Modify: `content/troubleshoot.ts`

- [ ] Tighten the page around symptom-first checks for first-run problems.
- [ ] Keep quick-check commands visible and easy to scan.
- [ ] Add routing cues back to homepage Quick Start, Learn, or Templates where appropriate.
- [ ] Remove UI affordances that imply features that do not exist yet.
- [ ] Run `npm run build` and manually inspect command readability and section scanability.

## Chunk 6: Metadata and Launch Polish

### Task 11: Update page-level metadata for the new structure

**Files:**
- Modify: `app/layout.tsx`
- Create: `lib/metadata.ts`
- Modify: `app/page.tsx`
- Modify: `app/learn/page.tsx`
- Modify: `app/templates/page.tsx`
- Modify: `app/troubleshoot/page.tsx`

- [ ] Add reusable metadata helpers for titles, descriptions, and default Open Graph values.
- [ ] Update homepage metadata to target OpenClaw beginner-intent search themes.
- [ ] Update Learn metadata to reflect its new resource-hub role.
- [ ] Make Templates and Troubleshoot metadata match their user intent rather than generic site wording.
- [ ] Run `npm run build` and confirm metadata changes do not break the app.

### Task 12: Finish responsive and accessibility polish

**Files:**
- Modify: `app/globals.css`
- Modify: `components/site-shell.tsx`
- Modify: `components/preferences.tsx`

- [ ] Check the homepage, Learn, Templates, and Troubleshoot pages for mobile overflow, dense spacing, weak hierarchy, and unclear focus states.
- [ ] Improve spacing and card stacking so the Quick Start section remains readable on narrow screens.
- [ ] Verify the language and theme controls are still clearly labeled and keyboard accessible.
- [ ] Run `npm run build`, then run `npm run dev` and manually review all four pages in both themes and at multiple widths.
- [ ] Record any residual issues before handoff if they are out of scope for the MVP.

## Delivery Checklist

- [ ] Homepage hero routes users into `#quick-start`
- [ ] Header includes a highlighted `Quick Start` action without changing the primary nav hierarchy
- [ ] Homepage includes the five-card bilingual Quick Start section
- [ ] Homepage previews support, rather than compete with, onboarding
- [ ] Learn reads as a resource hub rather than a second onboarding page
- [ ] Templates supports starter workflow discovery
- [ ] Troubleshoot supports first-run recovery
- [ ] Metadata matches the revised information architecture
- [ ] `npm run build` passes
- [ ] Manual responsive review completed in `npm run dev`

## Notes

- There is no automated test suite configured in the current project. The release gate for this slice is a successful production build plus a manual review in development mode.
- The older plan at `docs/superpowers/plans/2026-03-11-content-mvp.md` reflects the previous information architecture where `Learn` was the main primary journey. Use this new plan for the current direction.


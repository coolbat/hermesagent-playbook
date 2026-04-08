# Homepage Onboarding Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the homepage into a bolder “Signal Board” onboarding product homepage without changing the existing information architecture.

**Architecture:** Keep the current homepage section order and content sources, but redesign the hero, Quick Start, and preview sections so they behave like differentiated product modules with stronger visual identity. Reuse existing components where possible and extend shared CSS tokens and section patterns instead of introducing homepage-only hacks.

**Tech Stack:** Next.js App Router, TypeScript, existing localized content system, shared CSS in `app/globals.css`.

---

## Chunk 1: Hero refinement

### Task 1: Audit the hero content and identify which signals belong in the main pane vs control panel

**Files:**
- Modify: `app/page.tsx`
- Reference: `content/site.ts`

- [ ] Rebalance hero copy so the main pane focuses on value, audience, and primary action.
- [ ] Reframe the aside as a stronger operational “first-run control panel”.
- [ ] Keep the current route targets and localized content structure intact.
- [ ] Add a bolder visual hierarchy so the hero no longer feels like a standard SaaS card split.

### Task 2: Refine hero layout and visual hierarchy

**Files:**
- Modify: `components/page-hero.tsx`
- Modify: `app/globals.css`

- [ ] Tighten the hero hierarchy so the page feels less poster-like and more product-like.
- [ ] Improve the relationship between hero headline, summary, CTA row, and right-side panel.
- [ ] Verify EN and ZH headline behavior remains stable.

## Chunk 2: Quick Start as onboarding path

### Task 3: Strengthen the Quick Start section as a guided path

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/quick-start-card.tsx`
- Modify: `app/globals.css`

- [ ] Preserve the 5-step structure.
- [ ] Strengthen the path framing and visual sequencing.
- [ ] Make the cards feel more clearly like entrances into step guides.
- [ ] Introduce stronger directional cues so the section feels like an onboarding path, not a preview grid.

## Chunk 3: Module differentiation

### Task 4: Differentiate Learn, Templates, and Troubleshoot preview modules

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

- [ ] Keep the same macro section order.
- [ ] Make Learn feel like a deeper knowledge module.
- [ ] Make Templates feel like the fastest-results module.
- [ ] Make Troubleshoot feel like a recovery module rather than another preview block.
- [ ] Ensure the three modules are visually distinct enough that the page avoids “corporate feature grid” sameness.

### Task 5: Quiet the FAQ and trust layer

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

- [ ] Keep FAQ present but visually secondary.
- [ ] Ensure trust signals support the page rather than compete with the primary path.

## Chunk 4: Verification

### Task 6: Verify the homepage in production mode

**Files:**
- No code changes required

- [ ] Run `npm run build`.
- [ ] Restart `npm run start`.
- [ ] Manually check `/en` and `/zh`.
- [ ] Verify the homepage still routes clearly into Quick Start, Learn, Templates, and Troubleshoot.

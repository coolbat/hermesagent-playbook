# Templates Tabs Layout Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Templates into a tabbed starter workflow directory organized by six work-goal categories.

**Architecture:** Keep Templates as a single route for now, but replace the old featured/category/callout composition with a small client-side tab interface. Store category labels, intros, and template cards in `content/templates.ts`, render them through a dedicated tabs component, and reuse the existing template-card presentation with a more compact directory flow.

**Tech Stack:** Next.js App Router, React client component for tabs, existing localized content model

---

## Chunk 1: Data Model

### Task 1: Replace Templates data with tabbed category data

**Files:**
- Modify: `content/templates.ts`

- [ ] Add a tab type with localized label, intro copy, and template card list
- [ ] Define six categories: briefings, content-production, team-collaboration, research-analysis, monitoring-alerts, chinese-ecosystem
- [ ] Add 3 compact template cards per category with simulated but credible copy

## Chunk 2: Templates UI

### Task 2: Add Templates tabs component

**Files:**
- Create: `components/templates-tabs.tsx`

- [ ] Create a client component with tab state
- [ ] Render the category rail and active template grid
- [ ] Keep all labels localized without duplicating DOM

### Task 3: Rewrite Templates page layout

**Files:**
- Modify: `app/templates/page.tsx`

- [ ] Remove hero notes block
- [ ] Remove section heading, featured section, and fake-filter callout
- [ ] Render the new tab component directly under the hero

## Chunk 3: Styling and Verification

### Task 4: Add tabbed Templates styles

**Files:**
- Modify: `app/globals.css`
- Modify: `components/template-card.tsx`

- [ ] Add Templates-specific tab rail and intro block styling
- [ ] Make template cards read better as a 3-column directory grid
- [ ] Add responsive rules for tablet/mobile

### Task 5: Verify

**Files:**
- Verify only

- [ ] Run `npm run build`
- [ ] Restart `npm run start` for production preview
- [ ] Manually spot-check the Templates page in Chinese and English

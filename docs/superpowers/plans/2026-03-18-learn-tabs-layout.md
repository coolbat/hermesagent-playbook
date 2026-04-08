# Learn Tabs Layout Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Learn page from a collection overview into a tabbed learning resource hub with six topic tabs and compact tutorial cards.

**Architecture:** Keep the Learn page as a single route, but replace the old hero notes, section heading, and large collection cards with a small client-side tab interface. Store the tab labels and tutorial card copy in `content/learn.ts`, and render them through a dedicated Learn tabs component so the page remains easy to extend later.

**Tech Stack:** Next.js App Router, React client component for tabs, existing localized content model

---

## Chunk 1: Data Model

### Task 1: Replace Learn collection data with tabbed tutorial data

**Files:**
- Modify: `content/learn.ts`

- [ ] Add a tab type with localized label, intro copy, and tutorial card list
- [ ] Define six tabs: foundations, setup, skills-workflow-design, chinese-ecosystem, advanced-troubleshooting, usage-tips
- [ ] Add 3+ compact tutorial cards per tab with simulated tutorial copy

## Chunk 2: Learn UI

### Task 2: Add Learn tabs component

**Files:**
- Create: `components/learn-tabs.tsx`

- [ ] Create a client component with tab state
- [ ] Render the tab list and the active tab’s card grid
- [ ] Keep card content localized without duplicating DOM

### Task 3: Rewrite Learn page layout

**Files:**
- Modify: `app/learn/page.tsx`

- [ ] Remove hero notes block
- [ ] Remove section heading and the old collection/callout sections
- [ ] Render the new tab component directly under the hero

## Chunk 3: Styling and Verification

### Task 4: Add tabbed layout styles

**Files:**
- Modify: `app/globals.css`

- [ ] Style the Learn tab rail
- [ ] Style compact 3-column tutorial cards on desktop
- [ ] Add responsive rules for tablet/mobile

### Task 5: Verify

**Files:**
- Verify only

- [ ] Run `npm run build`
- [ ] Restart `npm run dev` cleanly
- [ ] Manually spot-check the Learn page in Chinese and English

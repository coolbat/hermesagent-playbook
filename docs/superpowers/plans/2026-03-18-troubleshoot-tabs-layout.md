# Troubleshoot Tabs Layout Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign Troubleshoot into a symptom-first tabbed help center organized by six diagnostic entry points.

**Architecture:** Keep Troubleshoot as a single route, but replace the old notes, section headings, command strip, and recovery callout with a small client-side tab interface. Store tab labels, intro copy, and compact troubleshooting cards in `content/troubleshoot.ts`, render them through a dedicated tabs component, and simplify the card component so it renders only the active locale.

**Tech Stack:** Next.js App Router, React client component for tabs, existing localized content model

---

## Chunk 1: Data Model

### Task 1: Replace Troubleshoot data with tabbed symptom categories

**Files:**
- Modify: `content/troubleshoot.ts`

- [ ] Add a tab type with localized label, intro copy, and troubleshoot card list
- [ ] Define six categories: bot-silence, install-environment, models-credentials, workflow-no-output, permissions-integrations, diagnostics-observability
- [ ] Move quick commands into the diagnostics category instead of a separate section

## Chunk 2: Troubleshoot UI

### Task 2: Add Troubleshoot tabs component

**Files:**
- Create: `components/troubleshoot-tabs.tsx`

- [ ] Create a client component with tab state
- [ ] Render the symptom tab rail and active troubleshooting grid
- [ ] Keep all labels localized without duplicating DOM

### Task 3: Rewrite Troubleshoot page layout

**Files:**
- Modify: `app/troubleshoot/page.tsx`
- Modify: `components/troubleshoot-card.tsx`

- [ ] Remove hero notes, section heading, quick command section, and recovery callout
- [ ] Render the new tabs component directly under the hero
- [ ] Make troubleshooting cards use locale-aware single-language rendering

## Chunk 3: Styling and Verification

### Task 4: Add tabbed Troubleshoot styles

**Files:**
- Modify: `app/globals.css`

- [ ] Add Troubleshoot-specific tab rail and intro block styling
- [ ] Tighten troubleshoot cards for a 3-column directory grid
- [ ] Add responsive rules for tablet/mobile

### Task 5: Verify

**Files:**
- Verify only

- [ ] Run `npm run build`
- [ ] Restart `npm run start` for production preview
- [ ] Manually spot-check the Troubleshoot page in Chinese and English

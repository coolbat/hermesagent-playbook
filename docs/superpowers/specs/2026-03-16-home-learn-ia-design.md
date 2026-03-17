# OpenClaw101 Home / Learn Information Architecture Design

**Date:** 2026-03-16

## Summary

This design refines the MVP information architecture so the site has a clearer first-run experience and less navigational friction. The main change is moving the primary beginner onboarding flow out of `Learn` and into the homepage as a mixed-format `Quick Start` section.

The homepage becomes the main SEO landing page for OpenClaw beginner intent and the fastest path to a first successful run. The `Learn` page shifts from "start here" onboarding into a structured resource hub for deeper study.

## Why This Change

The earlier structure made `Home` and `Learn` overlap too much:

- `Home` introduced the product and routed users
- `Learn` also tried to route users before teaching them
- the first meaningful learning step started too late

This created unnecessary hierarchy:

- `Home`
- `Learn`
- path chooser
- course blocks
- actual learning

The revised structure reduces that friction:

- `Home` explains the product and immediately starts teaching
- `Learn` becomes a resource center rather than a second landing page
- users reach real content from the second level, or even directly on the homepage

## Product Goals

- Reduce page-depth before users begin learning
- Make the homepage the primary SEO landing page for beginner OpenClaw queries
- Help a new visitor reach a first successful OpenClaw workflow quickly
- Separate onboarding, deeper learning, templates, and troubleshooting into clearer roles

## Information Architecture

Top-level navigation remains:

- `Learn`
- `Templates`
- `Troubleshoot`

The homepage also includes a highlighted `Quick Start` button in the header, but `Quick Start` is not a standalone top-level content section or permanent nav category. It is a homepage anchor and primary CTA.

### Final structure

- `Home`
- `Learn`
- `Templates`
- `Troubleshoot`

### Role of each page

#### Home

The homepage is:

- the main SEO landing page
- the product positioning page
- the first-run onboarding page

Its job is to:

- explain what OpenClaw is
- explain what this site helps users accomplish
- move users directly into a 30-minute beginner path
- route users onward to deeper learning, templates, or troubleshooting

It should not behave like a generic marketing homepage with only shallow preview cards.

#### Learn

`Learn` is no longer the main onboarding page. It becomes the learning resource hub.

Its job is to:

- organize deeper learning materials
- support users who want more structure after Quick Start
- host topic-based or collection-based learning resources

It should not duplicate homepage onboarding.

#### Templates

`Templates` remains the workflow library.

Its job is to:

- present reusable workflow templates by use case
- help action-oriented users start from practical scenarios
- support Quick Start and deeper learning with starter workflows

Templates are organized around scenarios, not as a skill directory.

#### Troubleshoot

`Troubleshoot` remains the symptom-first support page.

Its job is to:

- help blocked users recover quickly
- provide short diagnosis paths and basic checks
- route users back into Quick Start, Learn, or Templates after recovery

## Homepage Design

The homepage should now be structured like this:

1. Hero
2. Quick Start
3. Learn / Resource Preview
4. Templates Preview
5. Troubleshoot Preview
6. FAQ or additional SEO-supporting content

The critical rule is that the homepage should move from hero into real learning content immediately. The user should not need to enter `Learn` before seeing practical onboarding.

## Navigation Design

### Header navigation

Recommended header structure:

- standard nav items: `Learn`, `Templates`, `Troubleshoot`
- highlighted action button: `Quick Start`

### Why `Quick Start` is not a normal nav item

`Quick Start` is a task-focused CTA, not a long-term site category.

If it were treated as a normal top-level nav label, the information architecture would become less clear:

- users may interpret it as a separate section parallel to `Learn`
- the distinction between onboarding and resource browsing would weaken

Keeping it as a highlighted button preserves emphasis without muddying structure.

## Homepage SEO Role

The homepage should intentionally target beginner-intent OpenClaw queries, including themes such as:

- `open claw`
- `open claw tutorial`
- `open claw guide`
- `open claw for beginners`
- `how to use open claw`
- `open claw setup`
- `open claw install`
- `open claw workflow`
- `open claw troubleshooting`

This affects homepage content strategy:

- the hero must name the subject clearly
- the page needs enough explanatory body copy to support search intent
- Quick Start should reinforce beginner intent through structured tutorial language
- FAQ or support sections can capture related long-tail queries

## Quick Start Definition

`Quick Start` is the central homepage module.

Its purpose is to help a beginner complete the minimum successful OpenClaw journey in about 30 minutes.

It should use a mixed structure:

- the homepage teaches the shortest useful path directly
- each step also offers a deeper follow-up link

This keeps the onboarding path shallow while preserving room for expansion.

### Quick Start success criteria

By the end of this section, a new user should know:

- what OpenClaw is
- how to install it
- how to connect a chat channel
- how to run one starter workflow
- what to check when something fails

## Quick Start Content Structure

The section contains five cards or content blocks.

### 1. What Is OpenClaw

Purpose:

- establish the correct mental model

This block should explain that OpenClaw is:

- not just a chatbot
- an execution system for repeatable workflows
- most useful when it completes real tasks through channels and skills

Recommended deeper link:

- `Learn > Foundations`

### 2. Deploy / Install

Purpose:

- help the user choose and complete the simplest installation path

This block should:

- recommend a minimal setup path
- avoid overwhelming branching
- emphasize verification over perfect infrastructure

Recommended deeper link:

- `Learn > Setup`

### 3. Connect a Chat Channel

Purpose:

- turn installation into a usable system

This block should:

- explain why a chat channel is required
- recommend a simple first channel
- prompt the user to verify one test message loop

Recommended deeper links:

- channel setup resources in `Learn`
- channel-related issues in `Troubleshoot`

### 4. Run a Starter Workflow

Purpose:

- create the first practical success moment

This block should:

- recommend one low-risk starter workflow
- define what success looks like
- keep the first workflow simple and easy to verify

The default starter workflow should be:

- `Daily AI News Digest`

Recommended deeper links:

- `Templates > Starter Templates`
- `Learn > Skills & Workflows`

### 5. Basic Troubleshooting

Purpose:

- prevent early user drop-off after first failure

This block should:

- guide the user through the shortest checks first
- focus on common beginner issues
- link to the full troubleshooting page for deeper diagnosis

Recommended deeper link:

- `Troubleshoot`

## Quick Start Writing Model

For the homepage UI, each Quick Start block should use the same compact structure:

- title
- one-sentence summary
- three short bullets
- one CTA button

This keeps the page scannable and consistent.

Recommended density:

- blocks 1 and 5 lean more explanatory
- blocks 2, 3, and 4 lean more action-oriented

## Learn Page Redefinition

`Learn` should be repositioned as a resource hub for users who want more depth after the homepage onboarding.

Recommended content groups:

- Foundations
- Setup
- Skills and Workflow Design
- Real-world Use Cases
- Chinese Ecosystem Guides
- Security / Permissions / Cost Awareness
- Advanced Troubleshooting

The top of the page should explain that `Learn` is for deeper study and collections of guides, not the primary place to start the first run.

## User Flow

Recommended primary paths:

- search or direct visit -> `Home` -> `Quick Start`
- deeper study need -> `Learn`
- practical scenario need -> `Templates`
- blocked state -> `Troubleshoot`

This means:

- `Home` handles first conversion
- `Learn` handles deeper study
- `Templates` handles scenario reuse
- `Troubleshoot` handles recovery

## Bilingual Content Direction

The homepage Quick Start should appear in both English and Chinese.

Requirements:

- keep both versions natural rather than sentence-by-sentence literal
- preserve the same information structure in both languages
- prioritize scanability over long explanatory paragraphs

## Approved UI Copy Direction

The approved Quick Start UI copy model is:

- section title
- short intro
- five compact cards
- each card uses:
  - title
  - short explanation
  - three bullets
  - CTA

This matches the desired balance between tutorial guidance and homepage usability.

## Deferred Questions

These items are still open and should be resolved during implementation planning:

- which chat channel is the recommended default for first-time users
- whether Quick Start cards should expand inline or stay fixed-height
- whether FAQ lives directly on the homepage or as a separate supporting section
- how deep the first linked `Learn` resources should be at launch

## Implementation Impact

This design implies the following content and layout changes:

- homepage hero CTA should target the Quick Start anchor
- header should add a highlighted `Quick Start` action
- homepage needs a substantial new Quick Start section
- `Learn` needs rewritten page positioning and structure
- preview sections on the homepage should support, not compete with, onboarding


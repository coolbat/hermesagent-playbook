<div align="center">

# Hermes Agent Playbook

**A bilingual tutorial landing page for getting from `install` and `provider setup` to a real Hermes Agent workflow.**

Use this repository directly on GitHub as a guided learning hub.  
Start with Quick Start, deepen with Learn, adapt with Templates, and recover fast with Troubleshoot.

[Start Quick Start](#start-here) · [Choose Your Path](#choose-your-path) · [Use On GitHub](#use-on-github) · [Run Locally](#run-locally)

</div>

> Hermes Agent Playbook is built for beginners, small teams, and operators who want one clear path from setup to a usable workflow.

## Banner

| What this repo is | What you can do here |
| --- | --- |
| A bilingual tutorial repository and website codebase for Hermes Agent | Learn directly from GitHub without deploying first |
| A guided onboarding layer on top of the official docs | Follow a 5-step path, then branch into Learn, Templates, Skills, and Troubleshoot |
| A practical playbook, not a generic docs mirror | Move from first setup to first useful workflow with lower friction |

## Quick Actions

- `New to Hermes Agent?` Go straight to [中文 Quick Start](#中文-quick-start) or [English Quick Start](#english-quick-start)
- `Need stronger foundations?` Open [Learn](#2-learn)
- `Need workflow ideas?` Open [Templates](#4-templates)
- `First run failed?` Open [Troubleshoot](#5-troubleshoot)

## Table of Contents

- [Start Here](#start-here)
- [What This Repo Helps You Do](#what-this-repo-helps-you-do)
- [Choose Your Path](#choose-your-path)
- [Use On GitHub](#use-on-github)
- [Repository Structure](#repository-structure)
- [Run Locally](#run-locally)
- [Official Hermes Agent References](#official-hermes-agent-references)
- [Who This Repo Is For](#who-this-repo-is-for)

## Start Here

If you are new to Hermes Agent, follow the 5-step Quick Start path in order.

### 中文 Quick Start

1. [什么是 Hermes Agent](./content/quick-start/zh/what-is-hermes-agent.mdx)
2. [安装与配置](./content/quick-start/zh/deploy-install.mdx)
3. [连接聊天渠道](./content/quick-start/zh/connect-channel.mdx)
4. [运行入门工作流](./content/quick-start/zh/starter-workflow.mdx)
5. [基础排错](./content/quick-start/zh/basic-troubleshooting.mdx)

### English Quick Start

1. [What Is Hermes Agent](./content/quick-start/en/what-is-hermes-agent.mdx)
2. [Install and Configure](./content/quick-start/en/deploy-install.mdx)
3. [Connect a Chat Channel](./content/quick-start/en/connect-channel.mdx)
4. [Run a Starter Workflow](./content/quick-start/en/starter-workflow.mdx)
5. [Basic Troubleshooting](./content/quick-start/en/basic-troubleshooting.mdx)

## What This Repo Helps You Do

- Understand what Hermes Agent is actually good at
- Finish the shortest working setup path
- Verify one provider before expanding scope
- Connect one channel or gateway loop
- Run one inspectable workflow with a useful output
- Recover faster when setup, skills, or routing fail

## Choose Your Path

### 1. Quick Start

Use Quick Start if you want the shortest route from zero to one working Hermes loop.

- [中文目录](./content/quick-start/zh)
- [English directory](./content/quick-start/en)

### 2. Learn

Use Learn if you already completed the basics and want stronger mental models for providers, gateway patterns, skills, memory, MCP, and workflow design.

- [中文目录](./content/learn/zh)
- [English directory](./content/learn/en)
- Recommended reads:
  - [Hermes Agent 和聊天机器人有什么区别](./content/learn/zh/hermes-agent-vs-chatbots.mdx)
  - [Hermes Gateway 指南](./content/learn/zh/hermes-gateway-guide.mdx)
  - [Hermes config.yaml 指南](./content/learn/zh/hermes-config-yaml.mdx)
  - [Hermes MCP 接入指南](./content/learn/zh/hermes-mcp-guide.mdx)
  - [Hermes Agent vs Chatbots](./content/learn/en/hermes-agent-vs-chatbots.mdx)
  - [Hermes Gateway Guide](./content/learn/en/hermes-gateway-guide.mdx)

### 3. Skills

Use the Skills section if you need help understanding built-in skills, installed skills, and how skills change the boundary of what Hermes Agent can do.

- [Skills page source](./app/skills/page.tsx)
- [Skills content config](./content/skills.ts)

### 4. Templates

Use Templates if you want workflow examples you can adapt into a real channel, automation, or team handoff.

- [中文目录](./content/template-library/zh)
- [English directory](./content/template-library/en)

### 5. Troubleshoot

Use Troubleshoot if your first run failed, the bot stays silent, gateway wiring breaks, or skills do not load as expected.

- [中文目录](./content/troubleshoot-library/zh)
- [English directory](./content/troubleshoot-library/en)
- Good first recovery pages:
  - [网关无法工作](./content/troubleshoot-library/zh/gateway-not-working.mdx)
  - [Skills 无法加载](./content/troubleshoot-library/zh/skills-not-loading.mdx)
  - [Gateway Not Working](./content/troubleshoot-library/en/gateway-not-working.mdx)
  - [Skills Not Loading](./content/troubleshoot-library/en/skills-not-loading.mdx)

## Use On GitHub

If you are reading this repository on GitHub, this is the fastest way to use it:

1. Start with the Quick Start path above.
2. Open the matching `zh` or `en` article files directly.
3. Move into Learn only after you finish installation and one working loop.
4. Use Templates for real workflows.
5. Use Troubleshoot when a symptom is concrete.

If you want the full site experience or want to adapt the project:

- Home page source: [app/page.tsx](./app/page.tsx)
- Site content model: [content/site.ts](./content/site.ts)
- Skills page source: [app/skills/page.tsx](./app/skills/page.tsx)
- Global styling: [app/globals.css](./app/globals.css)

## Repository Structure

```text
app/                         Next.js routes and page shells
components/                  Reusable UI components
content/quick-start/         5-step beginner guides in zh/en
content/learn/               Deeper tutorials in zh/en
content/template-library/    Workflow recipes in zh/en
content/troubleshoot-library/ Problem-focused recovery guides in zh/en
content/*.ts                 Navigation, metadata, and page content indexes
lib/                         i18n, metadata, and cross-link helpers
```

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` or the next free port shown by Next.js.

## Official Hermes Agent References

Use this repository as the guided learning layer. Use the official Hermes resources for canonical product behavior and latest commands.

- [Hermes Agent Docs](https://hermes-agent.nousresearch.com/docs)
- [Hermes Agent Skills](https://hermes-agent.nousresearch.com/docs/skills)
- [Hermes Agent Quickstart](https://hermes-agent.nousresearch.com/docs/getting-started/quickstart/)
- [NousResearch/hermes-agent on GitHub](https://github.com/NousResearch/hermes-agent)

## Who This Repo Is For

- Beginners who want one clear onboarding route
- Teams that need bilingual Hermes Agent training material
- Builders who want reusable workflow examples
- Operators who need fast recovery guides for first-run failures

## License And Usage

This repository contains tutorial content and website code for Hermes Agent learning workflows. Review your project license and deployment settings before republishing or modifying the site for production use.

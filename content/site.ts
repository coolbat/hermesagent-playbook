import type { CtaLink, LocalizedList, LocalizedText } from "@/content/types";

export type QuickStartEntry = {
  id: string;
  slug: string;
  step: string;
  title: LocalizedText;
  summary: LocalizedText;
  bullets: LocalizedList;
  cta: CtaLink;
};

export type FaqEntry = {
  question: LocalizedText;
  answer: LocalizedText;
};

export const homeHero = {
  kicker: "HERMES AGENT QUICK START",
  title: {
    en: "Start Hermes Agent from one launch path, not from a maze of docs.",
    zh: "别从文档迷宫开始，直接用一条清晰路径完成 Hermes Agent 入门。",
  },
  summary: {
    en: "A bilingual Hermes Agent launch pad for teams that want the shortest path from install and provider setup to a real workflow.",
    zh: "一个面向新手和小团队的 Hermes Agent 双语学习站，目标是把你从安装和模型配置直接带到第一条真实工作流。",
  },
  ctas: [
    {
      label: { en: "Start the 5-step path", zh: "开始 5 步路径" },
      href: "#quick-start",
      variant: "primary" as const,
    },
    {
      label: { en: "Build stronger foundations", zh: "补强基础认知" },
      href: "/learn",
      variant: "secondary" as const,
    },
    {
      label: { en: "First run failed?", zh: "首次运行失败？" },
      href: "/troubleshoot",
      variant: "link" as const,
    },
  ] satisfies CtaLink[],
  sideTitle: {
    en: "What you should accomplish in your first 30 minutes",
    zh: "前 30 分钟应该完成什么",
  },
  sideItems: [
    {
      en: "Understand what Hermes Agent is actually built to do.",
      zh: "先搞清楚 Hermes Agent 真正擅长解决什么问题。",
    },
    {
      en: "Install the shortest working setup and verify one provider.",
      zh: "完成最短可工作的安装路径，并验证一个模型 provider。",
    },
    {
      en: "Connect one channel or CLI loop and confirm the agent responds.",
      zh: "接通一个消息渠道或 CLI 回路，确认 agent 能稳定响应。",
    },
    {
      en: "Run one starter workflow that produces an inspectable result.",
      zh: "跑通一条能产出、能检查结果的入门工作流。",
    },
  ] satisfies LocalizedText[],
};

export const quickStartIntro = {
  title: {
    en: "Quick Start",
    zh: "Quick Start",
  },
  summary: {
    en: "This is the shortest beginner path we can recommend without pretending Hermes Agent is simpler than it is.",
    zh: "这是目前最短、同时不过度简化 Hermes Agent 复杂度的新手路径。",
  },
};

export const quickStartEntries: QuickStartEntry[] = [
  {
    id: "what-is-hermes-agent",
    slug: "what-is-hermes-agent",
    step: "01",
    title: {
      en: "What Is Hermes Agent",
      zh: "什么是 Hermes Agent",
    },
    summary: {
      en: "Treat it as an agent runtime with tools, skills, memory, and gateways, not just another AI chat shell.",
      zh: "把它当成带工具、技能、记忆和网关能力的 agent 运行时，而不只是另一个 AI 聊天壳。",
    },
    bullets: {
      en: [
        "Useful when tasks are repeatable and channel-based.",
        "Skills matter because they expand what the system can do.",
        "The goal is a reliable loop, not one lucky prompt.",
      ],
      zh: [
        "它适合可重复、可通过渠道触发的任务。",
        "技能决定它能不能从聊天走向执行。",
        "目标是稳定闭环，而不是偶然跑通一次提示词。",
      ],
    },
    cta: {
      label: { en: "Open step guide", zh: "查看步骤详解" },
      href: "/quick-start/what-is-hermes-agent",
      variant: "secondary",
    },
  },
  {
    id: "deploy-install",
    slug: "deploy-install",
    step: "02",
    title: {
      en: "Install and Configure",
      zh: "安装与配置",
    },
    summary: {
      en: "Take the official install path, then verify one provider and one healthy CLI session.",
      zh: "先走官方安装路径，再验证一个 provider 和一条健康的 CLI 会话。",
    },
    bullets: {
      en: [
        "Use the official installer on macOS, Linux, or WSL2.",
        "Run `hermes setup` or `hermes model` before adding extra surfaces.",
        "Do not add messaging or voice until the base loop is healthy.",
      ],
      zh: [
        "优先使用官方安装脚本，在 macOS、Linux 或 WSL2 上落地。",
        "先用 `hermes setup` 或 `hermes model` 验证 provider，再叠加其他能力。",
        "基础链路健康之前，不要急着接消息渠道或语音能力。",
      ],
    },
    cta: {
      label: { en: "Open step guide", zh: "查看步骤详解" },
      href: "/quick-start/deploy-install",
      variant: "secondary",
    },
  },
  {
    id: "connect-channel",
    slug: "connect-channel",
    step: "03",
    title: {
      en: "Connect a Chat Channel",
      zh: "连接聊天渠道",
    },
    summary: {
      en: "Installation is not enough. The first real milestone is a working chat or gateway loop.",
      zh: "只装好还不够。真正的第一个里程碑，是跑通聊天或 gateway 消息闭环。",
    },
    bullets: {
      en: [
        "Start with the CLI, then add Telegram, Discord, or another supported platform.",
        "Use one clean test message and confirm the agent responds end to end.",
        "If the bot stays silent, fix the loop before adding more skills or automation.",
      ],
      zh: [
        "先从 CLI 验证，再接 Telegram、Discord 或其他支持的平台。",
        "用一条干净测试消息确认 agent 能完整走通输入到输出。",
        "如果机器人沉默，先修复闭环，不要急着继续堆技能和自动化。",
      ],
    },
    cta: {
      label: { en: "Open step guide", zh: "查看步骤详解" },
      href: "/quick-start/connect-channel",
      variant: "secondary",
    },
  },
  {
    id: "starter-workflow",
    slug: "starter-workflow",
    step: "04",
    title: {
      en: "Run a Starter Workflow",
      zh: "运行入门工作流",
    },
    summary: {
      en: "Do one practical Hermes workflow before you optimize tools, voice, or parallel agents.",
      zh: "先跑通一条实际有用的 Hermes 工作流，再谈工具扩展、语音或多 agent。",
    },
    bullets: {
      en: [
        "Pick a workflow with short feedback loops and clear outputs.",
        "Prefer recipes that end in a summary, note, alert, or draft you can inspect quickly.",
        "Keep scope small enough that provider, skill, and routing failures stay diagnosable.",
      ],
      zh: [
        "优先选反馈周期短、结果清晰的工作流。",
        "先做容易检查结果的产出，比如摘要、笔记、告警或草稿。",
        "把范围收小到 provider、skill、路由出问题时也能快速定位。",
      ],
    },
    cta: {
      label: { en: "Open step guide", zh: "查看步骤详解" },
      href: "/quick-start/starter-workflow",
      variant: "primary",
    },
  },
  {
    id: "basic-troubleshooting",
    slug: "basic-troubleshooting",
    step: "05",
    title: {
      en: "Basic Troubleshooting",
      zh: "基础排错",
    },
    summary: {
      en: "Most first-run failures come from provider setup, gateway wiring, or capability boundaries, not mysterious platform bugs.",
      zh: "多数首次运行失败，本质上都来自 provider 配置、gateway 接线或能力边界，而不是神秘平台 bug。",
    },
    bullets: {
      en: [
        "Check provider credentials, process health, and gateway status first.",
        "Use `hermes doctor` and logs before changing multiple variables at once.",
        "Once the symptom is clear, route back into setup or workflow design.",
      ],
      zh: [
        "先查 provider 凭证、进程健康状态和 gateway 运行情况。",
        "先用 `hermes doctor` 和日志缩小范围，不要一次改一堆变量。",
        "确认症状后，再回到 setup 或工作流设计路径继续推进。",
      ],
    },
    cta: {
      label: { en: "Open step guide", zh: "查看步骤详解" },
      href: "/quick-start/basic-troubleshooting",
      variant: "secondary",
    },
  },
];

export const learnPreview = {
  title: {
    en: "Go deeper in Learn",
    zh: "在 Learn 里继续深入",
  },
  summary: {
    en: "After Quick Start, Learn becomes the resource hub for providers, skills, gateway patterns, workspace rules, and advanced recovery paths.",
    zh: "完成 Quick Start 后，Learn 会承担更深层的学习任务，包括 provider、技能、gateway 模式、工作区规则和进阶排错。",
  },
  cards: [
    {
      title: { en: "Foundations", zh: "基础认知" },
      summary: {
        en: "Understand where Hermes Agent creates leverage and where chat alone is enough.",
        zh: "理解 Hermes Agent 的优势边界，知道什么时候该上 agent，什么时候聊天就够了。",
      },
    },
    {
      title: { en: "Setup", zh: "环境搭建" },
      summary: {
        en: "Choose a minimal deployment path and validate each dependency early.",
        zh: "选择最小部署路径，并尽早验证每个依赖是否可用。",
      },
    },
    {
      title: { en: "Workflow Design", zh: "工作流设计" },
      summary: {
        en: "Combine channels, skills, and repeatable task structure into something dependable.",
        zh: "把渠道、技能和可重复任务结构组合成稳定可复用的系统。",
      },
    },
  ],
  cta: {
      label: { en: "Open Learn hub", zh: "进入 Learn 深入看" },
      href: "/learn",
      variant: "secondary" as const,
  },
};

export const templatePreview = {
  title: {
    en: "Starter templates that produce visible results",
    zh: "能快速看到结果的入门模板",
  },
  summary: {
    en: "Templates are here to reduce decision fatigue, not to hide how the system works.",
    zh: "模板的作用是降低选择成本，而不是把系统原理完全藏起来。",
  },
};

export const troubleshootPreview = {
  title: {
    en: "Troubleshoot by symptom, not by panic",
    zh: "按症状排错，而不是靠慌乱猜测",
  },
  summary: {
    en: "Use the symptom-first page when the bot is silent, the install failed, the model rejects requests, or skills stop doing useful work.",
    zh: "当机器人不回、安装失败、模型拒绝请求或技能失效时，直接走 symptom-first 排错路径。",
  },
  bullets: {
    en: ["Bot silent", "Install failed", "Invalid API key", "Skill not working"],
    zh: ["机器人不回", "安装失败", "API key 无效", "技能不工作"],
  },
  cta: {
    label: { en: "Use the recovery path", zh: "进入恢复路径" },
    href: "/troubleshoot",
    variant: "secondary" as const,
  },
};

export const homeFaq: FaqEntry[] = [
  {
    question: {
      en: "Is this site only for complete beginners?",
      zh: "这个站点只适合完全新手吗？",
    },
    answer: {
      en: "No. The homepage is tuned for first-run onboarding, but the rest of the site is useful once you want cleaner setup decisions, stronger workflows, or faster recovery.",
      zh: "不是。首页主要服务 first-run onboarding，但当你需要更稳的 setup 决策、更清晰的工作流设计或更快的恢复路径时，其他页面同样有用。",
    },
  },
  {
    question: {
      en: "Should I start from Learn or Templates?",
      zh: "我应该先看 Learn，还是先跑 Templates？",
    },
    answer: {
      en: "If the environment is not stable yet, stay with Quick Start and Learn. If the basics already work, templates are the fastest way to prove the system can produce something useful.",
      zh: "如果环境还没稳定下来，就先走 Quick Start 和 Learn；如果基础已经能跑，模板是最快证明系统真的能产生价值的方式。",
    },
  },
  {
    question: {
      en: "What is the fastest way to recover from a failed first run?",
      zh: "首次运行失败后，最快的恢复路径是什么？",
    },
    answer: {
      en: "Check process status, channel pairing, and model credentials first. Once the symptom is concrete, go to Troubleshoot instead of changing five settings at once.",
      zh: "先查进程状态、渠道配对和模型凭证。等症状更明确之后，再进入 Troubleshoot，而不是一口气改五个配置。",
    },
  },
];

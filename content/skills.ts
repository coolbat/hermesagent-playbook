import type { CtaLink, LocalizedList, LocalizedText } from "@/content/types";

export type SkillEntry = {
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  installCmd: string;
  difficulty: LocalizedText;
  risk: LocalizedText;
  tags: LocalizedList;
  useCases: LocalizedList;
  starterFriendly: boolean;
  cta: CtaLink;
};

export type SkillTab = {
  id: string;
  label: LocalizedText;
  intro: LocalizedText;
  skills: SkillEntry[];
};

export const skillsIntro = {
  kicker: "HERMES SKILLS",
  title: {
    en: "Skills organized the way Hermes Agent actually works.",
    zh: "按 Hermes Agent 真实使用方式组织的技能入口。",
  },
  summary: {
    en: "A practical view of the Hermes skills ecosystem: built-in essentials, hub-installed skills, coding delegation, and platform-facing utilities you can combine into real workflows.",
    zh: "从真实工作流出发理解 Hermes 的技能生态：内置核心技能、Hub 安装技能、编码委派能力，以及面向平台和渠道的实用能力。",
  },
};

export const skillTabs: SkillTab[] = [
  {
    id: "starter-core",
    label: { en: "Starter Core", zh: "核心起步" },
    intro: {
      en: "These are the first skills and commands worth understanding when you are still building your first healthy Hermes loop.",
      zh: "当你还在建立第一条健康的 Hermes 闭环时，最值得先理解的是这些核心技能和命令。",
    },
    skills: [
      {
        slug: "hermes-agent",
        name: { en: "hermes-agent", zh: "hermes-agent" },
        summary: {
          en: "Built-in reference skill for Hermes Agent itself: CLI usage, setup, configuration, skills, gateway platforms, and contributor guidance.",
          zh: "Hermes Agent 自带的核心参考技能，覆盖 CLI 用法、配置、skills、gateway 平台和贡献者指南。",
        },
        installCmd: "Built in · ask for /hermes-agent",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: {
          en: ["Built-in", "Reference", "Setup"],
          zh: ["内置", "参考", "配置"],
        },
        useCases: {
          en: ["Setup help", "Troubleshooting", "Feature discovery"],
          zh: ["配置排查", "Troubleshooting", "能力发现"],
        },
        starterFriendly: true,
        cta: { label: { en: "Use in Quick Start", zh: "用于 Quick Start" }, href: "/quick-start/what-is-hermes-agent", variant: "primary" },
      },
      {
        slug: "plan",
        name: { en: "plan", zh: "plan" },
        summary: {
          en: "A built-in planning skill that inspects context and writes a markdown plan before execution.",
          zh: "Hermes 内置的规划技能，会先检查上下文并写出 markdown 计划，再进入执行。",
        },
        installCmd: "Built in · use /plan",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Planning", "Built-in", "Safe"], zh: ["规划", "内置", "安全"] },
        useCases: {
          en: ["Spec creation", "Task breakdown", "Pre-flight design"],
          zh: ["写计划", "任务拆解", "执行前设计"],
        },
        starterFriendly: true,
        cta: { label: { en: "Learn workflow design", zh: "理解工作流设计" }, href: "/learn/design-first-workflow", variant: "secondary" },
      },
      {
        slug: "skills-hub",
        name: { en: "Skills Hub", zh: "Skills Hub" },
        summary: {
          en: "The official discovery surface for built-in, optional, and community skills. Use it to browse or search before installing anything heavier.",
          zh: "官方技能发现入口，聚合内置、可选和社区技能。在安装更重的能力之前，先在这里搜索和筛选。",
        },
        installCmd: "CLI · /skills browse · /skills search",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Hub", "Discovery", "Official"], zh: ["Hub", "发现", "官方"] },
        useCases: {
          en: ["Find optional skills", "Compare categories", "Search by task"],
          zh: ["找可选技能", "比较分类", "按任务搜索"],
        },
        starterFriendly: true,
        cta: { label: { en: "Browse the hub", zh: "浏览技能中心" }, href: "/skills", variant: "secondary" },
      },
    ],
  },
  {
    id: "hub-installed",
    label: { en: "Hub Installed", zh: "Hub 安装" },
    intro: {
      en: "Official optional skills are heavier or more niche. Install them deliberately from the Hub when your workflow genuinely needs them.",
      zh: "官方可选技能通常更重、更偏场景化。只有当工作流真的需要时，再从 Hub 里明确安装。",
    },
    skills: [
      {
        slug: "arxiv",
        name: { en: "official/research/arxiv", zh: "official/research/arxiv" },
        summary: {
          en: "A research-oriented optional skill for finding and structuring academic papers from arXiv.",
          zh: "用于查找和结构化 arXiv 论文的官方研究类可选技能。",
        },
        installCmd: "hermes skills install official/research/arxiv",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Optional", "Research", "Hub"], zh: ["可选", "研究", "Hub"] },
        useCases: {
          en: ["Paper scouting", "Literature briefs", "Research pipelines"],
          zh: ["论文筛选", "文献摘要", "研究工作流"],
        },
        starterFriendly: false,
        cta: { label: { en: "Pair with templates", zh: "搭配模板使用" }, href: "/templates", variant: "secondary" },
      },
      {
        slug: "songwriting-and-ai-music",
        name: { en: "official/creative/songwriting-and-ai-music", zh: "official/creative/songwriting-and-ai-music" },
        summary: {
          en: "An example official optional skill from the Hub that shows how Hermes extends into niche creative workflows.",
          zh: "一个来自官方 Hub 的创意类可选技能示例，能帮助你理解 Hermes 如何扩展到更垂直的任务。",
        },
        installCmd: "/skills install official/creative/songwriting-and-ai-music",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Creative", "Optional", "Hub"], zh: ["创意", "可选", "Hub"] },
        useCases: {
          en: ["Creative drafting", "Media experiments", "Skill discovery demos"],
          zh: ["创意草稿", "媒体实验", "技能探索演示"],
        },
        starterFriendly: false,
        cta: { label: { en: "Understand safe expansion", zh: "理解安全扩展" }, href: "/learn/choose-safer-starter-skills", variant: "secondary" },
      },
      {
        slug: "community-search",
        name: { en: "Community skills", zh: "社区技能" },
        summary: {
          en: "Hermes can surface community and registry-backed skills. Use search before installing to confirm platform fit and maintenance quality.",
          zh: "Hermes 还可以发现社区技能和外部 registry。安装前先搜索和确认平台适配、维护质量。",
        },
        installCmd: "/skills search <topic>",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Community", "Registry", "Discovery"], zh: ["社区", "Registry", "发现"] },
        useCases: {
          en: ["Niche integrations", "Platform-specific workflows", "Capability gaps"],
          zh: ["垂直集成", "平台专属工作流", "补能力缺口"],
        },
        starterFriendly: false,
        cta: { label: { en: "Check capability boundaries", zh: "看能力边界" }, href: "/learn/skills-change-boundaries", variant: "secondary" },
      },
    ],
  },
  {
    id: "coding-and-agents",
    label: { en: "Coding & Agents", zh: "编码与多 Agent" },
    intro: {
      en: "Hermes ships with agent-facing skills that can delegate specialized coding work and structure reviews around real repositories.",
      zh: "Hermes 自带面向 agent 的技能，可以把专业编码任务委派出去，并围绕真实代码库组织评审。",
    },
    skills: [
      {
        slug: "codex",
        name: { en: "codex", zh: "codex" },
        summary: {
          en: "Built-in delegation skill for OpenAI Codex CLI. Best for bounded code changes, refactors, and batch issue fixing.",
          zh: "面向 OpenAI Codex CLI 的内置委派技能，适合边界清晰的代码改动、重构和批量修复。",
        },
        installCmd: "Built in · use /codex",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Coding", "Delegation", "Built-in"], zh: ["编码", "委派", "内置"] },
        useCases: {
          en: ["Feature slices", "PR cleanup", "Patch generation"],
          zh: ["功能切片", "PR 清理", "补丁生成"],
        },
        starterFriendly: false,
        cta: { label: { en: "See multi-agent template", zh: "查看多 Agent 模板" }, href: "/templates/multi-agent-feishu-setup", variant: "secondary" },
      },
      {
        slug: "claude-code",
        name: { en: "claude-code", zh: "claude-code" },
        summary: {
          en: "Built-in delegation skill for Claude Code. Useful when you need a second coding worker inside a Hermes-driven workflow.",
          zh: "面向 Claude Code 的内置委派技能，适合在 Hermes 工作流里引入第二个编码执行者。",
        },
        installCmd: "Built in · use /claude-code",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Coding", "Parallel work", "Built-in"], zh: ["编码", "并行工作", "内置"] },
        useCases: {
          en: ["Refactors", "Code review loops", "Parallel issue resolution"],
          zh: ["重构", "代码评审回路", "并行问题处理"],
        },
        starterFriendly: false,
        cta: { label: { en: "Learn sub-agent patterns", zh: "学习子 Agent 模式" }, href: "/learn/sub-agent-parallel-tasks", variant: "secondary" },
      },
      {
        slug: "requesting-code-review",
        name: { en: "requesting-code-review", zh: "requesting-code-review" },
        summary: {
          en: "A review-centric built-in skill for validating work before merge or handoff.",
          zh: "面向代码复核的内置技能，适合在合并或交付前做系统化验证。",
        },
        installCmd: "Built in · ask for /requesting-code-review",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Review", "Quality", "Built-in"], zh: ["评审", "质量", "内置"] },
        useCases: {
          en: ["Pre-merge checks", "Regression review", "Risk surfacing"],
          zh: ["合并前检查", "回归审查", "风险暴露"],
        },
        starterFriendly: false,
        cta: { label: { en: "Read review guidance", zh: "看复盘与复核" }, href: "/learn/review-before-expanding", variant: "secondary" },
      },
    ],
  },
  {
    id: "platform-utilities",
    label: { en: "Platform Utilities", zh: "平台工具" },
    intro: {
      en: "These skills become powerful once your base Hermes loop is healthy and you need to land output in real platforms or device-native surfaces.",
      zh: "当 Hermes 基础链路已经健康，这些技能能帮助你把结果落到真实平台、设备原生能力或消息表面中。",
    },
    skills: [
      {
        slug: "imessage",
        name: { en: "imessage", zh: "imessage" },
        summary: {
          en: "Built-in macOS skill for sending and receiving iMessage or SMS via the terminal.",
          zh: "面向 macOS 的内置技能，可通过终端发送和接收 iMessage 或短信。",
        },
        installCmd: "Built in on macOS · use /imessage",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Apple", "Messaging", "Built-in"], zh: ["Apple", "消息", "内置"] },
        useCases: {
          en: ["Personal alerts", "Device-native automation", "Message routing"],
          zh: ["个人提醒", "系统原生自动化", "消息路由"],
        },
        starterFriendly: false,
        cta: { label: { en: "See messaging workflows", zh: "查看消息类工作流" }, href: "/templates", variant: "secondary" },
      },
      {
        slug: "apple-notes",
        name: { en: "apple-notes", zh: "apple-notes" },
        summary: {
          en: "Built-in macOS notes integration for creating, editing, and searching Apple Notes from Hermes.",
          zh: "macOS 下的 Apple Notes 内置集成，可让 Hermes 创建、编辑和搜索备忘内容。",
        },
        installCmd: "Built in on macOS · use /apple-notes",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Apple", "Notes", "Built-in"], zh: ["Apple", "笔记", "内置"] },
        useCases: {
          en: ["Note capture", "Summaries", "Personal knowledge workflows"],
          zh: ["笔记记录", "摘要沉淀", "个人知识流"],
        },
        starterFriendly: true,
        cta: { label: { en: "Use in note workflows", zh: "用于笔记工作流" }, href: "/templates/meeting-notes-dispatcher", variant: "secondary" },
      },
      {
        slug: "voice-mode",
        name: { en: "Voice mode", zh: "Voice mode" },
        summary: {
          en: "Hermes voice features are configured at the platform layer rather than through one single skill, but they follow the same principle: confirm the text loop first, then add voice.",
          zh: "Hermes 的 voice 能力更多属于平台特性而不是单个 skill，但遵循同一个原则：先把文本闭环跑通，再叠加语音。",
        },
        installCmd: "Feature path · hermes · /voice on",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Voice", "Platform", "Gateway"], zh: ["语音", "平台", "Gateway"] },
        useCases: {
          en: ["CLI voice mode", "Telegram audio reply", "Discord voice"],
          zh: ["CLI 语音模式", "Telegram 语音回复", "Discord 语音"],
        },
        starterFriendly: false,
        cta: { label: { en: "Read setup first", zh: "先看配置路径" }, href: "/quick-start/deploy-install", variant: "secondary" },
      },
    ],
  },
];

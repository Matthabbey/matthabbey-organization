import { Cpu, Globe, Layout, Lock, Rocket, Blocks, type LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "web-mobile",
    icon: Globe,
    title: "Web & Mobile Apps",
    description:
      "Full-stack websites, dashboards and mobile apps built with modern tools like React, Node.js and React Native.",
    deliverables: [
      "Customer-facing web apps and portals",
      "iOS and Android apps from one codebase",
      "Admin dashboards and internal tools",
    ],
  },
  {
    slug: "ai-automation",
    icon: Cpu,
    title: "AI & Automation",
    description:
      "We integrate AI features into your products, from chatbots and recommendation engines to data-processing pipelines.",
    deliverables: [
      "Chat assistants trained on your content",
      "Document and data extraction pipelines",
      "Workflow automation that removes manual steps",
    ],
  },
  {
    slug: "mvp",
    icon: Rocket,
    title: "MVP Development",
    description:
      "Got a startup idea? We help you build a working product fast so you can test it with real users and raise funding.",
    deliverables: [
      "Scope and roadmap for a first release",
      "A launch-ready product in weeks, not months",
      "Analytics so you learn from real users",
    ],
  },
  {
    slug: "ui-ux",
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces that your users will actually enjoy using. We design for people, not awards.",
    deliverables: [
      "User flows and clickable prototypes",
      "Design systems your team can reuse",
      "Accessible, mobile-first layouts",
    ],
  },
  {
    slug: "blockchain",
    icon: Blocks,
    title: "Blockchain & Web3",
    description:
      "Smart contracts, dApps and token systems. If your project involves blockchain, we can build it.",
    deliverables: [
      "Smart contract development and testing",
      "Wallet-connected web apps",
      "Token and marketplace integrations",
    ],
  },
  {
    slug: "security",
    icon: Lock,
    title: "Security Audits",
    description:
      "We review your codebase and infrastructure for vulnerabilities, then help you fix them before they become problems.",
    deliverables: [
      "Code and dependency review",
      "Infrastructure and access-control checks",
      "Prioritised fix list with remediation support",
    ],
  },
];

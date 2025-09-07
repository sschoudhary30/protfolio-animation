import type { IconName } from "tech-stack-icons";

export type Project = {
  title: string;
  src: string;
  href: string;
  description: string;
  tech: IconName[];
  repo?: string;
  tags: string[]; // ← new field
};

export const projects: Project[] = [
  {
    title: "Yoom",
    src: "/yoom.png",
    description:
      "Dark-mode mock-up built with Tailwind CSS. SSR-ready mock-up with GraphQL. SSR-ready mock-up with GraphQL SSR-ready mock-up with GraphQL SSR-ready mock-up with GraphQL SSR-ready mock-up with GraphQL SSR-ready mock-up with GraphQL SSR-ready mock-up with GraphQL",
    href: "https://newboard-two.vercel.app",
    tech: [
      "react",
      "tailwindcss",
      "typescript",
      "firebase",
      "nodejs",
      "figma",
      "stream",
      "shadcnui",
    ],
    repo: "https://github.com/your-user/macbook-mockup-01",
    tags: ["Web", "UI/UX"],
  },
  {
    title: "SecureSwap",
    src: "/secureswap.png",
    description:
      "Secureswap is a peer-to-peer exchange platform that uses atomic-swap escrow and end-to-end encryption to enable trustless trades of any digital or physical asset. Built-in escrow powered by Firebase Functions and Razorpay API for seamless, secure payments. Crafted in HTML, Tailwind CSS, and JavaScript, it delivers a pixel-perfect, fully responsive UI enriched with high-quality SVG assets. Real-time data sync, auth, and transaction logging run on Firebase, ensuring tamper-proof, auditable trades. Modular architecture supports easy integration of reputation systems and future multi-chain interoperability.",
    href: "https://www.secureswap.in/",
    tech: ["html5", "css3", "tailwindcss", "js", "firebase", "postman"],
    repo: "",
    tags: ["Web"],
  },
  {
    title: "Gsap-Animation",
    src: "/GsapAnimation.png",
    description:
      "Gsap-Animation is a modern web showcase built with HTML, GSAP, and CSS keyframes to deliver smooth, high-performance motion effects. Styled with Tailwind CSS, its utility-first approach ensures a clean, responsive UI that adapts impeccably across devices. Features include scroll-triggered animations, timeline control, and state-driven transitions that highlight key UI elements. As a hands-on learning project, it lays the groundwork for mastering advanced web animation techniques and elevating future interface designs.",
    href: "https://animation1-delta.vercel.app/",
    tech: ["figma", "html5", "gsap", "tailwindcss", "js"],
    repo: "https://github.com/sschoudhary30/animation1",
    tags: ["Web", "UI/UX"],
  },
  {
    title: "Snapnote - AI Chrome Extension",
    src: "/snapnote.png",
    description:
      "Snapnote is a Chrome extension that taps into Google Gemini to instantly summarize selected text—or an entire article when nothing’s highlighted. Enter custom prompts (e.g., “Draft a LinkedIn reply…”) for versatile AI-driven tasks beyond just summaries. Switch between light and dark themes with your preference saved across sessions, and store your Gemini API key once for seamless use. One-click copy of your AI responses makes it easy to grab and share insights without ever leaving the page.",
    href: "#",
    tech: [
      "html5",
      "tailwindcss",
      "css3",
      "js",
      "chrome",
      "gemini",
      "aistudio",
    ],
    repo: "https://github.com/sschoudhary30/AI-Summary-chrome-extension",
    tags: ["Web"],
  },
  {
    title: "snOOze - The Helper",
    src: "/snooze.png",
    description:
      "Snooze the Helper is a lightweight Chrome extension that automatically hides or closes distracting tabs on a precise schedule—down to the hour and minute. Set one-click domain-wide snoozes to keep every related tab out of sight, then let them reopen or close itself when your timer ends. A central dashboard shows live countdowns, quick unsnooze controls, and timely notifications so you never lose track. Everything runs locally in your browser—no external data collection, just uninterrupted focus.",
    href: "#",
    tech: ["html5", "tailwindcss", "css3", "js", "chrome"],
    repo: "https://github.com/sschoudhary30/snooze",
    tags: ["Web"],
  },
  {
    title: "Do✔",
    src: "/todochrome.png",
    description:
      "Todo New Tab transforms your browser’s new-tab into a focused task hub. Quickly capture tasks with priority levels, mark them done with a click, and clear completed items for a clean workspace. A gradient-bordered “Google Search” button at the top-center seamlessly returns you to Chrome’s default new-tab (chrome://new-tab-page). All tasks are stored locally via chrome.storage, so your list stays with you without any external data collection.",
    href: "#",
    tech: ["html5", "tailwindcss", "css3", "js", "chrome"],
    repo: "https://github.com/sschoudhary30/todo_chrome_extension",
    tags: ["Web"],
  },
  {
    title: "Impacti-The Nature",
    src: "/impacti.webp",
    description:
      "Impacti—The Nature is a 45-screen mobile UI/UX redesign that transforms an eco-lifestyle app’s fragmented features into a coherent, engaging journey. We tackled usability issues across product recommendations, sustainability tips, community forums, personalization, gamification, educational modules, and impact tracking to drive consistent green habits. By uniting motivation-boosting challenges, social connections, and clear goals, Impacti empowers users to lower their footprint and thrive in a sustainability-minded community.",
    href: "https://www.behance.net/gallery/218255971/Impacti-pro-plant",
    tech: ["figma", "ai", "ps", "storybook"],
    repo: "",
    tags: ["Mobile", "UI/UX"],
  },

  // Additional dummy projects
  {
    title: "DariyX",
    src: "/dariyX.webp",
    description:
      "DairyX – Freelance UI/UX for India’s first on-demand milk-collection app, inspired by Zepto and Blinkit for rapid simplicity. Over three months of day-and-night, multi-iteration design, I defined six core flows—from Add New Collection to Farmer’s Bill—ensuring intuitive entry, overview dashboards with color-coded quality badges, and robust reporting/export features. This end-to-end project showcases pioneering creative solutions in a novel product domain and my ability to deliver polished, user-centric interfaces on tight timelines.",
    href: "https://www.behance.net/gallery/210555959/DairyX-APP-UI",
    tech: ["figma", "ai", "ps", "storybook"],
    repo: "",
    tags: ["Mobile", "UI/UX"],
  },
  {
    title: "Aerovate",
    src: "/aerovate.png",
    description:
      "Aerovate: UI/UX for a PGMT national-level ideathon entry that earned 2nd place for its creative pollution-monitoring solution. Designed 20 core screens to streamline real-time vehicle emissions data collection and address key user pain points. Built an AI-driven dashboard with maintenance recommendations and dynamic monthly PUC certificate generation. Delivered end-to-end, high-fidelity flows under tight competition deadlines, showcasing innovative, user-centric design.",
    href: "https://www.behance.net/gallery/228428181/aerovate",
    tech: ["figma", "ai", "ps", "storybook"],
    repo: "",
    tags: ["Mobile", "UI/UX"],
  },
  {
    title: "Black & White - Men's Hub",
    src: "/black.png",
    description:
      "Black & White – Men’s Hub: Bold monochrome logo and packaging mockups embodying modern masculinity. Delivered in three days with iterative refinements and a polished brand presentation deck. All SVG logos and mockup assets are ready for immediate implementation.",
    href: "https://www.behance.net/gallery/210558165/BLACK-WHITE-mens-wear",
    tech: ["ai", "ps", "canva"],
    repo: "",
    tags: ["Graphic Design"],
  },
  {
    title: "Advait - The tech feast",
    src: "/advaitlogo.png",
    description:
      "Advait – The Tech Feast: My logo was chosen from 13 submissions for DY Patil COE Pune’s flagship tech festival. Appointed Creative Head, I steered the event’s visual identity and branding strategy. Designed T-shirts and swag, delivering print-ready assets that unified merchandise and promo materials.",
    href: "https://www.behance.net/gallery/199427439/ADVAIT-Techfest-Logo-Design-Brand-Identity-Guideline",
    tech: ["ai", "ps", "canva"],
    tags: ["Graphic Design"],
  },
  {
    title: "ATOMIC HOUSE",
    src: "/Atomichouse.png",
    description:
      "Atomic House – My first internship project: I redesigned the company’s landing page with a modern UI/UX and responsive layout. My work streamlined navigation and boosted user engagement, earning praise from stakeholders. This success led to my promotion to the flagship product’s design phase. I collaborated with engineers to ensure pixel-perfect implementation and cohesive branding.",
    href: "https://www.behance.net/gallery/210561891/Agency-Landing-Page",
    tech: ["figma", "ai", "ps", "storybook", "miro"],
    repo: "",
    tags: ["Web", "UI/UX"],
  },
  {
    title: "Loyal Developer - Logo",
    src: "/loyaldeveloper.png",
    description:
      "Loyal Developer – Logo: My first freelance branding for a real estate firm, distilling trust and growth into a modern mark. Delivered versatile SVG/EPS assets for print and web. This project boosted my confidence and shaped my client workflow.",
    href: "https://www.behance.net/gallery/199464293/Logo-Branding-Work",
    tech: ["ai", "ps", "canva"],
    tags: ["Graphic Design"],
  },
];

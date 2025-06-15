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
    tech: ["nextjs", "tailwindcss", "typescript"],
    repo: "https://github.com/your-user/macbook-mockup-01",
    tags: ["Web", "UI/UX"],
  },
  {
    title: "secureswap",
    src: "/secureswap.png",
    description: "Light-theme mock-up with Framer Motion.",
    href: "#",
    tech: ["react", "framer", "sass"],
    repo: "https://github.com/your-user/macbook-mockup-02",
    tags: ["Web", "UI/UX"],
  },
  {
    title: "Gsap-Animation",
    src: "/GsapAnimation.png",
    description: "Animated product-page prototype.",
    href: "#",
    tech: ["ps", "ai"],
    tags: ["Web"],
  },
  {
    title: "Impacti-The Nature",
    src: "/impacti.webp",
    description:
      "SSR-ready mock-up with GraphQL. SSR-ready mock-up with GraphQL SSR-ready mock-up with GraphQL SSR-ready mock-up with GraphQL SSR-ready mock-up with GraphQL SSR-ready mock-up with GraphQL SSR-ready mock-up with GraphQL",
    href: "#",
    tech: ["nextjs", "graphql"],
    repo: "https://github.com/your-user/macbook-mockup-04",
    tags: ["Web", "UI/UX"],
  },

  // Additional dummy projects
  {
    title: "DariyX",
    src: "/dariyX.webp",
    description:
      "Cross-platform mobile app built with React Native and TypeScript.",
    href: "https://example.com/appmobile-x",
    tech: ["ai", "ps"],
    repo: "https://github.com/your-user/appmobile-x",
    tags: ["Mobile", "UI/UX"],
  },
  {
    title: "Black & White - Men's Hub",
    src: "/black.png",
    description:
      "Comprehensive design system created in Figma and implemented with Tailwind CSS.",
    href: "https://example.com/designsystem-pro",
    tech: ["figma"],
    repo: "https://github.com/your-user/designsystem-pro",
    tags: ["UI/UX", "Graphic Design"],
  },
  {
    title: "Advait - The tech feast",
    src: "/advaitlogo.png",
    description:
      "Browser-based photo editor leveraging Canvas API and modern JavaScript.",
    href: "#",
    tech: ["js", "canva"],
    tags: ["Graphic Design"],
  },
  {
    title: "ATOMIC HOUSE",
    src: "/Atomichouse.png",
    description:
      "Real-time chat application using Next.js and GraphQL, also available as a mobile PWA.",
    href: "https://example.com/chatmaster",
    tech: ["nextjs", "graphql"],
    repo: "https://github.com/your-user/chatmaster",
    tags: ["Web", "Mobile"],
  },
  {
    title: "Loyal Developer - Logo",
    src: "/loyaldeveloper.png",
    description:
      "Interactive analytics dashboard built with React and D3 for data visualization.",
    href: "#",
    tech: ["react", "figma", "typescript"],
    tags: ["Web"],
  },
];

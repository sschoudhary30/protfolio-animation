import type { IconName } from "tech-stack-icons";
export type Project = {
  title: string;
  src: string;
  href: string;
  description: string;
  tech: IconName[]; // just the icon names now
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Macbook Mockup 01",
    src: "https://i.pinimg.com/736x/59/76/33/5976330cec0c95b406450b46b015b586.jpg",
    description: "Dark-mode mock-up built with Tailwind CSS.",
    href: "#",
    tech: ["nextjs", "tailwindcss", "typescript"],
    repo: "https://github.com/your-user/macbook-mockup-01",
  },
  {
    title: "Macbook Mockup 02",
    src: "https://i.pinimg.com/736x/cb/0c/39/cb0c3922d729bac162bfb284d6884343.jpg",
    description: "Light-theme mock-up with Framer Motion.",
    href: "#",
    tech: ["react", "framer", "sass"],
    repo: "https://github.com/your-user/macbook-mockup-02",
  },
  {
    title: "Macbook Mockup 03",
    src: "https://i.pinimg.com/736x/cb/0c/39/cb0c3922d729bac162bfb284d6884343.jpg",
    description: "Animated product-page prototype.",
    href: "#",
    tech: ["vue", "pinia", "postcss"],
  },
  {
    title: "Macbook Mockup 04",
    src: "https://i.pinimg.com/736x/59/76/33/5976330cec0c95b406450b46b015b586.jpg",
    description: "SSR-ready mock-up with GraphQL.",
    href: "#",
    tech: ["nextjs", "styledcomponents", "graphql"],
    repo: "https://github.com/your-user/macbook-mockup-04",
  },
];

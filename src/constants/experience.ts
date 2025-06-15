export type Experience = {
  company: string;
  role: string;
  start: string; // ISO dates keep sorting easy
  end?: string; // undefined → “Present”
  description: string;
  tech: string[]; // e.g. ['react', 'ts', 'gcp']
  logo: string; // '/logos/google.png' (in /public)
};
import company from "#/avatar.png";
import company1 from "#/atomichouse.jpeg";
import company2 from "#/Pradnyan-2.png";
import company3 from "#/postman.png";
export const experiences: Experience[] = [
  {
    company: "ATOMIC HOUSE",
    role: "Frontend Dev - Intern",
    start: "2024-01-01",
    end: "2024-06-31",
    description:
      "Led the redesign of the company website, improving cross-device UX and reducing bounce rate by 50%. Enhanced prototyping efficiency with advanced Figma workflows, streamlining design handoff. Designed and implemented smooth transitions to enrich interaction design within the web app. Conducted user research and usability testing to optimize the experience of a SaaS platform.",
    tech: ["react", "js", "nextjs", "figma", "ai", "tailwindcss", "ps"],
    logo: company1,
  },
  {
    company: "Pradnyan ACM Student Chapter DYPCOE ",
    role: "Vice Chair",
    start: "2023-09-01",
    end: "2024-08-31",
    description:
      "Spearheaded club operations, leading a team of 15+ technical leads across design, development, and outreach verticals. Conducted multiple workshops on Frontend Development, UI/UX Design, Git & Git Bash, empowering peers with practical tech skills. Led the redesign and maintenance of the club’s official website, enhancing visual appeal and information accessibility. Performed data-driven analysis of event outcomes to optimize planning and engagement for future initiatives. Fostered collaboration and technical growth within the student community through mentorship and event leadership. Core Skills: Leadership, UI/UX, Web Maintenance, Git, Data Analysis, Public Speaking",
    tech: ["analytics", "github", "react", "canva", "figma"],
    logo: company2,
  },
  {
    company: "POSTMAN Community Pune ",
    role: "Creative Lead",
    start: "2025-02-01",
    end: "2025-05-31",
    description:
      "Led the UI design and web layout for POSTMAN Community Pune’s digital presence, ensuring a seamless, branded experience. Designed high-quality swag assets, including event merchandise and digital giveaways that boosted community engagement. Created versatile mockups and marketing visuals to support events, talks, and workshops across digital platforms.",
    tech: ["ps", "ai", "react", "canva", "figma"],
    logo: company3,
  },
  // add internships the same way
];

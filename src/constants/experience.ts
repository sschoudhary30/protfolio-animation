export type Experience = {
  company: string;
  role: string;
  start: string; // ISO dates keep sorting easy
  end?: string; // undefined → “Present”
  description: string;
  tech: string[]; // e.g. ['react', 'ts', 'gcp']
  logo: string; // '/logos/google.png' (in /public)
};
import company1 from "#/avatar.png";

export const experiences: Experience[] = [
  {
    company: "Google",
    role: "Senior Frontend Engineer",
    start: "2020-06-01",
    description:
      "Led the development of key features for Google Cloud Platform’s web console while improving performance metrics by 35 %.",
    tech: ["react", "ts", "nextjs", "gcp", "eslint", "jest"],
    logo: company1,
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    start: "2018-08-01",
    end: "2020-05-31",
    description:
      "Worked on Microsoft Teams, implementing real-time collaboration features and UI components.",
    tech: ["js", "azure", "react", "redux", "sass", "jest"],
    logo: "/logos/microsoft.png",
  },
  // add internships the same way
];

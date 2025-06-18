import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { SubHeading } from "@/components/subheading";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading> Project - The hard work!!</Heading>

        <SubHeading as="h2">
          Every project I build is a blend of precision and passion – from
          smooth UI flows to scalable backend logic 🚀 . Here’s a glimpse into
          the products, platforms, and ideas I’ve brought to life.
        </SubHeading>

        <SubHeading as="h2">
          🌙 From late-night ideas to polished builds , these projects are where
          I experiment 🧪, iterate , and push boundaries – one deploy at a time.
        </SubHeading>

        <Projects />
      </Container>
    </div>
  );
}

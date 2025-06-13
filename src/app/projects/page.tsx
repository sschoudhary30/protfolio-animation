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
          I&apos;m a software engineer with a passion for building scalable
          antialiased efficient system. I&apos;m currently working as a software
          engineer at nice software solution.
        </SubHeading>

        <Projects />
      </Container>
    </div>
  );
}

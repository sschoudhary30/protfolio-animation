import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/subheading";
import { TimeLine } from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>About Me</Heading>
        <SubHeading>
          I&apos;m a software engineer with a passion for building scalable
          antialiased efficient system. I&apos;m currently working as a software
          engineer at nice software solution.
        </SubHeading>
        <SubHeading>
          I&apos;m a software engineer with a passion for building scalable
          antialiased efficient system. I&apos;m currently working as a software
          engineer at nice software solution.
        </SubHeading>
        <Collage />

        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          Here&apos;s a timeline of my life achievements.
        </p>
        <TimeLine />
      </Container>
    </div>
  );
}

import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { SubHeading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";

import { projects } from "@/constants/projects";
import { MorphingText } from "@/components/magicui/morphing-text";
import { ExperienceSection } from "@/components/experience";
import { ProjectsCarousel } from "@/components/projects-carousel";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>Suresh choudhary 😶‍🌫️</Heading>

        <SubHeading>
          I&apos;m a software engineer with a passion for building scalable
          antialiased efficient system. I&apos;m currently working as a software
          engineer at nice software solution.
        </SubHeading>
        {/* <Projects projects={projects.slice(0, 3)} /> */}
        <ProjectsCarousel projects={projects} />
        <LandingBlogs />
        <ExperienceSection />
        <Testimonials />
      </Container>
    </div>
  );
}

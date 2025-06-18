import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";

import { SubHeading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";

import { projects } from "@/constants/projects";

import { ExperienceSection } from "@/components/experience";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { SkillsScroller } from "@/components/SkillsScroller";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading as="h1">Suresh choudhary 😶‍🌫️</Heading>
        <SectionHeading className="text-secondary text-md md:text-md max-w-lg pt-2 font-semibold">
          UI/UX · Graphic Design · Frontend Engineer
        </SectionHeading>

        <SubHeading>
          I&apos;m a{" "}
          <span
            style={{
              color: "#FF5677",

              fontWeight: "bold",
            }}
          >
            software
          </span>{" "}
          engineer with a passion for building scalable antialiased efficient
          system. Building pixel-perfect , fast web apps ⚡ that engage users
          through intuitive UI, seamless frontend architecture, and{" "}
          <span
            style={{
              color: "#3D8D7A",

              fontWeight: "bold",
            }}
          >
            optimized UI/UX flows
          </span>
          , complemented by creative graphic and logo design🚀.
        </SubHeading>
        <SubHeading>
          Transforming complex designs into resilient{" "}
          <span
            style={{
              color: "#FF5677",

              fontWeight: "bold",
            }}
          >
            Software{" "}
          </span>{" "}
          applications with clean, maintainable code, seamless animations, and
          accessibility at their core.
        </SubHeading>
        {/* <Projects projects={projects.slice(0, 3)} /> */}
        <ProjectsCarousel projects={projects} />

        <LandingBlogs />
        <SkillsScroller />
        <ExperienceSection />
        <Testimonials />
      </Container>
    </div>
  );
}

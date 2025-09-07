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
        <Heading as="h1">Suresh Choudhary 😶‍🌫️</Heading>
        <SectionHeading className="text-secondary text-md md:text-md max-w-lg pt-2 font-semibold">
          Frontend Engineer · UIUX
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
            optimized UIUX flows
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
        <div className="mt-8 flex justify-start">
          <a
            href="/resume.pdf"
            download
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-neutral-200/50 px-8 py-3 font-semibold"
          >
            <span className="border-gradient-to-r absolute inset-0 rounded-full border-2 from-cyan-500 via-pink-500 to-orange-500 bg-origin-border transition-transform duration-300 group-hover:scale-105"></span>
            <span className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-base font-bold text-transparent">
              Resume
            </span>
          </a>
        </div>

        {/* <Projects projects={projects.slice(0, 3)} /> */}
        <ProjectsCarousel projects={projects} />

        <ExperienceSection />
        <SkillsScroller />
        {/* <Testimonials /> */}
        <LandingBlogs />
      </Container>
    </div>
  );
}

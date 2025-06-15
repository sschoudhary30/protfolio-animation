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
          antialiased efficient system. Building{" "}
          <span
            style={{
              color: "gray",
              backgroundColor: "#DDEB9D",
              borderRadius: "5px",
              padding: "3px",
              margin: "2px",
              fontWeight: "bold",
            }}
          >
            pixel-perfect
          </span>
          , fast web apps ⚡ that engage users through intuitive UI, seamless
          frontend, and{" "}
          <span
            style={{
              color: "white",
              backgroundColor: "#3D8D7A",
              borderRadius: "5px",
              padding: "3px",

              fontWeight: "bold",
            }}
          >
            optimized UI/UX flows
          </span>
          , complemented by creative graphic and logo design🚀.
        </SubHeading>
        <SubHeading>
          I&apos;m a creative technologist blending design precision with
          engineering logic. From pixel-perfect UI to scalable systems, I build
          intuitive products that feel as good as they function.
        </SubHeading>

        <SubHeading>
          Currently crafting clean code and user-first experiences at Atomic
          House. Whether it's a frontend detail or backend logic, I believe
          thoughtful design belongs in every line.
        </SubHeading>
        <Collage />

        <SubHeading className="text-secondary max-w-lg pt-4 text-lg font-semibold md:text-xl">
          Here&apos;s a timeline of my life achievements.
        </SubHeading>
        <TimeLine />
      </Container>
    </div>
  );
}

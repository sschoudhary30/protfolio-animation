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
          smooth UI flows{" "}
          <span
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              padding: "3px",
              margin: "2px",
              fontWeight: "bold",
            }}
          >
            🧩
          </span>{" "}
          to scalable backend logic
          <span
            style={{
              backgroundColor: "lightgray",
              borderRadius: "5px",
              padding: "3px",
              margin: "2px",
              fontWeight: "bold",
            }}
          >
            🚀
          </span>
          . Here’s a glimpse into the products, platforms, and ideas I’ve
          brought to life.
        </SubHeading>

        <SubHeading as="h2">
          <span
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              padding: "3px",
              margin: "2px",
              fontWeight: "bold",
            }}
          >
            {" "}
            🌙
          </span>{" "}
          From late-night ideas to polished builds 💻, these projects are where
          I experiment 🧪, iterate 🔁, and push boundaries – one deploy at a
          time{" "}
          <span
            style={{
              backgroundColor: "lightgray",
              borderRadius: "5px",
              padding: "3px",
              margin: "2px",
              fontWeight: "bold",
            }}
          >
            🚢
          </span>
          .
        </SubHeading>

        <Projects />
      </Container>
    </div>
  );
}

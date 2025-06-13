import { Container } from "@/components/container";
import { Metadata } from "next";
import { getSingleBlog, getBlogFrontmatterBySlug } from "@/utils/mdx";
import { redirect } from "next/navigation";
import { title } from "process";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const frontmatter = await getBlogFrontmatterBySlug(params.slug);

  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: frontmatter.title + " by Suresh Choudhary.",
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  console.log(frontmatter);

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="mx-auto mb-15 max-h-96 w-full rounded-2xl border border-neutral-200 object-cover shadow-xl"
        />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}

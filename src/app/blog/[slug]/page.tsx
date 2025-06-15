// src/app/blog/[slug]/page.tsx
import { Container } from "@/components/container";
import Image from "next/image";
import { getSingleBlog, getBlogFrontmatterBySlug } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const frontmatter = await getBlogFrontmatterBySlug(slug);

  if (!frontmatter) {
    return { title: "Blog not found" };
  }

  return {
    title: `${frontmatter.title} by Suresh Choudhary.`,
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  // If for some reason `image` is missing, you can skip rendering it
  const imageSrc = frontmatter.image;
  if (!imageSrc) {
    return (
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <div className="prose mx-auto">{content}</div>
      </Container>
    );
  }

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Image
          src={imageSrc!} // non-null assertion
          alt={frontmatter.title}
          width={736}
          height={736}
          className="mx-auto mb-15 max-h-96 w-full rounded-2xl border border-neutral-200 object-cover shadow-xl"
        />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}

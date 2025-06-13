// import { promises as fs } from "fs";
// import { compileMDX } from "next-mdx-remote/rsc";
// import path from "path";

// type FrontMatter = {
//   title: string;
//   description: string;
//   date: string;
//   image: string;
// };

// export const getSingleBlog = async (slug: string) => {
//   try {
//     const singleBlog = await fs.readFile(
//       path.join(process.cwd(), "src/data/", `${slug}.mdx`),
//       "utf-8",
//     );

//     if (!singleBlog) {
//       return null;
//     }
//     const { content, frontmatter } = await compileMDX<{
//       title: string;
//       description: string;
//     }>({
//       source: singleBlog,
//       options: { parseFrontmatter: true },
//     });

//     return { content, frontmatter };
//   } catch (error) {
//     console.error(`Error reading blog file for slug "${slug}":`, error);
//     return null;
//   }
// };

// export const getBlogs = async () => {
//   const files = await fs.readdir(path.join(process.cwd(), "src/data"));

//   const allBlogs = await Promise.all(
//     files.map(async (file) => {
//       const slug = file.replace(".mdx", "");
//       const frontmatter = await getBlogFrontmatterBySlug(slug);
//       return {
//         slug,
//         ...frontmatter,
//       };
//     }),
//   );

//   //   return allblogs.sort((a, b) => {
//   //     return new Date(b.date).getTime() - new Date(a.date).getTime();
//   //   });

//   return allBlogs;
// };

// const getBlogFrontmatterBySlug = async (slug: string) => {
//   const singleBlog = await fs.readFile(
//     path.join(process.cwd(), "src/data", `${slug}.mdx`),
//     "utf-8",
//   );

//   if (!singleBlog) {
//     return null;
//   }

//   const { frontmatter } = await compileMDX<FrontMatter>({
//     source: singleBlog,
//     options: { parseFrontmatter: true },
//   });

//   return frontmatter;
// };
// src/utils/mdx.ts
'use server';                                  // never bundle this file for the browser

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdxComponent';   // <-- central component map

/* ---------- types ---------- */
export type FrontMatter = {
  title: string;
  description?: string;
  date: string;         // ISO 8601 in your .mdx front-matter
  image?: string;
};

type BlogMeta = FrontMatter & { slug: string };

/* ---------- helpers ---------- */
const DATA_DIR = path.join(process.cwd(), 'src/data');

export async function getSingleBlog(slug: string) {
  try {
    const filePath = path.join(DATA_DIR, `${slug}.mdx`);
    const source   = await readFile(filePath, 'utf-8');

    if (!source) return null;

    // 1️⃣  Pass the real front-matter type
    // 2️⃣  Provide the component map so <Tip> etc. resolve
    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source,
      components: mdxComponents,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (err) {
    console.error(`⚠️  getSingleBlog: failed to read “${slug}.mdx”`, err);
    return null;
  }
}

export async function getBlogs(orderByDate = true) {
  const files = await readdir(DATA_DIR);

  const blogs: BlogMeta[] = await Promise.all(
    files
      .filter((f) => f.endsWith('.mdx'))
      .map(async (file) => {
        const slug        = file.replace(/\.mdx$/, '');
        const frontmatter = await getBlogFrontmatterBySlug(slug);
        return { slug, ...(frontmatter as FrontMatter) };
      }),
  );

  return orderByDate
    ? blogs.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      )
    : blogs;
}

export async function getBlogFrontmatterBySlug(slug: string) {
  const filePath = path.join(DATA_DIR, `${slug}.mdx`);
  const source   = await readFile(filePath, 'utf-8');

  if (!source) return null;

  const { frontmatter } = await compileMDX<FrontMatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
}

// import { Container } from "@/components/container";
// import { getBlogs } from "@/utils/mdx";
// import { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "All blogs - Suresh Choudhary",
//   description: "All my general wisdom and thoughts",
// };
// export default async function Blogpage() {
//   const allBlog = await getBlogs();

//   const truncate = (str: string, length: number) => {
//     return str.length > length ? str.substring(0, length) + "..." : str;
//   };

//   return (
//     <div className="flex min-h-screen items-start justify-start">
//       <Container className="min-h-[200vh] p-7 md:pt-20 md:pb-10">
//         <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
//           All blogs
//         </h1>

//         <div className="flex flex-col gap-10 py-10">
//           {allBlog.map((blog, idx) => (
//             <Link key={idx} href={`/blog/${blog.slug}`}>
//               <div className="flex items-center justify-between">
//                 <h2 className="text-primary text-base font-bold tracking-tight">
//                   {blog.title}
//                 </h2>
//                 <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
//                   {new Date(blog.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
//                 </p>
//               </div>
//               <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
//                 {truncate(blog.description || "", 150)}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// app/blog/page.tsx  (or your route file)
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "All blogs – Suresh Choudhary",
  description: "All my general wisdom and thoughts",
};

/* ---------- helpers ---------- */
type BlogMeta = {
  slug: string;
  title: string;
  description?: string;
  date: string; // ISO string
};

const truncate = (s: string, n: number) =>
  s.length > n ? s.slice(0, n) + "…" : s;

/* ---------- page ---------- */
export default async function BlogPage() {
  const blogs: BlogMeta[] = await getBlogs();

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>All blogs</Heading>

        <div className="flex flex-col gap-8 py-10">
          {blogs.map((blog) => {
            const published = new Date(blog.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            return (
              <Link
                key={blog.title}
                href={`/blog/${blog.slug}`}
                className="hover:bg-muted/30 block rounded-md p-4 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-primary text-base font-bold tracking-tight">
                    {blog.title}
                  </h2>
                  <p className="text-secondary text-sm">{published}</p>
                </div>

                <p className="text-secondary max-w-lg pt-2 text-sm">
                  {truncate(blog.description ?? "", 150)}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

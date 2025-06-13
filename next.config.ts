import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  transpilePackages: ["next-mdx-remote"],

  images: {
    remotePatterns: [
      {
        hostname: "i.pinimg.com",
      },
    ],
  },
};

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//   extension: /\.(md|mdx)$/,
// });

export default nextConfig;

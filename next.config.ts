// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* your existing config… */
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "in.pinterest.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Add this section to ignore ESLint errors on build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

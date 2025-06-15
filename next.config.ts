/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "", // optional
        pathname: "/**", // allow any path
      },
      {
        protocol: "https",
        hostname: "in.pinterest.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

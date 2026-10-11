import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Plain <img> tags are required by Lab 1, so don't let lint warnings
  // block the Vercel build.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

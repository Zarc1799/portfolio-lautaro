import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export for GitHub Pages / Vercel Static
  images: {
    unoptimized: true, // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

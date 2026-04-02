import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  serverExternalPackages: ["@prisma/client", "prisma"],
  // Allow cross-origin requests from preview and Render
  allowedDevOrigins: [
    'preview-chat-21eaf496-4b04-462b-8b12-4008ce419ce2.space.z.ai',
    '.space.z.ai',
    '.z.ai',
    '.onrender.com'
  ],
};

export default nextConfig;

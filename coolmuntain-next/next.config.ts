import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Coolmountain',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

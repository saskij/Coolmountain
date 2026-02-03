import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Coolmountain',
  assetPrefix: '/Coolmountain/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

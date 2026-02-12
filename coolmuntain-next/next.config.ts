import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/Coolmountain' : '',
  assetPrefix: isProd ? '/Coolmountain/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

console.log(`[NextConfig] base path: ${nextConfig.basePath}`);
console.log(`[NextConfig] asset prefix: ${nextConfig.assetPrefix}`);
console.log(`[NextConfig] isProd: ${isProd}`);

export default nextConfig;

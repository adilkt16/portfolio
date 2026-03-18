import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

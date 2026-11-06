import type { NextConfig } from "next";

const nextConfig: NextConfig = { 
  reactStrictMode: true,
  transpilePackages: ['@sanity/ui'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: [
    "*.run.app",
    "ais-dev-kijoc24wkr4aqjjm2hftsa-1032298773634.asia-southeast1.run.app",
    "ais-dev-smjyzdewws2g74nfxh27rz-1032298773634.asia-southeast1.run.app",
    "ais-pre-smjyzdewws2g74nfxh27rz-1032298773634.asia-southeast1.run.app",
  ],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

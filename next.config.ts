import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: [
    "aistudio.google.com",
    "ais-dev-kijoc24wkr4aqjjm2hftsa-1032298773634.asia-southeast1.run.app",
    "ais-dev-smjyzdewws2g74nfxh27rz-1032298773634.asia-southeast1.run.app",
    "ais-pre-smjyzdewws2g74nfxh27rz-1032298773634.asia-southeast1.run.app",
    "localhost:3000",
    "localhost:8080",
    "127.0.0.1:3000",
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tech.sparkfabrik.com",
      },
    ],
  },
};

export default nextConfig;

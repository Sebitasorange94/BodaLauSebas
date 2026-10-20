import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.0.2",
  ],
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
      {
        pathname: "/images/story/**",
        search: "?v=20261019",
      },
      {
        pathname: "/images/dress-code/**",
        search: "?v=20261019",
      },
    ],
  },
};

export default nextConfig;
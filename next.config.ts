import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/**", search: "" },
      {
        pathname: "/writing/redbus/problem-phone-mockup.png",
        search: "?v=20261016",
      },
    ],
  },
};

export default nextConfig;

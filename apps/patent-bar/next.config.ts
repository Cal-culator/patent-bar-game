import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@study-game/engine"],
  turbopack: {
    root: "../..",
  },
};

export default nextConfig;

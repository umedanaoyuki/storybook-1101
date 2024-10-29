import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    // styled-componentsの有効化
    styledComponents: true,
  },
};

export default nextConfig;

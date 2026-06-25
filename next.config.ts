import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // protocol to use
        hostname: "cdn.myanimelist.net", //link gambar dari web
      },
    ],
  },
  /* config options here */
};

export default nextConfig;

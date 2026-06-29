import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com"   },
    ],
  },
  // Twilio uses Node.js APIs — must run in nodejs runtime only
  serverExternalPackages: ["twilio"],
  
};

export default nextConfig;
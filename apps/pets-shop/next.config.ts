import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      afterFiles: [],
      beforeFiles: [],
      fallback:[
        {
          source: '/:path*',
          destination: "/api/:path*"
        }
      ]
    }
  },
};

export default nextConfig;

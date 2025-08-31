import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        pathname: '/api/character/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'photos.fife.usercontent.google.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'flowbite.s3.amazonaws.com',
      'https://randomuser.me',
    ],
  },
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ['Sarabun', 'Arial', 'Helvetica', 'sans-serif'],
  //     },
  //   },
  // },
};

export default nextConfig;
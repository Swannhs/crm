/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
  basePath: '/dashboard/pipelines',
  assetPrefix: '/dashboard/pipelines',
};

export default nextConfig;

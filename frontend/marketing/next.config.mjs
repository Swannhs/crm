/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
  basePath: '/dashboard/marketing',
  assetPrefix: '/dashboard/marketing',
};

export default nextConfig;

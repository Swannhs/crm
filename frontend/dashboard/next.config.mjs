/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  // Multi-zone configuration
  async rewrites() {
    return [
      {
        source: '/dashboard/contacts-mfe/:path*',
        destination: 'http://localhost:3001/dashboard/contacts-mfe/:path*',
      },
    ]
  },
};


export default nextConfig;

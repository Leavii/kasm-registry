/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Leavii\'s Kasm Registry',
    description: 'Leavii\'s Kasm Workspaces.',
    icon: 'https://avatars.githubusercontent.com/u/47951865?v=4',
    listUrl: 'https://leavii.github.io/kasm-registry',
    contactUrl: 'https://github.io/leavii/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Leavii\'s Kasm Registry',
    description: 'Leavii\'s Kasm Workspaces.',
    icon: '/img/logo.svg',
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

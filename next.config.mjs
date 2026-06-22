const nextConfig = {
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'www.bifrostsolutions.dk' }],
      destination: 'https://bifrostsolutions.dk/:path*',
      permanent: true,
    }]
  },
}

export default nextConfig

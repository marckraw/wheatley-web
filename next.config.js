/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require('@next/bundle-analyzer')

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const {API_URL} = process.env

module.exports = withPlugins([
  [withBundleAnalyzer],
], {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true, // https://betterprogramming.pub/react-strictmode-is-your-lifeline-for-the-future-1f73064d3bf8
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: `${API_URL}/:path*` // Proxy to Backend
      }
    ]
  },
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["en-US", "pl-PL"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "pl-PL",
  },
})

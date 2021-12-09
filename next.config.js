/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require('@next/bundle-analyzer')

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
  [withBundleAnalyzer],
], {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true, // https://betterprogramming.pub/react-strictmode-is-your-lifeline-for-the-future-1f73064d3bf8
})

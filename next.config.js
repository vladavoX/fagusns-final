/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['sr', 'en', 'ru'],
    defaultLocale: 'sr'
  }
}

module.exports = nextConfig

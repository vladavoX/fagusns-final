/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'sr', 'ru'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig

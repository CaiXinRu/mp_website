import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  env: {
    AUTH_GITHUB_ID: 'Ov23liY2hAEKsD3Nkene',
    AUTH_GITHUB_SECRET: 'be1b8c99f2893fc119a625c5cd2b917834aee002',
  },

  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)

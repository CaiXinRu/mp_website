import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'picsum.photos',
    },{
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
    },],
  },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)

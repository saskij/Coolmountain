import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Cool Mountain Transport',
        short_name: 'Cool Mountain',
        description: 'Reliable, safe, and on-time freight services. Serving the Western and Central US.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#b91c1c',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}

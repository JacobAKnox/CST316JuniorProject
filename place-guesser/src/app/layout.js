import { Inter } from 'next/font/google'
import './globals.css'

import dynamic from 'next/dynamic'
const StatisticsModal = dynamic(() => import('@/components/StatisticsModal'), {ssr:false})


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Place Guesser',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossOrigin=""/>
            <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossOrigin=""></script>
      </head>
      <body className={inter.className}>
        <div className="flex flex-col items-end p-5">
          <StatisticsModal/>
        </div>
        {children}
      </body>
    </html>
  )
}


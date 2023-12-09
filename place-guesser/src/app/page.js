import dynamic from "next/dynamic"
import StatisticsModal from '@/components/StatisticsModal'

const MapView = dynamic(() => import('@/components/map'), {ssr:false})
const CountrySearchBox = dynamic(() => import('@/components/countryselect'), {ssr: false})
const InfoPanel = dynamic(() => import('@/components/infopanel'), {ssr:false})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CountrySearchBox/>
      <MapView/>
      <InfoPanel/>
      <StatisticsModal/>
    </main>
  )
}

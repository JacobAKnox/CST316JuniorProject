import CountrySearchBox from '../components/countryselect'
import dynamic from "next/dynamic"
import InfoPanel from '../components/infopanel'

const MapView = dynamic(() => import('@/components/map'), {ssr:false})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CountrySearchBox/>
      <MapView/>
      <InfoPanel/>
    </main>
  )
}

import dynamic from "next/dynamic"

const MapView = dynamic(() => import('@/components/map'), {ssr:false})
const CountrySearchBox = dynamic(() => import('@/components/countryselect'), {ssr: false})
const InfoPanel = dynamic(() => import('@/components/infopanel'), {ssr:false})

export default function Game() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
        <div className="text-center text-3xl">
            What country has<br/>
            a city with the<br/>
            same name as: 
        </div>
        <div className="flex flex-row items-center justify-cent">
            <div className="m-10 w-[300px] text-center bg-slate-400 px-5 py-2 rounded-3xl">
                Find [placeholder]
            </div>
            <div className="m-10 w-[300px] text-center bg-slate-400 px-5 py-2 rounded-3xl">
                Test
            </div>
        </div>
        <MapView/>
        <CountrySearchBox/>
        <InfoPanel/>
    </main>
  )
}
import dynamic from "next/dynamic";

const GameLayout = dynamic(() => import('@/components/gamelayout'), {ssr:false})

export default function Game() {
  return (
    <main className="flex flex-col items-center justify-between p-6">
        <GameLayout/>
    </main>
  )
}
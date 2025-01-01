'use client'
import { Header } from "@app/components/ui";
import { Card } from "@app/modules/spots/components/card";
import { useSpotHook } from '@app/modules/spots'

export default function Dashboard(){
  const  { loading, spots} = useSpotHook()

  return <div className="w-screen h-screen bg-gray-200 flex flex-col items-center">
    <Header/>
    <div className="flex flex-col my-2 flex-1 w-full h-screen">
      <div className="w-full flex justify-center ">
          <button className="w-72 h-11  rounded-md bg-red-600 text-white font-semibold"> Criar Spot</button>
      </div>
      <div className="w-2/4  m-auto grid grid-cols-3 gap-3">
        {loading ? <></> : spots.map((spot) => <Card  card={spot} key={spot.id}/>)}
      </div>
    </div>
  </div>
}
import { Spot } from '@app/domain/models/spot';
import { useEffect, useState } from 'react'
import { spotService } from './spot-service'
import { toast } from 'sonner'

interface SpotHookProps{
  loading:boolean,
  spots:Spot[],
}

export const useSpotHook = ():SpotHookProps =>{
  const [loading, setLoading] = useState<boolean>(false)
  const [spots, setSpots] = useState<Spot[]>([]);

  const loadSpots = async() => {
    setLoading(true)
    try{
      const response = await spotService.loadSpot();
      setSpots(response);
      console.log(response);
    }catch(error){
      toast.error('Ocorreu um erro ao carregar a lista,tente mais tarde.')
      console.error(error)
    }finally{
      setLoading(false);
    }
  }

   useEffect(() => {
     loadSpots()
   },[])

  return { loading, spots}
}
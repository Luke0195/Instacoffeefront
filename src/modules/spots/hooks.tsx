/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapper, spotService, FormData, schema } from './'
import { Spot } from '@app/domain/models/spot';
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation'
import { UseFormReturn } from 'react-hook-form'

interface SpotHookProps{
  loading:boolean,
  spots:Spot[],
  form: UseFormReturn<FormData, any, undefined>
  onSubmit: () => Promise<void>
}

export const useSpotHook = ():SpotHookProps =>{
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false)
  const [spots, setSpots] = useState<Spot[]>([]);
  const form = useForm<FormData>({
    mode: 'all',
    reValidateMode:'onBlur',
    resolver: yupResolver(schema())
  })

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

  const onSubmit = async() =>{
    setLoading(true)
    try{
      const payload = mapper(form.getValues())
      await spotService.add(payload);
      toast.success("Operação realizada com sucesso!")
      router.push("/dashboard")
    }catch(error){
      toast.error('Occorreu um erro ao realizar essa ação!')
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  

   useEffect(() => {
     loadSpots()
   },[])

  return { loading, spots, form, onSubmit}
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddAccountParams } from '@app/domain/usecases/signup'
import { schema, service,} from './index'
import { useState, Dispatch, SetStateAction } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface SignUpHookProps{
  loading:{
    loading: boolean
    setLoading:Dispatch<SetStateAction<boolean>>
  }
  form:UseFormReturn<AddAccountParams, any, undefined>
  onSubmit: () => Promise<void>
}


export const useSignUpHook = ():SignUpHookProps => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<AddAccountParams>({
    resolver: yupResolver(schema()),
    mode: 'all',
    
    reValidateMode:'onBlur',
    defaultValues: { email: '', name: ''}
  })

  const onSubmit = async() => {
    setLoading(true)
    try{
      const payload = form.getValues();
      await service.add(payload)
      console.log(payload)
    }catch(error:any){
      console.log(error);

    }finally{
      setLoading(false)
    }
  }

  return {
     form,
     loading: { loading, setLoading},
     onSubmit
  }

}
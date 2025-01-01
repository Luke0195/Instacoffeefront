/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { AuthenticationParams } from '@app/domain/usecases/authentication'
import { authenticationService } from './authentication-service'
import { schema } from './index'
import { useState, Dispatch, SetStateAction } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

interface AuthenticationHookProps {
  loading:{
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>
  }
   
  form:UseFormReturn<AuthenticationParams, any, undefined>
  onSubmit: () => Promise<void>
}

export const useAuthenticationHook = ():AuthenticationHookProps => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false);
  
  const form = useForm<AuthenticationParams>({
    resolver: yupResolver(schema()),
    reValidateMode:'onBlur',
    defaultValues: { email: ''}
  })

  console.log(form.formState.errors)
  const onSubmit = async() => {
    setLoading(true)
    try{
      const payload = form.getValues();
      console.log(payload);
      const response = await authenticationService.auth(payload);
      localStorage.setItem("@aircnc:user", JSON.stringify(response))
      toast.success('Ação realizada com sucesso!');
      router.push('/dashboard')

    }catch(error:any){
      console.error(error);
      toast.error("Operação Invalida!");
    }finally{
      setLoading(false)
    }
  }

  return { loading:{ loading, setLoading}, form, onSubmit }
  
}
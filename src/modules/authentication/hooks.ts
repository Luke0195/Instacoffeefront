import { useState, Dispatch, SetStateAction } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, FormData } from './index'
import { authenticationService } from './authentication-service'
import { toast } from 'sonner'

interface AuthenticationHookProps {
  loading:{
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form:UseFormReturn<FormData, any, undefined>
  onSubmit: () => Promise<void>
}

export const useAuthenticationHook = ():AuthenticationHookProps => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<FormData>({
    resolver: yupResolver(schema()),
    defaultValues: { email: ''}
  })

  const onSubmit = async() => {
    setLoading(true)
    try{
      const payload = form.getValues();
      console.log(payload);
      const response = await authenticationService.auth(payload);
      toast('Ação realizada com sucesso!');
      console.log(response);
    }catch(error){
      toast('Operação Inválida');
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  return { loading:{ loading, setLoading}, form, onSubmit }
  
}
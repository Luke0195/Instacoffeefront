/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddAccountParams } from '@app/domain/usecases/signup'
import { schema, service,} from './index'
import { useState, Dispatch, SetStateAction } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
interface SignUpHookProps{
  loading:{
    loading: boolean
    setLoading:Dispatch<SetStateAction<boolean>>
  }
  form:UseFormReturn<AddAccountParams, any, undefined>
  onSubmit: () => Promise<void>
}


export const useSignUpHook = ():SignUpHookProps => {
  const router = useRouter();
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
      toast.success('Usuário cadastrado com successo!')
      toast.info('Você será redirecionado para a tela de login em instantes.')
      router.push('/')
    }catch(error:any){
      toast.error('Ocorreu um erro ao realizar o cadastro.')
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
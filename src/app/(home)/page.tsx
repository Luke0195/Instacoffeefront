'use client'
import { useAuthenticationHook } from '@app/modules/authentication'
import { Label,Input, Button, Spinner, FieldError } from '@app/components/ui'
import { Controller } from 'react-hook-form'
import Link from 'next/link'

export default function Login() {
  const { 
    form:{ control, handleSubmit, formState: { isValid, errors}}, 
    loading:{ loading }, 
    onSubmit } =  useAuthenticationHook();
   return (
     <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
       <h2 className="text-gray-700 font-bold text-center text-2xl"> InstaCoffee</h2>
       <form className='flex flex-col items-center justify-center w-1/4 auto' onSubmit={handleSubmit(onSubmit)}>
         <div className='w-full'>
           <Label className='font-semibold my-2 text-gray-700 block'> Email </Label>
           <Controller 
              name="email"
              control={control}
              render={({ field}) => <Input placeholder="Informe o e-mail" className='border-gray-300 border' {...field} />}
           />
           {errors.email?.message && <FieldError message={errors.email.message}/>}
         </div>
         <Button className='bg-blue-500 w-full my-3 font-bold hover:bg-blue-400' disabled={loading || !isValid} type='submit'> {loading ? <Spinner/> : 'Logar'} </Button>
         <Link href="/signup" className='text-gray-400 font-normal text-sm'> Criar Conta </Link>
       </form>
     </div>
   )
}


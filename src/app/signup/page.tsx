'use client';
import { useSignUpHook } from '@app/modules/signup'
import {Label, Input, FieldError, Spinner, Button } from '@app/components/ui'
import { Controller} from 'react-hook-form'


export default function Signup(){
  const { form, onSubmit, loading:{ loading} } = useSignUpHook();
  const { handleSubmit, control, formState:{errors, isValid} } = form;
  console.log(form.formState.errors)
  return   <div className="w-screen  h-screen p-8 flex flex-col items-center justify-center">
  <h2 className="text-2xl font-bold text-gray-300"> Criar sua Conta</h2>
  <form className='flex flex-col items-center justify-center w-96' onSubmit={handleSubmit(onSubmit)}>
  <div className='w-full'>
    <Label className='font-semibold my-2 text-gray-700 block'> Nome </Label>
    <Controller 
       name="name"
       control={control}
       render={({ field}) => <Input placeholder="Informe o nome" className='border-gray-300 border' {...field} />}
    />
    {errors.name?.message && <FieldError message={errors.name.message}/>}
  </div>
  <div className='w-full'>
    <Label className='font-semibold my-2 text-gray-700 block'> Email </Label>
    <Controller 
       name="email"
       control={control}
       render={({ field}) => <Input placeholder="Informe o e-mail" className='border-gray-300 border' {...field} />}
    />
    {errors.email?.message && <FieldError message={errors.email.message}/>}
  </div>
  <Button className='bg-blue-500 w-full my-3 font-bold hover:bg-blue-400' disabled={loading || !isValid} type='submit'> {loading ? <Spinner/> : 'Cadastrar'} </Button>
</form>
</div>
}
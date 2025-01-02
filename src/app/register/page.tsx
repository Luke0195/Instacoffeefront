'use client';
import { Label, Input, FieldError, Button, Spinner } from '@app/components/ui'
import { Controller } from "react-hook-form";
import { useSpotHook } from '@app/modules/spots'
 

export  default function Register(){
  const { form, onSubmit, loading } = useSpotHook()
  const { handleSubmit, control,  formState:{ errors, isValid}, } = form;
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
    <Label className='font-semibold my-2 text-gray-700 block'> Thumbnail </Label>
    <Controller 
       name="thumbnail"
       control={control}
       render={({ field}) => <Input placeholder="Informe a url da thumbnail" className='border-gray-300 border' {...field} />}
    />
    {errors.thumbnail?.message && <FieldError message={errors.thumbnail.message}/>}
  </div>
  <div className='w-full'>
    <Label className='font-semibold my-2 text-gray-700 block'> Techs </Label>
    <Controller 
       name="techs"
       control={control}
       render={({ field }) => <Input placeholder="Informe as tecnologias separadas por virgula" className='border-gray-300 border' {...field} />}
    />
    {errors.techs?.message && <FieldError message={errors.techs.message}/>}
  </div>
  <div className='w-full'>
    <Label className='font-semibold my-2 text-gray-700 block'> Preço </Label>
    <Controller 
       name="price"
       control={control}
       render={({ field}) => <Input placeholder="Informe o preço" className='border-gray-300 border' {...field} />}
    />
    {errors.price?.message && <FieldError message={errors.price.message}/>}
  </div>
  <Button className='bg-blue-500 w-full my-3 font-bold hover:bg-blue-400' disabled={loading || !isValid} type='submit'> {loading ? <Spinner/> : 'Cadastrar'} </Button>
</form>
</div>
}
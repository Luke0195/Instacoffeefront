'use client'

import { Input, Label, Button } from '@app/components/ui'
import Link from 'next/link';


export default function Login() {
  return (
      <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
        <div className="w-1/3   p-8">
          <h2 className="text-gray-700 font-bold text-center text-2xl"> InstaCoffee</h2>
          <form className='flex flex-col items-center justify-center'>
            <div className='w-full'>
              <Label className='font-semibold my-2 text-gray-700 block'> Email </Label>
              <Input placeholder="Informe o e-mail" className='border-gray-300 border'/>
            </div>
            <Button className='bg-blue-500 w-full my-3 font-bold hover:bg-blue-400'> Logar </Button>
            <Link href="/register" className='text-gray-400 font-normal text-sm'> Criar Conta </Link>
          </form>
        </div>

      </div>
    
  );
}


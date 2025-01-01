import { User } from '@app/domain/models/user'

export type AddAccountParams = {
  email: string,
  name: string
}

export interface AddAccount{
  add(params:AddAccountParams):Promise<User>
}
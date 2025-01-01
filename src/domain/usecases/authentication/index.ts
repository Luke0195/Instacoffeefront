import { User } from "@app/domain/models/user"

export type AuthenticationParams ={
   email: string
}

export interface Authentication{
  auth(params: AuthenticationParams):Promise<User> 
}
import { Spot } from '@app/domain/models/spot'

export type AddSpotParams ={
  name: string,
  thumbnail: string,
  techs:string[],
  price: number
}

export interface AddSpot{
  add(params: AddSpotParams):Promise<Spot>
}
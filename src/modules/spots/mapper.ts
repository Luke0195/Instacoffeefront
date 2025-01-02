import { AddSpotParams } from "@app/domain/usecases/spots"
import {FormData} from './interfaces'

export const mapper = (payload:FormData):AddSpotParams => {
  return {
    name: payload.name !== null ? payload.name : '-',
    thumbnail: payload.thumbnail !== null ? payload.thumbnail : '-',
    price: payload.price !== null ? Number(payload.price) : 0,
    techs: payload.techs !== null ? payload.techs.split(',') : [''],
  }
}
import { Spot } from "@app/domain/models/spot";

export interface LoadSpots{
  loadSpot():Promise<Spot[]>
}
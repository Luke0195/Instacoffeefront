import { Spot } from '@app/domain/models/spot'
import moment from 'moment';
import { BsBuildings } from "react-icons/bs";

export interface ComponentProps{
  card:Spot
}
export function Card(props:ComponentProps){
  const { card } = props;

  return <div className='flex flex-col border-2 border-gray-500 w-96 '>
      <BsBuildings size={52} color="grey"/>
      <div>
        <strong className='text-xl my-2'> {card.name} </strong>
        <div>
        <b> Preço: {card.price > 0 ? card.price : 'Gratuito'} </b>
        <p> <b>Criado:</b> {moment(card.createdAt).format('DD/MM/yyyy')}</p>
        </div>
      </div>

  </div>
}
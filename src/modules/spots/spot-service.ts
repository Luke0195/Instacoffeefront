import { Spot } from "@app/domain/models/spot";
import { LoadSpots } from "@app/domain/usecases/spots";
import { service } from '@app/config'
import { validation } from '@app/utils/validators'

class SpotService implements LoadSpots{
 async loadSpot(): Promise<Spot[]> {
    const response = await service.get('/spots');
    validation.validateResponse({response, statusCode:200, displayErrorMessage: 'Não foi possível carregar a lista de spots no momento'});
    return response.data;
  }
}

const spotService = new SpotService();

export { spotService};
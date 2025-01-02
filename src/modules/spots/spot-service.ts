import { Spot } from "@app/domain/models/spot";
import { LoadSpots, AddSpot, AddSpotParams } from "@app/domain/usecases/spots";
import { service } from '@app/config'
import { validation } from '@app/utils/validators'

class SpotService implements LoadSpots, AddSpot{

 async loadSpot(): Promise<Spot[]> {
    const response = await service.get('/spots');
    validation.validateResponse({response, statusCode:200, displayErrorMessage: 'Não foi possível carregar a lista de spots no momento'});
    return response.data;
  }

  async add(params:AddSpotParams): Promise<Spot> {
    const response = await service.post('/spots', params);
    validation.validateResponse({ response, statusCode: 201, displayErrorMessage: 'Não foi possível cadastrar o erro spot'})
    return response.data;
  }
}

const spotService = new SpotService();

export { spotService};
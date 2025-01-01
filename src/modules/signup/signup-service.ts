import { User } from '@app/domain/models/user';
import {AddAccount, AddAccountParams} from '@app/domain/usecases/signup'
import { service as apiService } from '@app/config'
import { validation } from '@app/utils/validators'
class SignUpService implements AddAccount{
  async add(params: AddAccountParams): Promise<User> {
    const response = await apiService.post("/users", params);
    validation.validateResponse({statusCode:201, response, displayErrorMessage: 'Não foi possivel realizar o cadastro'});
    return response.data;
  }

}


const service = new SignUpService();

export { service }
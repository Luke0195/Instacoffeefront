import { User } from '@app/domain/models/user';
import { Authentication, AuthenticationParams } from '@app/domain/usecases/authentication'
import { service } from '../../config/index'
import { validation } from '@app/utils/validators'

class AuthenticationService implements Authentication {

  async auth(params: AuthenticationParams): Promise<User> {
    const response  = await service.post("/authenticate", params)
    validation.validateResponse({ response, statusCode: 200, displayErrorMessage: 'Operação invalida \n Não foi possível encontrar esse usuário' })
    return response.data;
  }
}

const authenticationService = new AuthenticationService();
export {authenticationService };
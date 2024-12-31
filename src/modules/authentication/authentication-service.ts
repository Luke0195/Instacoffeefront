import { User } from '@app/domain/models/user';
import { Authentication, AuthenticationParams } from '@app/domain/usecases/authentication'
import { service } from '../../config/index'

class AuthenticationService implements Authentication {

  
  async auth(params: AuthenticationParams): Promise<User> {
    const response  = await service.post("/authenticate", params)
    if(response.status !== 200) throw new Error('Operação invalida \n Não foi possível encontrar esse usuário');
    if(typeof response.data !== 'object') throw new Error('Invalid response');
    return response.data;
  }
}

const authenticationService = new AuthenticationService();
export {authenticationService };
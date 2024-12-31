import { User } from '@app/domain/models/user';
import { Authentication, AuthenticationParams } from '@app/domain/usecases/authentication'
import { service } from '../../config/index'

class AuthenticationService implements Authentication {

  async auth(params: AuthenticationParams): Promise<User> {
    const { data }  = await service.post("/authenticate", params)
    console.log(data);
    return {} as User;
  }
}

const authenticationService = new AuthenticationService();
export {authenticationService };
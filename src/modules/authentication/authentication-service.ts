import { User } from '@app/domain/models/user';
import { Authentication, AuthenticationParams } from '@app/domain/usecases/authentication'
import { service } from '../../config/index'

class AuthenticationService implements Authentication {

  auth(params: AuthenticationParams): Promise<User> {
    throw new Error('Method not implemented.');
  }

}
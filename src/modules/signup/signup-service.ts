import { User } from '@app/domain/models/user';
import {AddAccount, AddAccountParams} from '@app/domain/usecases/signup'

class SignUpService implements AddAccount{
  async add(params: AddAccountParams): Promise<User> {
    console.log({ params })
    throw new Error('Method not implemented.');
  }

}


const service = new SignUpService();

export { service }
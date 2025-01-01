import { HttpResponseValidationParams } from './interfaces'


class Validation {
  
  validateResponse({  response, statusCode, displayErrorMessage}:HttpResponseValidationParams):void{
    if(response.status !== statusCode) throw new Error(displayErrorMessage);
    if(typeof response.data !== 'object') throw new Error('Ocorreu um erro ao processar essa requisição.Tente mais tarde!');
    return;
  }
}

const validation = new Validation();
export { validation }



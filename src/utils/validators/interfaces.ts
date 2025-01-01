/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";

export interface HttpResponseValidationParams {
  response:AxiosResponse<any, any>
  statusCode: number,
  displayErrorMessage:string
}
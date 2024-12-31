

type FieldError  ={
   name: string,
   description: string
}

export interface HttpResponseData {
  timestamp:string,
   status_code: number, 
   error: string,
   message: string, 
   path: string,
   errors:FieldError[] 

}
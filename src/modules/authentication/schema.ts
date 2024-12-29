import * as yup from 'yup'


const schema = () => {
 return yup.object({
  email: yup.string()
  .email('Por favor informe um email válido')
  .required('O campo e-mail é obrigatório')
 })
}

export { schema }
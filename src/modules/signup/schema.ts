import * as yup from 'yup';


const schema = () => {
  return yup.object({
   email: yup.string().required('O campo email é obrigatório').email('Por favor informe um e-mail mail válido'),
   name: yup.string().required('O campo nome deve ser obrigatório')
  })
}

export { schema }
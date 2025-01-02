import * as yup from 'yup';


const schema = () => {
 return  yup.object({
    name: yup.string().required('O campo nome é obrigatório'),
    thumbnail: yup.string().required('O campo thumbnail é obrigatório'),
    price: yup.number().required('O campo preço é obrigatório'),
    techs: yup.string().required('O campo techs é obrigatŕoio')
  })
}

export { schema }
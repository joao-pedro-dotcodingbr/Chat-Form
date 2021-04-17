import * as Yup from 'yup';

const Schema = Yup.object().shape({

    name: Yup.string().matches(/^[a-záàâãéèêíïóôõöúçñ ]+$/i, 'Apenas letras').required('campo obrigatório'),
    localization: Yup.string().required('campo obrigatório'),
    birth: Yup.string().matches(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/, 'data invalida, exemplo(dd/mm/yyyy)'),
    email: Yup.string().email('email mal formatado').required('campo obrigatório'),
    assessment: Yup.number().required('campo obrigatório')

});

export default Schema
import * as yup from 'yup';

const formSchema = yup.object().shape({

    name:yup.string().trim().min(2,'name must be at least 2 characters'),

    size:yup.string().required('Must pick a size'),
    
    special:yup.string().trim(),

    bacon: yup.boolean(),
    pepperoni: yup.boolean(),
    ham: yup.boolean(),
    sausage: yup.boolean(),
    onion: yup.boolean(),
    olives: yup.boolean(),
    tomato: yup.boolean(),
    jalapeno: yup.boolean()
    
})

export default formSchema;
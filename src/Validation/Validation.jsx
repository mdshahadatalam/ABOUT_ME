import * as Yup from 'yup';

export const  validationSchema = Yup.object({
    name:Yup.string().min(5).max(10).required('Please enter your name'),
    email:Yup.string().email().required('Please enter your email'),
    number:Yup.number().max(11).required('Please enter your number'),
    Subject:Yup.string().required('Please enter subject'),
    message:Yup.string().min(10).max(99).required('Please enter message'),

})

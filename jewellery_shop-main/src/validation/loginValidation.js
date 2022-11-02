import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    Username: yup.string().required(),
    Password: yup.string().min(5).max(15).required()
})
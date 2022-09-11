import * as yup from 'yup'

export const modalCreateFormSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  username: yup.string().required().label('Username'),
  password: yup.string().required().label('Password'),
  url: yup.string().required().label('URL').url()
})

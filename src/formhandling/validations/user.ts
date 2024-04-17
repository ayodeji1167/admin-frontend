import * as yup from 'yup';
export const userFormSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format'),
  phoneNumber: yup.string(),
  address: yup.string(),
});

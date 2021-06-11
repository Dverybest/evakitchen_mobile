import * as yup from 'yup';

export const userSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full legal name is required')
    .test('test first & last name', 'Enter both first and last name', value => {
      const names = value?.split(' ');
      return !!names && !!names[0] && !!names[1];
    }),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .test('text number', 'Invaild phone number', value => {
      return /^\+234[0-9]{10}$|^0[0-9]{10}$/.test(value ?? '');
    }),
    address: yup
    .string()
    .required('Address is required'),
});

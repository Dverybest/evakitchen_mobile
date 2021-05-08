import * as yup from 'yup';

export const userSchema = yup.object().shape({
  full_name: yup
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
  password: yup
    .string()
    .required('Password is required')
    .test(
      'test password',
      'Invalid password',
      value =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9])(?!.*\s).{8,}$/.test(
          value ?? '',
        ) &&
        value !== undefined &&
        value.length >= 8,
    ),
  phone_number: yup
    .string()
    .required('Phone number is required')
    .test('text number', 'Invaild phone number', value => {
      return /^\+234[0-9]{10}$|^0[0-9]{10}$/.test(value ?? '');
    }),
});

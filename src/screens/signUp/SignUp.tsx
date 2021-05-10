import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import logo from '../../assets/images/logo.png';
import {ButtonGoogle, ButtonPrimary} from '../../components/buttons';
import {TextField} from '../../components/textfield';
import {orange, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import {Formik, FormikHelpers} from 'formik';
import {userSchema} from './userSchema';

const SignUp = () => {
  const {navigate} = useNavigation();
  const handleSubmit = (
    values: {
      password: string;
      email: string;
    },
    actions: FormikHelpers<{
      full_name: string;
      phone_number: string;
      password: string;
      email: string;
    }>,
  ) => {
    actions.setFieldError('password', 'Hiii');
    actions.setFieldError('email', 'Hiii');
  };
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={TextStyle.semiBold}>Create your account</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={TextStyle.medium}>
          Please sign up to start using the application
        </Text>
        <Formik
          initialValues={{
            full_name: '',
            phone_number: '',
            password: '',
            email: '',
          }}
          validationSchema={userSchema}
          onSubmit={(values, actions) => handleSubmit(values, actions)}>
          {props => {
            return (
              <>
                <TextField
                  placeholder="Fullname"
                  containerStyle={{marginTop: 50}}
                  value={props.values.full_name}
                  onChangeText={props.handleChange('full_name')}
                  errorMessage={
                    props.touched.full_name && props.errors.full_name
                  }
                />
                <TextField
                  keyboardType={'email-address'}
                  placeholder="Email"
                  value={props.values.email}
                  onChangeText={props.handleChange('email')}
                  errorMessage={props.touched.email && props.errors.email}
                />
                <TextField
                  keyboardType={'phone-pad'}
                  placeholder="Phone number"
                  value={props.values.phone_number}
                  onChangeText={props.handleChange('phone_number')}
                  errorMessage={
                    props.touched.phone_number && props.errors.phone_number
                  }
                />
                <TextField
                  placeholder="Password"
                  password={true}
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  errorMessage={props.touched.password && props.errors.password}
                />
                <ButtonPrimary
                  text="Sign Up"
                  containerStyle={{marginBottom: 31, marginTop: 20}}
                  onPress={props.handleSubmit}
                />
              </>
            );
          }}
        </Formik>
        <ButtonGoogle
          text="Sign Up with Google"
          containerStyle={{marginBottom: 50}}
        />
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => navigate('SignIn')}>
          <Text style={TextStyle.regular}>
            {`Already have an account? `}
            <Text style={[TextStyle.regular, {color: orange}]}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    paddingHorizontal: 25,
    paddingTop: 18,
  },
  image: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
  },
});
export default SignUp;

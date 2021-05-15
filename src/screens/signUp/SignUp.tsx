import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
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
import {useRequestProcessor} from '../../api/requestProcessor';
import {AuthContext} from '../../context/authContext';
import {ISignUpDetails} from '../../interfaces/user';

const SignUp = () => {
  const {navigate} = useNavigation();
  const {dispatchAuthState} = useContext(AuthContext);
  const {makeRequest} = useRequestProcessor();
  const handleSubmit = async (
    values: ISignUpDetails,
    actions: FormikHelpers<ISignUpDetails>,
  ) => {
    const {response, error} = await makeRequest({
      url: 'auth/signup',
      method: 'POST',
      payload: values,
    });
    if (error) {
      console.log(error);
      actions.setFieldError('email', error.message);
      actions.setFieldError('password', error.message);
    } else if (response && response?.success) {
      /**
       * TODOs:
       *  Dispatch USER_DETAILS data to auth context
       *  remove all console.log
       */
      console.log(response);
    }
    // TODO: remove this navigation here
    navigate('Dashboard');
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
            fullName: '',
            email: '',
            password: '',
            contact: '',
          }}
          validationSchema={userSchema}
          onSubmit={(values, actions) => handleSubmit(values, actions)}>
          {props => {
            return (
              <>
                <TextField
                  placeholder="Fullname"
                  containerStyle={{marginTop: 50}}
                  value={props.values.fullName}
                  onChangeText={props.handleChange('fullName')}
                  errorMessage={props.touched.fullName && props.errors.fullName}
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
                  value={props.values.contact}
                  onChangeText={props.handleChange('contact')}
                  errorMessage={props.touched.contact && props.errors.contact}
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

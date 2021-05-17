import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {white, orange} from '../../styles/colors';
import {ButtonGoogle, ButtonPrimary} from '../../components/buttons';
import {TextField} from '../../components/textfield';
import logo from '../../assets/images/logo.png';
import {useNavigation} from '@react-navigation/core';
import {TextStyle} from '../../styles/textStyle';
import {Formik, FormikHelpers} from 'formik';
import {signInSchema} from './signInSchema';
import {useRequestProcessor} from '../../api/requestProcessor';
import {ISignInDetails} from '../../interfaces/user';
import {ActionType} from '../../context/enums';
import {AuthContext} from '../../context/authContext';

const SignIn = () => {
  const {navigate} = useNavigation();
  const {dispatchAuthState} = useContext(AuthContext);

  const {makeRequest} = useRequestProcessor();
  const handleSubmit = async (
    values: ISignInDetails,
    actions: FormikHelpers<ISignInDetails>,
  ) => {
    const {response, error} = await makeRequest({
      url: '/auth/login',
      method: 'POST',
      payload: values,
    });
    if (error) {
      actions.setFieldError('email', error.message);
      actions.setFieldError('password', error.message);
    } else if (response && response?.success) {
      dispatchAuthState({
        type: ActionType.USER_DETAILS,
        payload: response.data,
      });
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
        <Text style={styles.header}>Welcome back</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headerTitle}>
            Please log in to continue from where you stopped
          </Text>
          <Formik
            initialValues={{password: '', email: ''}}
            validationSchema={signInSchema}
            onSubmit={(values, actions) => handleSubmit(values, actions)}>
            {props => {
              return (
                <>
                  <TextField
                    errorMessage={props.touched.email && props.errors.email}
                    keyboardType={'email-address'}
                    placeholder="Email"
                    containerStyle={{marginTop: 50}}
                    value={props.values.email}
                    onChangeText={props.handleChange('email')}
                  />
                  <TextField
                    errorMessage={
                      props.touched.password && props.errors.password
                    }
                    placeholder="Password"
                    password={true}
                    value={props.values.password}
                    onChangeText={props.handleChange('password')}
                  />
                  <TouchableOpacity>
                    <Text
                      style={{
                        color: orange,
                        ...TextStyle.regular,
                      }}>
                      Forgot password?
                    </Text>
                  </TouchableOpacity>
                  <ButtonPrimary
                    text="Sign In"
                    containerStyle={{marginBottom: 31, marginTop: 20}}
                    onPress={props.handleSubmit}
                  />
                </>
              );
            }}
          </Formik>
          <ButtonGoogle
            text="Sign In with Google"
            containerStyle={{marginBottom: 50}}
          />
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => navigate('SignUp')}>
            <Text style={TextStyle.regular}>
              {`Don’t have an account? `}
              <Text style={[TextStyle.regular, {color: orange}]}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 25,
    backgroundColor: white,
  },
  header: {
    ...TextStyle.semiBold,
    marginBottom: 20,
  },
  headerTitle: {
    ...TextStyle.medium,
    width: 281,
  },
  image: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
    marginTop: 18,
  },
});
export default SignIn;

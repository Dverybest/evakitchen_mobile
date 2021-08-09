import {useNavigation} from '@react-navigation/core';
import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import logo from '../../assets/images/logo.png';
import {ButtonGoogle, ButtonPrimary} from '../../components/buttons';
import {TextField} from '../../components/textfield';
import {orange, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import {Formik, FormikHelpers} from 'formik';
import {userSchema} from './userSchema';
import {useRequestProcessor} from '../../api/requestProcessor';
import {ISignUpDetails} from '../../interfaces/user';
import {AuthContext} from '../../context/authContext';
import {ActionType} from '../../context/enums';
import {baseUrl} from '../../api/config';

const SignUp = (props: any) => {
  const {dispatchAuthState} = useContext(AuthContext);
  const {navigate} = useNavigation();
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
      actions.resetForm();
    } else if (response && response?.success) {
      dispatchAuthState({
        type: ActionType.USER_DETAILS,
        payload: response.data,
      });
    }
  };
  const handleGoogleSignIn = async () => {
    Linking.openURL(baseUrl + '/auth/google');
  };

  const decodeQueryParams = (uriParams: string): any => {
    return uriParams.split('&').reduce(
      (acc, current) => ({
        ...acc,
        [current.split('=')[0]]: current.split('=')[1],
      }),
      {},
    );
  };

  const handleOpenURL = ({url}: {url: string}) => {

    let uri = decodeURI(url);
    if (!/(?=login)/.test(uri)) return;

    uri = uri.replace('eva-kitchen://login?', '');

    if(/#$/.test(uri)){
      uri = uri.replace(/#$/,'')
    }

    const result = JSON.parse(decodeQueryParams(uri).data);
    dispatchAuthState({
      type: ActionType.TOKEN,
      payload: result.token,
    });
    dispatchAuthState({
      type: ActionType.USER_DETAILS,
      payload: result.user,
    });
  };

  useEffect(() => {
    Linking.addEventListener('url', handleOpenURL);
    Linking.getInitialURL().then(url => {
      if (url) {
        handleOpenURL({url});
      }
    });

    return () => {
      Linking.removeEventListener('url', handleOpenURL);
    };
  }, [props.route.params]);

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
            phoneNumber: '',
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
                  value={props.values.phoneNumber}
                  onChangeText={props.handleChange('phoneNumber')}
                  errorMessage={
                    props.touched.phoneNumber && props.errors.phoneNumber
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
          onPress={handleGoogleSignIn}
        />
        <TouchableOpacity
          style={{alignItems: 'center', marginBottom: 20}}
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

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
import {baseUrl} from '../../api/config';

const SignIn = (props: any) => {
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
      const {authToken, ...userDetails} = response.data;
      dispatchAuthState({
        type: ActionType.USER_DETAILS,
        payload: userDetails,
      });
      dispatchAuthState({
        type: ActionType.TOKEN,
        payload: response.data.authToken,
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
                  {/* <TouchableOpacity>
                    <Text
                    onPress={()=>navigate('ForgetPassword')}
                      style={{
                        ...TextStyle.regular,
                        color: orange,
                      }}>
                      Forgot password?
                    </Text>
                  </TouchableOpacity> */}
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
            onPress={handleGoogleSignIn}
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

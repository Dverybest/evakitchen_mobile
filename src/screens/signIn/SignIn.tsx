import React from 'react';
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

const SignIn = () => {
  const {navigate} = useNavigation();
  const handleSubmit = (
    values: {
      password: string;
      email: string;
    },
    actions: FormikHelpers<{
      password: string;
      email: string;
    }>,
  ) => {
    actions.setFieldError('password', 'Hiii');
    actions.setFieldError('email', 'Hiii');
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
              console.log(props.errors);
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
                        marginLeft: 20,
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

import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Formik} from 'formik';
import {useNavigation,useRoute} from '@react-navigation/native';
import * as Colors from '../../style/colors';
import {ButtonPrimary} from '../../component/buttons';
import {
  FormInputWithLabel as TextInput,
  FormInputPasswordWithLabel as PasswordInput,
} from '../../component/textInput';
import TextStyle from '../../style/textStyle';
import Success from '../signUp/component/success';
import {useRequestProcessor} from '../../api/requestProcessor';
import {Header} from '../../component/header';
import { resetPasswordSchema } from '../dashboard/settings/changePasswordSchema';

const ResetPassword = (props) => {
  const {makeRequest} = useRequestProcessor();
  const [showSuccess, setShowSuccess] = useState({show:false,message:''});
  const {reset} = useNavigation();
  const {params} = useRoute();

  const handleResetPassword = async (data, actions) => {
      const payload ={
        token :params.token,
        email : params.email,
        new_password: data.new_password,
        confirm_new_password: data.confirm_new_password
      }
    const {response, error} = await makeRequest({
      method: 'post',
      url: '/users/reset-password',
      payload,
      retry:handleResetPassword
    });
    if (error) {
     alert(error.message)
    } else if (response) {
     setShowSuccess({show:response.success,message:response.message})
    }
  };

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flex: 1,
        position: 'relative',
      }}>
      <Header showGoBack={true} />
      <Success
          isSuccessful={showSuccess.show}
          onPress={() => {
            setShowSuccess({...showSuccess,show:false});
            reset({ index: 0, routes: [{ name: 'AuthStack',params:{screen:'Login'} }] })
          }}
          text={showSuccess.message}
          buttonText={'Ok'}
        />
      <ScrollView style={styles.container}>
        <Formik
          initialValues={{
            new_password: '',
            confirm_new_password: '',
          }}
          validationSchema={resetPasswordSchema}
          onSubmit={(values, actions) => handleResetPassword(values, actions)}>
          {(props) => {
            return (
              <>
                <View style={{flex: 1}}>
                  <Text style={[TextStyle.headersSemibold]}>
                  Reset password
                  </Text>
                  <Text
                    style={[
                      TextStyle.bodySmall,
                      styles.bodyText,
                      {color: Colors.black800},
                    ]}>
                    Create a password that you’ll remember. And if you don’t, we are here for you.
                  </Text>
                  <PasswordInput
                    label={'New password'}
                    returnKeyType={'done'}
                    value={props.values.new_password}
                    message={props.errors.new_password}
                    onChangeText={props.handleChange('new_password')}
                  />
                  <PasswordInput
                    label={'Confirm new password'}
                    returnKeyType={'done'}
                    value={props.values.confirm_new_password}
                    message={
                      props.touched.confirm_new_password &&
                      props.errors.confirm_new_password
                    }
                    isLogin={true}
                    onChangeText={props.handleChange('confirm_new_password')}
                  />
                  <ButtonPrimary
                    text="Reset password"
                    onPress={props.handleSubmit}
                    containerStyle={styles.button}
                  />
                </View>
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    zIndex: 0,
  },
  bodyText: {
    marginTop: 16,
    marginBottom: 32,
  },
  button: {
    marginTop: 50,
    marginBottom: 32,
  },
});
export default ResetPassword;

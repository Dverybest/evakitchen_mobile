import React, {useState, useContext, useEffect, Fragment} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/header';
import {TextField as TextInput} from '../../components/textfield';
import {ButtonPrimary} from '../../components/buttons';
import { forgetPasswordSchema } from './forgetPasswordSchema';
import { useRequestProcessor } from '../../api/requestProcessor';
import { black, white } from '../../styles/colors';
import Success from '../../components/success';
import { baseUrl } from '../../api/config';



const ForgetPassword = () => {
    const {navigate,reset} = useNavigation();
    const [isSuccessful, setIsSuccessful] = useState({show:false,message:'',email:''})
    const { makeRequest } = useRequestProcessor();

    const handleSend = async (payload) => {
      const { response, error } = await makeRequest({
          method: 'post',
          url: '/auth/reset-password-mail',
          payload,
          retry:handleSend
      });
      console.log({ response, error });
      if (error) {
          alert(error.message);
      } else if (response) {
          setIsSuccessful({show:response.success,message:response.message});
      }
  }
  return (
    <>
      <Header showGoBack={true}  title={'Forgot password'} containerStyle={{backgroundColor:white}}/>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Success
          visible={isSuccessful.show}
          onPress={() => {
            setIsSuccessful({...isSuccessful,show:false});
            reset({ index: 0, routes: [{ name: 'AuthStack',params:{screen:'Login'} }] })
          }}
          text={isSuccessful.message}
          buttonText={'Ok'}
        />
          <Text
            containerStyle={styles.bodyText}
            textStyle={{color: black}}
            text={`Enter the email address you used when you joined and we’ll send you instructions to reset your password.`}
          />
          <Text
            containerStyle={styles.bodyText}
            textStyle={{color: black}}>
              {`For security reasons, we do NOT store your password. So be rest assured that we will never send your password via email.`}
          </Text>
          <Formik
            initialValues={{email: ''}}
            validationSchema={forgetPasswordSchema}
            onSubmit={(values, actions) => handleSend(values)}
          >
            {(props) => {
              return (
                <>
                  <TextInput
                    label={'Email'}
                    containerStyle={styles.textInputContainer}
                    placeholder={'Email'}
                    message={props.touched.email && props.errors.email}
                    value={props.values.email}
                    returnKeyType="done"
                    keyboardType="email-address"
                    onChangeText={props.handleChange('email')}
                  />

                  <ButtonPrimary
                    text="Send reset instructions"
                    onPress={props.handleSubmit}
                    containerStyle={styles.button}
                  />
                </>
              );
            }}
          </Formik>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 25,
    backgroundColor:white
  },
  button: {
    marginVertical: 24,
  },
  headerText: {},
  bodyText: {
    marginTop: 10,
  },
  textInputContainer: {
    marginBottom: 16,
    marginTop: 48,
  },
});

export default ForgetPassword;

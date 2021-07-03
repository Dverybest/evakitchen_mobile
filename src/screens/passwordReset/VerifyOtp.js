import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { useNavigation,useRoute } from '@react-navigation/native';
import Background from '../../component/background';
import * as Colors from '../../style/colors';
import TextStyle from '../../style/textStyle';
import { TextBodySmall, TextHeaderSemibold } from '../../component/text';
import { ButtonPrimary } from '../../component/buttons';
import { FormInputWithLabel as TextInput } from '../../component/textInput';
import Success from '../signUp/component/success';
import { useRequestProcessor } from '../../api/requestProcessor';
import { emailOTPSchema } from '../signUp/userSchema';
import { Header } from '../../component/header';

const VerifyOtp = (props) => {
    const navigation = useNavigation();
    const {params} = useRoute();
    const { makeRequest } = useRequestProcessor();

    const [tips, setTips] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);

    const [timer, setTimer] = useState(30);


    useEffect(() => {

        const interval = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);
        }, 1000)

        if (timer === 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer])

    const handleEmailVerification = async (payload, actions) => {
        setTips('');
        
        const { response, error } = await makeRequest({
            method: 'post',
            url: '/users/verify-forgot-password-token',
            payload,
            retry:handleEmailVerification
        });
        if (error) {
            actions.setFieldTouched('token', true);
            actions.setFieldError('token', error.message);
        } else if (response) {
            navigation.replace('ResetPassword',{ email: params.email,token:payload.token });
        }
    }

    const handleResend = async () => {
        setTips('')
        const { response, error } = await makeRequest({
            method: 'post',
            url: '/users/forgot-password-request',
            payload: { email: params.email }
        })
        if (response) {
            setTips('Your OTP has been resent')
        } else if (error) {
            setTips(error.message)
        }
        setTimer(30)
    }

    return (
        <Background>
            <Header showGoBack={true}/>
            <View style={styles.container}>

                <View style={{ flex: 1 }}>
                    <TextHeaderSemibold containerStyle={styles.headerText} text={'Enter OTP'} />
                    <TextBodySmall containerStyle={styles.bodyText}
                        textStyle={{ color: Colors.black800 }}
                        text={`We just need to verify that it’s you so someone else dosen’t change your password.`} />
                    <Formik
                        initialValues={{ token: '', email: params.email }}
                        validationSchema={emailOTPSchema}
                        onSubmit={(values, actions) => handleEmailVerification(values, actions)}>
                        {
                            (props) => {
                                return (
                                    <>
                                        <TextInput
                                            label={'Enter OTP'}
                                            containerStyle={styles.textInputContainer}
                                            placeholder={'Enter OTP'}
                                            message={props.touched.token && props.errors.token}
                                            value={props.values.token}
                                            keyboardType='numeric'
                                            tips={tips}
                                            onChangeText={(text) => {
                                                props.setFieldValue('token', text)
                                                tips !== '' && setTips('')
                                            }}
                                        />

                                        <ButtonPrimary
                                            text='Verify'
                                            onPress={props.handleSubmit}
                                            containerStyle={styles.button}
                                        />
                                    </>
                                )
                            }
                        }

                    </Formik>
                </View>
                <TouchableOpacity
                    disabled={timer}
                    onPress={handleResend}
                    style={{ marginBottom: 50 }}>
                    <Text style={[TextStyle.bodySmall, { textAlign: 'center' }]} >
                        Didn’t get the code?  <Text style={{ color: timer? Colors.black800:Colors.blue, marginLeft: 10 }}>{`Resend ${timer !== 0 ? `: ${timer}` : ''}`}</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </Background >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 25,

    },
    headerText: {
    },
    bodyText: {
        marginTop: 16,
        marginBottom: 32,
    },
    textInputContainer: {
        marginBottom: 16
    },
    termsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 19
    },
    lineContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        flex: 1
    },
    line: {
        height: 1,
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.black200
    },
    socialButtonContainer: {
        flexDirection: 'row',
        marginVertical: 24
    },
    socialButton: {
        flex: 1
    }
});
export default VerifyOtp;
import React, {useContext, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {grey100, orange, orange300, white} from '../../styles/colors';
import {TextStyle} from '../../styles/textStyle';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UploadOption from './components/modals/uploadOption';
import {Header} from '../../components/header';
import {TextField} from '../../components/textfield';
import {ButtonPrimary} from '../../components/buttons';
import {AuthContext} from '../../context/authContext';
import {Formik} from 'formik';
import {IUser} from '../../interfaces/user';
import {userSchema} from './userSchema';
import {useRequestProcessor} from '../../api/requestProcessor';

const Profile = () => {
  const {authState, dispatchAuthState} = useContext(AuthContext);
  const {makeRequest} = useRequestProcessor();
  const [showUploadOption, setShowUploadOption] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  const handleUpload = (photo: any, setSelected: any) => {
    setPhotoUrl(photo.uri);
    setSelected({show: false});
    setShowUploadOption(false);
  };

  const handleSubmit = async (values: IUser) => {
    const {response, error} = await makeRequest({
      url: '/user/update',
      method: 'PATCH',
      payload: values,
    });
    if (error) {
      console.log(error);
    } else if (response && response?.success) {
      console.log(response.data);
      // const {authToken, ...userDetails} = response.data;
      // dispatchAuthState({
      //   type: ActionType.USER_DETAILS,
      //   payload: userDetails,
      // });
      // dispatchAuthState({
      //   type: ActionType.TOKEN,
      //   payload: response.data.authToken,
      // });
    }
  };

  return (
    <View style={{backgroundColor: white, flex: 1}}>
      <Header title="Profile" />
      <ScrollView>
        <View style={styles.container}>
          <UploadOption
            show={showUploadOption}
            setShow={setShowUploadOption}
            handleUpload={handleUpload}
          />
          <View style={{alignItems: 'center', marginBottom: 32}}>
            <View style={styles.profileImageContainer}>
              {photoUrl !== '' ? (
                <Image source={{uri: photoUrl}} style={styles.image} />
              ) : (
                <View
                  style={{
                    backgroundColor: orange300,
                    height: 156,
                    width: 156,
                    borderRadius: 78,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{...TextStyle.semiBold, fontSize: 40, color: white}}>
                    CB
                  </Text>
                </View>
              )}

              <View style={styles.cameraBox}>
                <TouchableOpacity>
                  <Feather
                    name="camera"
                    color={white}
                    size={13}
                    onPress={() => setShowUploadOption(true)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Formik
            initialValues={{
              fullName: authState.user?.fullName || '',
              email: authState.user?.email || '',
              phoneNumber: authState.user?.phoneNumber || '',
              address: authState.user?.address || '',
            }}
            validationSchema={userSchema}
            onSubmit={values => handleSubmit(values)}>
            {props => {
              return (
                <>
                  <TextField
                    placeholder="Name"
                    containerStyle={{}}
                    value={props.values.fullName}
                    onChangeText={props.handleChange('fullName')}
                    errorMessage={
                      props.touched.fullName && props.errors.fullName
                    }
                  />
                  <TextField
                    placeholder="Email"
                    containerStyle={{}}
                    value={props.values.email}
                    onChangeText={props.handleChange('email')}
                    errorMessage={props.touched.email && props.errors.email}
                  />
                  <TextField
                    placeholder="eg. 07061011343"
                    containerStyle={{}}
                    value={props.values.phoneNumber}
                    onChangeText={props.handleChange('phoneNumber')}
                    errorMessage={
                      props.touched.phoneNumber && props.errors.phoneNumber
                    }
                  />
                  <TextField
                    placeholder="eg. 2a. Abakaliki Road"
                    containerStyle={{height: 85}}
                    multiline={true}
                    value={props.values.address}
                    onChangeText={props.handleChange('address')}
                    errorMessage={props.touched.address && props.errors.address}
                  />
                  <ButtonPrimary
                    text="Save"
                    containerStyle={{marginBottom: 35, marginTop: 25}}
                    onPress={props.handleSubmit}
                  />
                </>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 33,
    paddingTop: 44,
    backgroundColor: white,
  },
  profileImageContainer: {
    height: 156,
    width: 156,
    marginBottom: 10,
  },
  image: {
    height: 156,
    width: 156,
    borderRadius: 78,
  },
  cameraBox: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: orange,
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {
    height: 54,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: grey100,
    flexDirection: 'row',
  },
});
export default Profile;

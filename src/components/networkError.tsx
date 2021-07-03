import React, {useContext} from 'react';
import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import CardStyle from '../styles/cardStyle';
import {black, red, white} from '../styles/colors';
import maintenance from '../assets/images/maintenance.png';
import internetError from '../assets/images/internetError.png';
import {TextStyle} from '../styles/textStyle';
import {ButtonPrimary} from './buttons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppContext} from '../context/appContext';
import {ActionType} from '../context/enums';

interface NetworkError {
  visible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  errorType: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  card: {
    ...CardStyle.card,
    alignItems: 'center',
    backgroundColor: white,
    paddingHorizontal: 40,
  },
  image: {
    height: 147,
    width: 226,
    marginTop: 38,
  },
});
const NetworkError = () => {
  const {appState, dispatchAppState} = useContext(AppContext);
  return (
    <Modal visible={appState.isNetworkError || appState.isServerError}>
      <View
        style={{paddingHorizontal: 25, alignItems: 'flex-end', marginTop: 18}}>
        <AntDesign
          name="closesquareo"
          color={black}
          size={24}
          onPress={() =>
            dispatchAppState({
              type: appState.isServerError
                ? ActionType.IS_SERVER_ERROR
                : ActionType.IS_NETWORK_ERROR,
              payload: false,
            })
          }
        />
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={
              appState.isServerError
                ? maintenance
                : appState.isNetworkError
                ? internetError
                : null
            }
            style={styles.image}
          />
          <Text
            style={{
              marginTop: 27,
              ...TextStyle.semiBold,
              color: red,
              fontSize: 18,
            }}>
            Something went wrong
          </Text>
          <Text
            style={{
              ...TextStyle.regular,
              marginTop: 16,
              marginBottom: 89,
              fontSize: 16,
              textAlign: 'center',
            }}>
            {appState.isServerError
              ? 'We are working on fixing the problem. Please try again.'
              : appState.isNetworkError
              ? 'Check your internet connection and try again.'
              : null}
          </Text>
        </View>
        <ButtonPrimary text="Try again" containerStyle={{marginTop: 70}} />
      </View>
    </Modal>
  );
};

export default NetworkError;

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {white, orange, black} from '../../styles/colors';
import {Button} from '../../components/buttons';
import {TextField} from '../../components/textfield';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Welcome back</Text>
        <Text style={styles.headerTitle}>
          Please log in to continue from where you stopped
        </Text>
        <TextField placeholder="Email" marginBottom={31} marginTop={51} />
        <TextField placeholder="Password" password marginBottom={18} />
        <Text style={{color: orange, marginLeft: 20}}>Forgot password?</Text>
        <Button
          title="Sign In"
          buttonProperty={{color: white, backgroundColor: orange}}
          marginBottom={31}
          marginTop={20}
        />
        <Button
          title="Sign In with Google"
          buttonProperty={{color: black, backgroundColor: white}}
          marginBottom={101}
        />
        <View>
          <Text>Don’t have an account? Sign up</Text>
        </View>
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
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 42,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 24,
    width: 281,
  },
});
export default SignIn;

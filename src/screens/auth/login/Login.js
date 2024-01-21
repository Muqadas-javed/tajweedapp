import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Imagelink from '../../../Imagelink';
const LoginScreen = ({navigation}) => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both username and password.');
    } else {
      navigation.navigate('Dashboard', {username});
    }
  };
  const handleSignUpNavigation = () => {
    // Navigate to the sign-up screen
    navigation.navigate('SignUp');
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image source={Imagelink.Logo} style={styles.logoimage} />
        <Text style={styles.title}>User Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            placeholderTextColor="grey"
            value={username}
            onChangeText={text => setusername(text)}
          />
          <Icon name="user-circle" size={20} style={styles.icon} />
        </View>
        <Text style={styles.title}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon
              name={passwordVisible ? 'eye-slash' : 'eye'}
              size={20}
              color="grey"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => handleLogin()}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUpNavigation}>
            <Text style={styles.signUpLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Image source={Imagelink.mosque} style={styles.bottomimage} />
      </View>
    </KeyboardAwareScrollView>
  );
};

LoginScreen.navigationOptions = {
  title: 'Login',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
  },
  logoimage: {
    width: 150,
    height: 150,
    margin: 30,
    alignSelf: 'center',
    marginBottom: 80,
  },
  title: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 30,
    fontWeight: '600',
    paddingBottom: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  input: {
    height: 45,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 0.7,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 13,
    color: 'grey',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 47,
    color: 'grey',
  },
  loginButton: {
    backgroundColor: '#44A7C6',
    padding: 15,
    borderRadius: 10,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 40,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    marginRight: 5,
    color: 'black',
  },
  signUpLink: {
    color: 'black',
    fontWeight: 'bold',
  },
  bottomimage: {
    width: '100%',
    height: 130,
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: -10,
    resizeMode: 'contain',
  },
});

export default LoginScreen;

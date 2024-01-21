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
import Fonts from '../../../assets/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Imagelink from '../../../Imagelink';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleSignUp = () => {
    if (confirmPassword === password) {
      // Passwords match, navigate to the next screen
      navigation.navigate('Login'); // Replace 'NextScreen' with the actual screen name
    } else {
      // Passwords don't match, handle accordingly (e.g., show an error message)
      Alert('Passwords do not match');
    }
  };

  const handleSignUpNavigation = () => {
    // Navigate to the sign-up screen
    navigation.navigate('Login');
  };

  const isSignupEnabled = confirmPassword === password;

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image source={Imagelink.Logo} style={styles.logoimage} />
        <Text style={styles.title}>User Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            placeholderTextColor="grey"
            value={Text}
            keyboardType="text"
          />
          <Icon name="user-circle" size={20} style={styles.icon} />
        </View>
        <Text style={styles.title}>Email ID</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Emai ID"
            placeholderTextColor="grey"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Icon name="envelope" size={20} style={styles.icon} />
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
        <Text style={styles.title}>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
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
          style={[
            styles.SignupButton,
            {backgroundColor: isSignupEnabled ? '#44A7C6' : 'grey'},
          ]}
          onPress={handleSignUpNavigation}
          disabled={!isSignupEnabled}>
          <Text style={styles.SignupButtonText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an Account?</Text>
          <TouchableOpacity onPress={handleSignUpNavigation}>
            <Text style={styles.signUpLink}> Login</Text>
          </TouchableOpacity>
        </View>
        <Image source={Imagelink.mosque} style={styles.bottomimage} />
      </View>
    </KeyboardAwareScrollView>
  );
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
    justifyContent: 'center',
  },
  input: {
    height: 45,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 0.7,
    marginBottom: 15,
    paddingLeft: 20,
    borderRadius: 13,
    color: 'grey',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 47,
    color: 'grey',
  },
  SignupButton: {
    backgroundColor: '#44A7C6',
    padding: 15,
    borderRadius: 10,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginTop: 10,
  },
  SignupButtonText: {
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

export default SignUpScreen;

// SplashScreen.js
import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Imagelink from '../../../Imagelink';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Imagelink.SplashScreen} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DBDCE3',
  },
  image: {
    width: '110%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;

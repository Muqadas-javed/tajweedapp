import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Imagelink from '../../../Imagelink';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const KeyboardScreen = () => {
  const [pressedKeys, setPressedKeys] = useState('');
  const navigation = useNavigation(); // Initialize navigation object

  const handleKeyPress = key => {
    setPressedKeys(prevPressedKeys => prevPressedKeys + key);
  };

  const handleDelete = () => {
    setPressedKeys(prevPressedKeys =>
      prevPressedKeys.slice(0, prevPressedKeys.length - 1),
    );
  };
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Icon name="arrow-left" size={30} color="#44A7C6" />
          </TouchableOpacity>
          <View style={styles.Imagecontainer}>
            <Image
              source={Imagelink.Quran}
              style={styles.courseImage}
              resizeMode="contain"
            />
          </View>
        </View>
        {pressedKeys !== '' && (
          <View style={styles.topContainer}>
            <Text style={styles.topText}>{pressedKeys}</Text>
          </View>
        )}
        <View style={styles.keyboardContainer}>
          {Array.from({length: 11}, (_, index) => {
            const key = String.fromCharCode('A'.charCodeAt(0) + index);
            return (
              <TouchableOpacity
                key={key}
                style={styles.keyButton}
                onPress={() => handleKeyPress(key)}>
                <Text style={styles.keyText}>{key}</Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            style={[styles.keyButton, {backgroundColor: '#44A7C6'}]}
            onPress={handleDelete}>
            <Text style={styles.keyText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginTop: -190,
    backgroundColor: '#EAF0F1',
    borderRadius: 50,
    padding: 10,
  },
  keyboardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  keyButton: {
    width: '30%',
    aspectRatio: 1, // Maintain square shape
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#44A7C6', // Specified color
    borderRadius: 8,
    marginBottom: 10,
  },
  Imagecontainer: {
    width: '70%',
    height: 260,
    shadowOpacity: 0.18,
  },
  courseImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  topContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  topText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#44A7C6',
  },
  keyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default KeyboardScreen;

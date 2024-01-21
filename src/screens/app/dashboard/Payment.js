import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Imagelink from '../../../Imagelink';
import Fonts from '../../../assets/Fonts';
import Dashboard from './Dashboard';
import CourseDetailScreen from './Detail';

const PaymentScreen = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [amount, setAmount] = useState('');
  const navigation = useNavigation();
  const handlebackbutton = () => {
    navigation.goBack();
  };
  const handlePayNow = () => {
    Alert.alert(
      'Payment Successful',
      'Thank you for your purchase!',
      [
        {
          text: 'OK',
          style: 'cancel',
          onPress: () => navigation.goBack(),
        },
      ],
      {
        backgroundColor: 'white',
        color: '#44A7C6',
        titleStyle: styles.alertTitle,
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlebackbutton} style={styles.backbtn}>
          <Icons name="arrow-left" size={30} color="#44A7C6" />
        </TouchableOpacity>
        <Text style={styles.title}>Card Details</Text>
      </View>

      <View style={styles.cardImagesContainer}>
        <Image source={Imagelink.rupay} style={styles.cardImage} />
        <Image source={Imagelink.mastercard} style={styles.cardImage} />
        <Image source={Imagelink.visa} style={styles.cardImage} />
      </View>

      <Text style={styles.cardtitle}> Name on Card</Text>
      <View style={styles.inputcard}>
        <TextInput
          style={styles.input}
          placeholder="Card Name"
          placeholderTextColor="#44A7C6"
          value={cardName}
          onChangeText={text => setCardName(text)}
        />
      </View>

      <Text style={styles.cardtitle}> Card Number </Text>
      <View style={styles.inputcard}>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#44A7C6"
          value={cardNumber}
          onChangeText={text => setCardNumber(text)}
        />
      </View>

      <View style={styles.inlineInputs}>
        <View>
          <Text style={styles.cardtitle}> Expiration Date</Text>
          <View style={styles.inputcard}>
            <TextInput
              style={styles.input}
              placeholder="Expiry Date               "
              placeholderTextColor="#44A7C6"
              value={expiryDate}
              onChangeText={text => setExpiryDate(text)}
            />
          </View>
        </View>

        <View>
          <Text style={styles.cardtitle}> Amount</Text>
          <View style={styles.inputcard}>
            <TextInput
              style={styles.input}
              placeholder="Amount                   "
              placeholderTextColor="#44A7C6"
              value={amount}
              onChangeText={text => setAmount(text)}
            />
          </View>
        </View>
      </View>

      <Text style={styles.paymenttitle}>Payment Summary:</Text>
      <Text style={styles.paymentSummary}>
        Card Name: {'\t\t\t\t\t'}
        {cardName}
        {'\n'}
        Card Number: {'\t\t\t\t\t'}
        {cardNumber}
        {'\n'}
        Expiry Date: {'\t\t\t\t\t'}
        {expiryDate}
        {'\n'}
        Amount:{'\t\t\t\t\t'}
        {amount}
      </Text>

      <TouchableOpacity onPress={handlePayNow} style={styles.payNowButton}>
        <Text style={styles.payNowButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backbtn: {
    backgroundColor: '#EAF0F1',
    borderRadius: 50,
    padding: 10,
  },
  inputcard: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardtitle: {
    color: '#44A7C6',
    paddingBottom: 10,
    fontFamily: Fonts.family.semiBold,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  cardImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    padding: 20,
  },
  cardImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
  },
  input: {
    padding: 10,
    color: 'black',
  },
  inlineInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    color: '#44A7C6',
  },
  alertTitle: {
    color: '#44A7C6',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentSummary: {
    fontSize: 16,
    marginBottom: 20,
    color: '#44A7C6',
  },
  paymenttitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#44A7C6',
    textAlign: 'center',
  },
  payNowButton: {
    backgroundColor: '#44A7C6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  payNowButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;

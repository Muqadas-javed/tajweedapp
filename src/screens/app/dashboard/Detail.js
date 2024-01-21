import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../../../assets/Fonts';
import Imagelink from '../../../Imagelink';

const CourseDetailScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  const handleEnroll = () => {
    navigation.navigate('Payment');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Icon name="arrow-left" size={30} color="#44A7C6" />
      </TouchableOpacity>
      <View style={styles.Imagecontainer}>
        <Image
          source={Imagelink.Hadith}
          style={styles.courseImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Course Detail</Text>
      <View style={styles.details}>
        <Icon name="calendar" size={24} color="#EAF0F1" style={styles.icon} />
        <Text style={styles.date}> Monday 18, Jan, 2024 </Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.pricetxt}> Price </Text>
        <Text style={styles.priceshown}> $10.00</Text>
      </View>
      <View style={styles.details}>
        <Icon name="clock" size={24} color="#EAF0F1" style={styles.icon} />
        <Text style={styles.time}> 10:00 AM</Text>
      </View>
      <View style={styles.descriptioncontainer}>
        <View style={styles.titlecon}>
          <Icon
            name="clipboard-text-search-outline"
            size={28}
            style={styles.detailicon}
          />
          <Text style={styles.destitle}> Details</Text>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, sed 1 km from consectetuer adipiscing
          elit, sed Fro along diam nonummy nibh euismod the a shop tincidunt ut
          laoreet dolore dolor sit amet, sed 1 km from consectetuer adipiscing
          elit, sed Fro along diam nonummy nibh euismod the a shop tincidunt ut
          laoreet dolore
        </Text>
      </View>
      <View style={styles.descriptioncontainer}>
        <View style={styles.titlecon}>
          <Icon
            name="file-document-outline"
            size={28}
            style={styles.detailicon}
          />
          <Text style={styles.destitle}> Entry Requirements</Text>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, sed 1 km from consectetuer adipiscing
          elit, sed Fro along diam nonummy nibh euismod the a shop tincidunt ut
          laoreet dolore dolor sit amet, sed 1 km from consectetuer adipiscing
          elit, sed Fro along diam nonummy nibh euismod the a shop tincidunt ut
          laoreet dolore
        </Text>
      </View>
      <TouchableOpacity onPress={handleEnroll} style={styles.enrollButton}>
        <Text style={styles.enrollButtonText}>Enroll</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: '#EAF0F1',
    borderRadius: 50,
    padding: 10,
  },
  Imagecontainer: {
    marginRight: 18,
    backgroundColor: '#f4f4f4',
    borderBottomWidth: 0.25,
    borderBottomColor: 'gray',
    width: '100%',
    height: 260,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  courseImage: {
    width: '80%',
    height: 270,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: Fonts.family.bold,
    color: '#44A7C6',
    padding: 20,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'grey',
    paddingLeft: 20,
  },
  icon: {
    width: 26,
    height: 26,
    color: '#44A7C6',
  },
  price: {
    position: 'absolute',
    top: 330,
    left: 250,
  },
  pricetxt: {
    color: 'grey',
    paddingLeft: 16,
  },
  priceshown: {
    color: '#44A7C6',
    fontSize: 28,
    fontWeight: '600',
  },
  titlecon: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  description: {
    color: '#666',
  },
  date: {
    color: 'grey',
  },
  time: {
    color: 'grey',
  },
  descriptioncontainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
  },
  detailicon: {
    color: '#44A7C6',
  },
  destitle: {
    color: 'black',
    fontSize: 24,
    fontFamily: Fonts.family.bold,
  },
  enrollButton: {
    backgroundColor: '#44A7C6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
  },
  enrollButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CourseDetailScreen;

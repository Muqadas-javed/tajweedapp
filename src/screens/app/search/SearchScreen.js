import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Fonts from '../../../assets/Fonts';
import categories from '../../../data/Categories';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Imagelink from '../../../Imagelink';

const Dashboard = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = categories
    .filter(category =>
      category.data.some(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    )
    .map(category => ({
      ...category,
      data: category.data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }));
  const handleDashboardNavigation = () => {
    navigation.navigate('Detail');
  };
  const renderCategory = ({item}) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => handleDashboardNavigation()}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <View style={styles.timeContainer}>
          <Feather
            name="disc"
            size={12}
            color="black"
            style={styles.discIcon}
          />
          <Text style={styles.itemTime}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image
          source={Imagelink.searchScreen}
          style={styles.courseImage}
          resizeMode="contain"
        />
        <View style={styles.searchInputContainer}>
          <Feather
            name="search"
            size={20}
            color="#a5a5a5"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#a5a5a5"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
      <FlatList
        data={filteredData}
        renderItem={({item}) => (
          <>
            <FlatList
              data={item.data}
              renderItem={renderCategory}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  courseImage: {
    width: '85%',
    height: 260,
    marginTop: 20,
    alignSelf: 'center',
    resizeMode: 'center',
    borderRadius: 30,
    borderColor: '#44A7C6',
    marginBottom: 20,
    borderWidth: 7,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 13,
    alignSelf: 'center',
    borderBottomWidth: 0.25,
    borderBottomColor: 'gray',
    marginBottom: 20,
    padding: 15,
    width: '88%',
    height: 90,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 3,
  },
  imageContainer: {
    backgroundColor: '#EAF0F1',
    borderRadius: 10,
    marginRight: 25,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 17,
    fontFamily: Fonts.family.regular,
    color: '#44A7C6',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 180,
    left: 50,
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  searchInput: {
    flex: 1,
    color: '#44A7C6',
  },
  searchIcon: {
    marginLeft: 20,
  },
  itemDescription: {
    fontSize: 13,
    color: 'black',
    fontFamily: Fonts.family.semiBold,
  },
  itemImage: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discIcon: {
    marginRight: 3,
  },
  itemTime: {
    color: 'grey',
  },
});

export default Dashboard;

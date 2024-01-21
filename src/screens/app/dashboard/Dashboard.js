import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Fonts from '../../../assets/Fonts';
import categories from '../../../data/Categories';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
const Dashboard = ({route}) => {
  const { username } = route.params;
  const navigation = useNavigation();
  const handleDashboardNavigation = () => {
    navigation.navigate('Detail');
  };
  const renderCategory = ({item}) => (
    <ScrollView>
      <Text style={styles.courseTitle}>{item.Title}</Text>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <FlatList
          horizontal
          data={item.data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handleDashboardNavigation()}>
              <View style={styles.imagecontainer}>
                <Image source={item.image} style={styles.itemImage} />
              </View>
              <View style={styles.detail}>
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
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello {username},</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: Fonts.family.bold,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    color: 'black',
    fontFamily: Fonts.family.semiBold,
  },
  courseTitle: {
    fontSize: 18,
    marginTop: 20,
    color: 'black',
    fontFamily: Fonts.family.semiBold,
  },
  itemContainer: {
    marginRight: 18,
    backgroundColor: 'white',
    borderRadius: 13,
    borderBottomWidth: 0.25,
    borderBottomColor: 'gray',
    width: 140,
    height: 180,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  imagecontainer: {
    backgroundColor: '#EAF0F1',
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 6,
  },
  detail: {
    paddingTop: 10,
    paddingLeft: 5,
  },
  itemTitle: {
    fontSize: 17,
    fontFamily: Fonts.family.regular,
    color: '#44A7C6',
  },
  itemDescription: {
    fontSize: 13,
    color: 'black',
    fontFamily: Fonts.family.semiBold,
  },
  itemImage: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
  },
  time: {
    color: 'grey',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discIcon: {
    marginRight: 3,
    marginLeft: 3,
  },
  itemTime: {
    color: 'grey',
  },
});

export default Dashboard;

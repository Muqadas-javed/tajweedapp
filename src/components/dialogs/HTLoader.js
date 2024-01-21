import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
const HTLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#44A7C6" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
export default HTLoader;

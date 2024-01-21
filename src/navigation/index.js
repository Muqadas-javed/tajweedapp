import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HTLoader from '../components/dialogs/HTLoader';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_SUCCESS} from '../store/actions/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './AppNavigator';

const Container = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    AsyncStorage.getItem('userInfo').then(userInfo => {
      if (userInfo != null) {
        dispatch({type: LOGIN_SUCCESS, payload: JSON.parse(userInfo)});
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
    return () => {};
  }, [dispatch]);
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Container;

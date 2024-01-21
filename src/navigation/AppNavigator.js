import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/app/dashboard/Dashboard';
import SearchScreen from '../screens/app/search/SearchScreen';
import Feather from 'react-native-vector-icons/Feather';
import Account from '../screens/app/account/Account';
import Services from '../screens/app/services/Services';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DeatilScreen from '../screens/app/dashboard/Detail';
import Payment from '../screens/app/dashboard/Payment';
import categories from '../data/Categories';
import SplashScreen from '../screens/app/dashboard/SplashScreen';
import LoginScreen from '../screens/auth/login/Login';
import SignUpScreen from '../screens/auth/register/Register';

const Tab = createBottomTabNavigator();
const DashboardStack = createNativeStackNavigator();
const DashboardStackScreens = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen
      name={'Splash'}
      component={SplashScreen}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'Account'}
      component={Account}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'Login'}
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'SignUp'}
      component={SignUpScreen}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'Dashboard'}
      component={Dashboard}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'Detail'}
      component={DeatilScreen}
      options={{headerShown: false}}
    />
    <DashboardStack.Screen
      name={'Payment'}
      component={Payment}
      options={{headerShown: false}}
    />
  </DashboardStack.Navigator>
);

function getTabBarVisibility(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (
    routeName === 'Detail' ||
    routeName === 'Payment' ||
    routeName === 'Login' ||
    routeName === 'Splash' ||
    routeName === 'SignUp'
  ) {
    return 'none';
  }
  return 'flex';
}
const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {display: getTabBarVisibility(route)},
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Services') {
            iconName = focused ? 'book-open' : 'book-open';
          } else if (route.name === 'Search') {
            iconName = focused ? 'grid' : 'grid';
          } else if (route.name === 'Account') {
            iconName = focused ? 'user' : 'user';
          }
          return <Feather name={iconName} size={30} color={color} />;
        },
        tabBarLabel: '',
        tabBarActiveTintColor: '#44a7c6',
      })}>
      <Tab.Screen
        name="Home"
        component={DashboardStackScreens}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

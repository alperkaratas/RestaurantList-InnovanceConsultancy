import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register, Home, RestaurantsList} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Provider from '../context/Provider';
import {RestaurantDetails, MenuList} from '../components';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const icons = {
  Home: (
    <Image
      style={{width: 25, height: 25}}
      source={require('../assets/homepage.png')}
    />
  ),
  Restaurants: (
    <Image
      style={{width: 28, height: 28}}
      source={require('../assets/restaurant.png')}
    />
  ),
  Menus: (
    <Image
      style={{width: 28, height: 28}}
      source={require('../assets/menu.png')}
    />
  ),
};

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: () => icons[route.name],
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 15,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsList}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="Register"
            component={Register}
          />
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="RestaurantDetails"
            component={RestaurantDetails}
          />
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="MenuList"
            component={MenuList}
          />
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="Tabs"
            component={Tabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;

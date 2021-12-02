// In App.js in a new project

import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register, Home, RestaurantsList, MenusList} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Provider from '../context/Provider';
import Context from '../context/store';

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
      <Tab.Screen
        name="Menus"
        component={MenusList}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

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
            options={{headerShown: false}}
            name="Register"
            component={Register}
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

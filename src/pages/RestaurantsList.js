import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import axios from 'axios';

const RestaurantsList = props => {
  const [restaurants, setRestaurants] = useState({});

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const getAllRestaurants = () => {
    axios.get('https://foodbukka.herokuapp.com/api/v1/restaurant').then(res => {
      setRestaurants(res.data.Result);
    });
  };

  console.log('restorantlar', restaurants);
  return (
    <SafeAreaView>
      <View>
        <Text>Restaurants List</Text>
      </View>
    </SafeAreaView>
  );
};

export {RestaurantsList};

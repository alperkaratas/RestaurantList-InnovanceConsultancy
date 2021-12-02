import React, {useEffect, useState, useCallback} from 'react';
import {SafeAreaView, View, RefreshControl, Text, FlatList} from 'react-native';
import axios from 'axios';
import {RestaurantsCard} from '../components';

const RestaurantsList = props => {
  const [restaurants, setRestaurants] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getAllRestaurants();
  }, []);
  useEffect(() => {
    getAllRestaurants();
  }, [refreshing]);

  const getAllRestaurants = () => {
    axios.get('https://foodbukka.herokuapp.com/api/v1/restaurant').then(res => {
      setRestaurants(res.data.Result);
    });
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  console.log('restorantlar', restaurants);

  const renderRestorantsItem = ({item}) => {
    return <RestaurantsCard item={item} />;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={restaurants}
        keyExtractor={item => item.id}
        renderItem={renderRestorantsItem}
        refreshControl={
          <RefreshControl
            style={{color: 'blue'}}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </SafeAreaView>
  );
};

export {RestaurantsList};

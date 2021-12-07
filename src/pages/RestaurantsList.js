import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  RefreshControl,
  Dimensions,
  FlatList,
} from 'react-native';
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

  const renderRestorantsItem = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 10,
          width: Dimensions.get('window').width / 2,
        }}>
        <RestaurantsCard navigation={props.navigation} item={item} />
      </View>
    );
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
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export {RestaurantsList};

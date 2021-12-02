import React from 'react';
import {Dimensions, StyleSheet, Image, View, Text} from 'react-native';

const RestaurantsCard = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <Text>{item.address}</Text>
      <Image style={{width: 150, height: 100}} source={{uri: item.image}} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 1.1,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export {RestaurantsCard};

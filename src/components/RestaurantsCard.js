import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const RestaurantsCard = ({navigation, item}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate('RestaurantDetails', {
          item: item,
        })
      }>
      <Image
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 120,
          width: Dimensions.get('window').width / 2.11,
        }}
        source={{uri: item.image}}
      />
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/restaurant.png')}
            />
            <Text style={{textAlign: 'center', marginLeft: 5, marginTop: 10}}>
              {item.businessname}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 20, height: 25, marginTop: 15}}
              source={require('../assets/location.png')}
            />
            <Text style={{textAlign: 'center', marginLeft: 5, marginTop: 20}}>
              {item.location}
            </Text>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <Image
              style={{width: 20, height: 25}}
              source={require('../assets/parking.png')}
            />
            <Text style={{textAlign: 'center', marginLeft: 5, marginTop: 5}}>
              Parking: {item.parkinglot ? 'Yes' : 'No'}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/phone.png')}
            />
            <Text style={{textAlign: 'center', marginLeft: 5, marginTop: 5}}>
              {item.phone}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    width: Dimensions.get('window').width / 2.11,
    height: Dimensions.get('window').height / 3,
    backgroundColor: '#EAEAEA',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
});

export {RestaurantsCard};

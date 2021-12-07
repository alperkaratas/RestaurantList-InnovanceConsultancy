import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CustomButton, BackButton} from '../components';

const RestaurantDetails = props => {
  const item = props.route.params.item;

  const detailList = [
    {
      id: 1,
      name: 'Location',
      value: item.location,
      icon: require('../assets/location.png'),
    },
    {
      id: 2,
      name: 'Address',
      value: item.address,
      icon: require('../assets/address.png'),
    },
    {
      id: 3,
      name: 'Reviews',
      value: item.reviews,
      icon: require('../assets/reviews.png'),
    },
    {
      id: 4,
      name: 'Parking',
      value: item.parkinglot,
      icon: require('../assets/parking.png'),
    },
    {
      id: 5,
      name: 'Restaurant type',
      value:
        item.restauranttype.charAt(0).toUpperCase() +
        item.restauranttype.substring(1),
      icon: require('../assets/restauranttype.png'),
    },
    {
      id: 6,
      name: 'Average cost',
      value: item.averagecost,
      icon: require('../assets/averagecost.png'),
    },
  ];
  return (
    <SafeAreaView>
      <BackButton onPress={() => props.navigation.goBack()} />
      <View>
        <Image style={styles.imageStyle} source={{uri: item.image}} />
        <Text style={styles.header}>- {item.businessname} -</Text>
      </View>
      <View style={{marginTop: 35, marginRight: 10}}>
        {detailList.map(x => {
          return (
            <View style={styles.detailContainer}>
              <Image style={styles.iconStyle} source={x.icon} />
              <Text style={styles.detailText}>
                <Text style={styles.detailTextHeader}>{x.name}</Text> :{' '}
                {x.value}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          buttonText={`Go to ${item.businessname}'s menu`}
          onPress={() =>
            props.navigation.navigate('MenuList', {
              menuId: item.menu,
              restaurantName: item.businessname,
              navigation: props.navigation,
            })
          }
          icon={require('../assets/menu.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
    textAlign: 'center',
    marginLeft: 5,
    marginTop: 20,
    textDecorationLine: 'underline',
    fontFamily: 'HoeflerText-Italic',
  },
  imageStyle: {
    height: Dimensions.get('window').height / 3.5,
    width: Dimensions.get('window').width,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  detailTextHeader: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 14,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.2,
  },
});

export {RestaurantDetails};

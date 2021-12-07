import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {BackButton} from '../components';
import axios from 'axios';

const MenuList = ({route}) => {
  const menuId = route.params.menuId;
  const restaurantName = route.params.restaurantName;
  const navigation = route.params.navigation;

  const [menu, setMenu] = useState({});
  const [menuImages, setMenuImages] = useState([]);

  const getSelectedRestMenu = async menuId => {
    await axios
      .get(`https://foodbukka.herokuapp.com/api/v1/menu/${menuId}`)
      .then(res => {
        setMenu(res.data.Result);
        setMenuImages(res.data.Result.images);
      });
  };

  useEffect(() => {
    getSelectedRestMenu(menuId);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.header}>{restaurantName} 's Menu</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.menuName}>Menu name: {menu.menuname}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.menuDesc}>
          <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>
            Menu description:{' '}
          </Text>
          {menu.description}
        </Text>
        <Text style={styles.menuDesc}>
          <Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>
            Total Product:{' '}
          </Text>{' '}
          {menuImages.length}
        </Text>
      </View>
      <ScrollView style={{flex: 1}}>
        {menuImages.map(x => {
          return (
            <View style={styles.menuImagesContainer}>
              <Image style={styles.menuImage} source={{uri: x}} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'HoeflerText-Italic',
  },
  menuName: {
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 5,
    marginTop: 25,
    fontFamily: 'HoeflerText-Italic',
  },
  menuDesc: {
    fontSize: 15,
    marginLeft: 5,
    marginTop: 25,
  },
  menuImagesContainer: {
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuImage: {
    height: Dimensions.get('window').height / 3.5,
    width: Dimensions.get('window').width,
  },
});

export {MenuList};

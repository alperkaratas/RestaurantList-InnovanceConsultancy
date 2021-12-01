import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Alert} from 'react-native';
import axios from 'axios';
import {CustomButton} from '../components';

const Home = props => {

  const logOut = async () => {
    axios
      .get('https://foodbukka.herokuapp.com/api/v1/auth/logout')
      .then(res => {
        console.log(res);
        if (res.data.status === 'success') {
          Alert.alert('Mesaj', 'Başarıyla çıkış yaptınız.', [{text: 'Tamam'}]);
          setTimeout(() => {
            props.navigation.navigate('Login');
          }, 2000);
        }
      });
  };


  return (
    <SafeAreaView>
      {/* <CustomButton
        onPress={() => getAllMenus()}
        buttonText={'Menüleri getir'}
      />
      <CustomButton
        onPress={() => getAllRestaurants()}
        buttonText={'Restorantları getir'}
      /> */}
      <CustomButton onPress={() => logOut()} buttonText={'Çıkış'} />
    </SafeAreaView>
  );
};

export {Home};

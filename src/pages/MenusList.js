import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import axios from 'axios';

const MenusList = props => {
  const [menus, setMenus] = useState({});

  useEffect(() => {
    getAllMenus();
  }, []);

  const getAllMenus = () => {
    axios.get('https://foodbukka.herokuapp.com/api/v1/menu').then(res => {
      setMenus(res.data.Result);
    });
  };

  console.log('menüler', menus);
  return (
    <SafeAreaView>
      <View>
        <Text>Menu List</Text>
      </View>
    </SafeAreaView>
  );
};

export {MenusList};

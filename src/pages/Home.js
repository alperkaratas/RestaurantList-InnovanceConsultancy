import React, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {CustomButton} from '../components';
import Context from '../context/store';

const Home = props => {
  const {state} = useContext(Context);

  const logOut = async () => {
    axios
      .get('https://foodbukka.herokuapp.com/api/v1/auth/logout')
      .then(res => {
        if (res.data.status === 'success') {
          Alert.alert('Message', 'You have successfully logged out.', [
            {text: 'OK'},
          ]);
          setTimeout(() => {
            props.navigation.navigate('Login');
          }, 2000);
        }
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>
            This project was developed for{' '}
            <Text style={{color: '#442270', fontSize: 16}}>
              Innovance Consultancy
            </Text>
            .
          </Text>
          <Image
            source={require('../assets/restaurant.png')}
            style={{width: 200, height: 200, marginTop: 40}}
          />
          <View style={{marginTop: 20}}>
            <Text style={styles.titleText}>Restaurant List App</Text>
          </View>
          <View style={{marginTop: 50}}>
            <Text
              style={{
                fontStyle: 'italic',
                fontSize: 22,
                fontWeight: 'bold',
                textDecorationLine: 'underline',
                color: 'red',
              }}>
              Welcome, {state.userName}
            </Text>
          </View>
          <View style={{marginTop: 40, marginHorizontal: 5}}>
            <Text style={styles.text}>
              The purpose of this project is to list restaurants and menus and
              view their details. Developed with Javascript.
            </Text>
          </View>
          <View style={{marginTop: 20, marginHorizontal: 5}}>
            <Text style={styles.text}>
              You can list the restaurants in the Restaurants section and click
              on the restaurant you choose to access its information and menu.
            </Text>
          </View>
        </View>

        <View style={styles.logOutContainer}>
          <CustomButton
            onPress={() => logOut()}
            buttonText={'Logout'}
            icon={require('../assets/logout.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infoTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 20,
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'HoeflerText-Italic',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  logOutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export {Home};

import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {CustomInput, CustomButton} from '../components';

const Login = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/restaurant.png')}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Restaurant List</Text>
        </View>
        <View style={styles.inputContainer}>
          <CustomInput
            keyboardType={'email-address'}
            placeHolder={'E-posta adresi'}
            autoCapitalize="none"
          />
          <CustomInput
            keyboardType={'default'}
            placeHolder={'Şifre'}
            autoCapitalize="none"
          />
          <CustomButton buttonText={'Giriş Yap'} />
          <Text style={styles.loginText}>Henüz hesabın yok mu?</Text>
          <CustomButton
            buttonText={'Hemen kayıt ol, keşfetmeye başla!'}
            onPress={() => props.navigation.navigate('Register')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FA',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  titleContainer: {
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'HoeflerText-Italic',
  },
  loginText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: -25,
  },
});

export {Login};

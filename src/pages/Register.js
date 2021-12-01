import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {CustomButton, CustomInput} from '../components';
import axios from 'axios';

const Register = props => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const submitRegister = async () => {
    await axios
      .post('https://foodbukka.herokuapp.com/api/v1/auth/register', {
        username: username,
        password: pass,
        phone: phone,
        email: email,
      })
      .then(res => console.log(res));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/register.png')}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.loginText}>Kaydol ve keşfetmeye başla!</Text>
        <CustomInput
          value={username}
          onChangeText={setUsername}
          keyboardType={'default'}
          placeHolder={'Kullanıcı adı'}
          secureTextEntry={false}
        />
        <CustomInput
          value={pass}
          onChangeText={setPass}
          keyboardType={'default'}
          placeHolder={'Şifre'}
          secureTextEntry={true}
        />
        <CustomInput
          value={phone}
          onChangeText={setPhone}
          keyboardType={'phone-pad'}
          placeHolder={'Telefon numarası'}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomInput
          value={email}
          onChangeText={setEmail}
          keyboardType={'email-address'}
          placeHolder={'E-posta adresi'}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomButton buttonText={'Kaydol'} onPress={() => submitRegister()} />
        <CustomButton
          buttonText={'Vazgeç'}
          onPress={() => props.navigation.goBack()}
        />
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
    marginVertical: 10,
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
  loginText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export {Register};

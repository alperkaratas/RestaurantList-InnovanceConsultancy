import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Keyboard,
  Alert,
} from 'react-native';
import {CustomButton, CustomInput} from '../components';
import axios from 'axios';

const Register = props => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const submitRegister = async () => {
    Keyboard.dismiss();
    if (username === '' || pass === '' || phone === '' || email === '') {
      Alert.alert('Error', 'Check the information again!', [{text: 'OK'}]);
    }
    await axios
      .post('https://foodbukka.herokuapp.com/api/v1/auth/register', {
        username: username,
        password: pass,
        phone: phone,
        email: email,
      })
      .then(res => {
        setLoading(true);
        if (res.data.status) {
          setTimeout(() => {
            setLoading(false);
          }, 2500);
          Alert.alert('', 'You have successfully register, you can login!', [
            {text: 'OK'},
          ]);
          setTimeout(() => {
            props.navigation.navigate('Login');
          }, 2000);
        }
      })
      .catch(err => {
        if (err && username != '' && pass != '' && phone != '' && email != '') {
          Alert.alert('Error', 'Check the information again!', [{text: 'OK'}]);
        }
      });
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
        <Text style={styles.loginText}>Register and start exploring!</Text>
        <CustomInput
          value={username}
          onChangeText={setUsername}
          keyboardType={'default'}
          placeHolder={'Username'}
          secureTextEntry={false}
        />
        <CustomInput
          value={pass}
          onChangeText={setPass}
          keyboardType={'default'}
          placeHolder={'Password'}
          secureTextEntry={true}
        />
        <CustomInput
          value={phone}
          onChangeText={setPhone}
          keyboardType={'phone-pad'}
          placeHolder={'Phone Number'}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomInput
          value={email}
          onChangeText={setEmail}
          keyboardType={'email-address'}
          placeHolder={'E-mail'}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <CustomButton
          buttonText={'Signup'}
          onPress={() => submitRegister()}
          icon={require('../assets/register.png')}
        />
        <CustomButton
          buttonText={'Cancel'}
          onPress={() => props.navigation.goBack()}
          icon={require('../assets/back.png')}
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

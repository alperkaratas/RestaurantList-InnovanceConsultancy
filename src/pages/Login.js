import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {CustomInput, CustomButton} from '../components';
import axios from 'axios';
import Context from '../context/store';

const Login = props => {
  const [username, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const {dispatch} = useContext(Context);

  const onSubmit = async () => {
    await axios
      .post('https://foodbukka.herokuapp.com/api/v1/auth/login', {
        username: username,
        password: pass,
      })
      .then(res => {
        setLoading(true);
        console.log(res);
        if (res.data.status) {
          Keyboard.dismiss();
          dispatch({type: 'SET_USERNAME', payload: username});
          setTimeout(() => {
            setLoading(false);
          }, 2500);
          setTimeout(() => {
            props.navigation.navigate('Tabs');
          }, 2510);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
            zIndex: 2,
          }}>
          <ActivityIndicator color="blue" size="large" />
        </View>
      ) : null}

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
            value={username}
            onChangeText={setUserName}
            keyboardType={'default'}
            placeHolder={'Kullanıcı adı'}
            autoCapitalize="none"
            secureTextEntry={false}
          />
          <CustomInput
            value={pass}
            onChangeText={setPass}
            keyboardType={'default'}
            placeHolder={'Şifre'}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <CustomButton
            buttonText={'Login'}
            onPress={() => onSubmit()}
            icon={require('../assets/login.png')}
          />
          <Text style={styles.loginText}>Don't have an account yet?</Text>
          <CustomButton
            buttonText={'Register now and start exploring!'}
            onPress={() => props.navigation.navigate('Register')}
            icon={require('../assets/register.png')}
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

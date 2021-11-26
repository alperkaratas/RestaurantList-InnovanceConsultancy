import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {CustomButton} from '../components';

const Register = props => {
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
        <CustomButton buttonText={'Kaydol'} />
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
    fontSize: 17,
  },
});

export {Register};

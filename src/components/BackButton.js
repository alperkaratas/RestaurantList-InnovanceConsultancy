import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const BackButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
      <Image style={styles.backImage} source={require('../assets/back.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  backImage: {
    width: 33,
    height: 33,
  },
});

export {BackButton};

import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.buttonText}</Text>
      {props.icon ? (
        <View style={{marginLeft: 5}}>
          <Image style={{width: 22, height: 22}} source={props.icon} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 35,
    padding: 10,
    paddingHorizontal: 40,
    backgroundColor: '#2C394B',
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export {CustomButton};

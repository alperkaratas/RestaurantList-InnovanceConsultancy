import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';

const CustomInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeHolder}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: Dimensions.get('window').width / 1.5,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export {CustomInput};

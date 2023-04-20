import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomText = () => {
  const [color, setColor] = useState('black');
  return (
    <View>
      <TextInput
        style={{borderWidth: 1, height: 50, color: color}}
        onChangeText={text => {
          console.log(text);
          if (text.length > 20) {
            setColor('red');
          }
        }}
      />
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({});

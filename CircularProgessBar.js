import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
// import {Color} from '../assets/color/index.color';
// import {DP} from '../utils/Dimen';

const propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{rotateZ: `${rotateBy}deg`}],
  };
};

const renderThirdLayer = percent => {
  if (percent > 50) {
    return (
      <View
        style={[
          styles.secondProgressLayer,
          propStyle(percent - 50, 45),
        ]}></View>
    );
  } else {
    return <View style={styles.offsetLayer}></View>;
  }
};

const CircularProgress = ({percent = 10}) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }
  console.log(firstProgressLayerStyle);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
        {renderThirdLayer(percent)}
        <Text style={styles.display}>{percent}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderRadius: 50,
    borderColor: 'rgb(240,240,240)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstProgressLayer: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderRadius: 50,
    position: 'absolute',
    borderLeftColor: 'yellow',
    borderBottomColor: 'yellow',
    borderRightColor: '#1e90ff',
    borderTopColor: '#1e90ff',
    transform: [{rotateZ: '-135deg'}],
    borderWidth: 1,
  },
  secondProgressLayer: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderRadius: 50,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#1e90ff',
    borderTopColor: '#1e90ff',
    transform: [{rotateZ: '-45deg'}],
  },
  offsetLayer: {
    width: 50,
    height: 50,
    borderWidth: 5,
    borderRadius: 50,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'rgb(240,240,240)',
    borderTopColor: 'rgb(240,240,240)',
    transform: [{rotateZ: '-135deg'}],
  },
  display: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CircularProgress;

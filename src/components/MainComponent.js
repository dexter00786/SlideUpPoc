import {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {TapGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/tapGesture';
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const MainComponent = () => {
  const Data = [
    {
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,',
      story:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isnt anything embarrassing hidden in the middle of text.',
    },
    {
      id: 2,
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,',
      story:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isnt anything embarrassing hidden in the middle of text.',
    },
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,',
      story:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isnt anything embarrassing hidden in the middle of text.',
    },
    {
      id: 4,
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,',
      story:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isnt anything embarrassing hidden in the middle of text.',
    },
    {
      id: 5,
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,',
      story:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isnt anything embarrassing hidden in the middle of text.',
    },
    {
      id: 6,
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      description:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,',
      story:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum you need to be sure there isnt anything embarrassing hidden in the middle of text.',
    },
  ];

  const [initialIndex, setInitialIndex] = useState(0);
  const [dataToRender, setDataToRender] = useState({});
  const [enable, setEnable] = useState(false);

  const {height} = useWindowDimensions();

  const y = useSharedValue(0);

  useEffect(() => {
    setDataToRender(Data[0]);
    console.log(dataToRender);
  }, []);

  const unlockGestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      console.log('on start');
    },
    onActive: event => {
      console.log(event);
      y.value = event.translationY;
    },
    onEnd: event => {
      console.log('on end', event.velocityY);
      if (y.value < -height / 2 || event.velocityY < -500) {
        //swipeup
        y.value = withTiming(-height, {easing: Easing.linear});
      } else {
        //reset
        y.value = withTiming(0, {easing: Easing.linear});
      }
    },
  });

  const tap = Gesture.Pan().onStart(() => {
    console.log('pan');
  });

  const panGesture = Gesture.Pan().onBegin(e => {
    console.log(e);
  });
  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={unlockGestureHandler}>
        <Animated.ScrollView
          style={[styles.container]}
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1000}>
          <Image source={{uri: dataToRender.img}} style={styles.img} />
          <View style={styles.textView}>
            <Text style={styles.textHeading}>Description :</Text>
            <Text style={styles.text}>{dataToRender.description}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={styles.textHeading}>Story :</Text>
            <Text style={styles.text}>{dataToRender.story}</Text>
            <Text>{dataToRender.id}</Text>
          </View>
        </Animated.ScrollView>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default MainComponent;
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: 700,
    width: width,
    alignSelf: 'center',
    marginBottom: 10,
  },
  textView: {
    height: 'auto',
    width: width,
    alignSelf: 'center',
    marginBottom: 10,
  },
  textHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    lineHeight: 20,
  },
});

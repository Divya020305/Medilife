import React, { useRef, useEffect } from 'react';
import {
  Animated,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import YesNoButton from './YesNoButton';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FadeInView
        style={{ width: 250, height: 200, marginTop: -500, marginLeft: 50 }}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            margin: 5,
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 100,
          }}>
          Are you ready to start the Meditational Game?
        </Text>
        <YesNoButton navigation={props.navigation}/>
      </FadeInView>
    </View>
  );
};

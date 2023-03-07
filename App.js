import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import StackNavigator from './Navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createAppContainer,
} from '@react-navigation/native-stack';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import IntroScreen from '../Screens/Intro';
import MenuTabNavigator from './MenuTabNavigator';
import YesNoButton from '../components/YesNoButton';
import NoButton from '../components/NoButton';
import MeditationStepsScreen from '../Screens/MeditationSteps';
import BlueBubble1 from '../Screens/BlueBubble1';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading" 
      screenOptions={{
        headerShown: false,
      }}>
 
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name='Drawer'component={DrawerNavigator} />
      <Stack.Screen name='MenuTab'component={MenuTabNavigator} />
      <Stack.Screen name='YesNoButton'component={YesNoButton} />
      <Stack.Screen name='NoButton'component={NoButton} />
      <Stack.Screen name='MeditationSteps'component={MeditationStepsScreen} />
      <Stack.Screen name='BlueBubble1'component={BlueBubble1} />

    </Stack.Navigator>
  );
};

export default StackNavigator;

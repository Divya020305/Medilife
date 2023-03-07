import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MeditationScreen from '../Screens/Meditation';
import LifestyleScreen from '../Screens/Lifestyle';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Meditation') {
            iconName = focused ? 'logo-slack' : 'logo-slack';
          } else if (route.name === 'Lifestyle') {
            iconName = focused ? 'woman' : 'woman';
          }

          return (
            <Ionicons
              name={iconName}
              size={RFValue(23)}
              color={color}
              style={styles.icons}
            />
          );
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Meditation" component={MeditationScreen} />
      <Tab.Screen name="Lifestyle" component={LifestyleScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: 'red',
    height: '7%',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: 'hidden',
    position: 'absolute',
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});

export default BottomTabNavigator;

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SpiritualScreen from "../Screens/Spiritual";
import FocusedScreen from "../Screens/Focused";
import {Text, View, StyleSheet} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import MantraScreen from '../Screens/Mantra';


const Tab = createMaterialBottomTabNavigator();

const MenuBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route,}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Spiritual') {
                        iconName = focused
                            ? 'logo-snapchat'
                            : 'logo-snapchat';
                        
                            
                    } else if (route.name === 'Focused') {
                        iconName = focused ? 'logo-dropbox' : 'logo-dropbox';
                    } else if (route.name === 'Mantra') {
                        iconName = focused ? 'flower-outline' : 'flower-outline';
                    } 
                    
                    return <Ionicons name={iconName} size={RFValue(23)} color={color} style={styles.icons}/>;
                },
                headerShown:false
            })}
            
        >
            <Tab.Screen name="Spiritual" component={SpiritualScreen} />
            <Tab.Screen name="Focused" component={FocusedScreen} />
            <Tab.Screen name="Mantra" component={MantraScreen} />

            
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  bottomTabStyle : {
    backgroundColor : '#F7005C',
    height : '7%',
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
})

export default MenuBottomTabNavigator
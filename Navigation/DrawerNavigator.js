import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../Screens/Profile";
import TabNavigator from './TabNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
           
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            
            
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
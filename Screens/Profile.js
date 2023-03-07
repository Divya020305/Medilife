import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

export default class ProfileScreen extends React.Component{

  render(){
    return(
      <View style = {styles.container}>
        <Text> ProfileScreen </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }

});
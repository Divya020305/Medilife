import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

export default class SpiritualScreen extends React.Component{

  render(){
    return(
      <View style = {styles.container}>
        <Text> SpiritualScreen </Text>
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
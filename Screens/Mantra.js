import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

export default class MantraScreen extends React.Component{

  render(){
    return(
      <View style = {styles.container}>
        <Text> MantraScreen </Text>
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
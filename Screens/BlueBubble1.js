import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class BlueBubble1 extends React.Component{

  render(){

    return(
      <View style = {styles.container}>
        <Text>BlueBubble1 Screen</Text>
      </View>
    )

  }

}

const styles = StyleSheet.create({

  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }

})
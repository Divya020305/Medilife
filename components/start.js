import React, { useRef } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';



export default class App extends React.Component {
  
  render(){
    return(
      <Image
        style = {styles.image}
        source = {require('../assets/girl.gif')}
      >
      </Image>
    );
  }

}

const styles = StyleSheet.create({

  image : {
    width : 200,
    height : 200,
    marginTop : 100,
    marginLeft : -50
  },
  
})
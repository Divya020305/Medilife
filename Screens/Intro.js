import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';



export default class IntroScreen extends React.Component{

  constructor(){
    super();
    this.setState = {
      fontsLoaded : false
    }
  }

  getStarted=()=>{

    this.props.navigation.navigate('Drawer');

  }


  render(){
    return(
      <View style = {styles.container}>

        <ImageBackground
          style = {styles.image}
          source = {{uri : 'https://lovejoyupc.org/wp-content/uploads/2020/10/Kansas-City-Hospice-Light-a-Candle.gif'}}
        >
          <Text style = {styles.text}> MEDILIFE </Text>
          <Text style = {styles.text2}> Inhale the future and exhale the past </Text>

          <TouchableOpacity 
            style = {styles.startButton}
            onPress={() => this.getStarted()}
          >
            <Text style = {styles.text1}> Let's get started >> </Text>
          </TouchableOpacity>

        </ImageBackground>
       
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image : {
    height:'100%',
    width:"100%",
  },

  text : {
    fontSize : 40,
    fontWeight : 'bold',
    textAlign : 'center',
    fontFamily : 'bubblegum-sans',
    color : 'white',
    marginTop : 100
  },

  text1 : {
    textAlign : 'center',
    color : 'white'
  },

  text2 : {
    fontSize : 20,
    fontWeight : 'bold',
    textAlign : 'center',
    fontFamily : 'bubblegum-sans',
    color : 'white',
  },

  startButton : {
    width : 200, 
    height : 30,
    justifyContent : 'center',
    marginTop : 450,
    borderRadius : 30,
    alignSelf: 'center',
    borderColor : 'gold',
    borderWidth : 2
  }

});
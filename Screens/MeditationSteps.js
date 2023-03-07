import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView, StatusBar, Platform, ScrollView} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class MeditationStepsScreen extends React.Component{

  render(){
    return(
      <View style = {styles.container}>
        <ScrollView>
        <ImageBackground
          style = {styles.backImage}
          source = {require('../assets/backgorund1.jpg')}
        >
          <View style = {styles.textContainer}>
          <Text style = {styles.text}>A beautiful day begins with a beautiful mindset</Text>
          </View>

          <TouchableOpacity 
            style = {styles.bubble1}
            onPress = {() => {
              this.props.navigation.navigate('BlueBubble1');
            }}
          >
            <Image
              style = {styles.bubbleImg}
              source = {require('../assets/b4.png')}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.bubble2}>
            <Image
              style = {styles.bubbleImg}
              source = {require('../assets/b5.png')}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.bubble3}>
            <Image
              style = {styles.bubbleImg}
              source = {require('../assets/b2.png')}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.bubble4}>
            <Image
              style = {styles.bubbleImg}
              source = {require('../assets/b6.png')}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.bubble5}>
            <Image
              style = {styles.bubbleImg}
              source = {require('../assets/B1.png')}
            ></Image>
          </TouchableOpacity>

          

        </ImageBackground>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container : {
    flex : 1,
    //justifyContent : 'center',
    //alignItems : 'center'
  },

  backImage : {
    width : '100%',
    height : '100%'
  },

  textContainer : {
    width : 300,
    height : 50,
    backgroundColor : 'white',
    borderRadius : 30,
    justifyContent : 'center',
    alignSelf : 'center',
    margin : 10,
    marginTop : 50,
  },

  text : {
    textAlign : 'center',
    margin : 10,
    fontWeight : 'bold',
    fontSize : 15
  },

  bubbleImg : {
    width : 100,
    height : 100,
    resizeMode : 'cover',
    alignSelf : 'center'
  },

   bubble1 : {
    width : 70,
    height :70,
    borderRadius : 100,
    margin : 50,
    justifyContent : 'center'
  },

  bubble2 : {
    width : 70,
    height :70,
    borderRadius : 100,
    marginLeft : 200,
    margin : 50,
    justifyContent : 'center',
    marginTop : 30
  },

  bubble3 : {
    width : 70,
    height :70,
    borderRadius : 100,
    marginLeft : 70,
    margin : 50,
    justifyContent : 'center',
    marginTop : 50
  },

  bubble4 : {
    width : 70,
    height :70,
    borderRadius : 100,
    marginLeft : 200,
    margin : 50,
    justifyContent : 'center',
    marginTop : 70
  },

  bubble5 : {
    width : 70,
    height :70,
    borderRadius : 100,
    marginLeft : 70,
    margin : 50,
    justifyContent : 'center',
    marginTop : 90
  },

});
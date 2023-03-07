import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      greeting : '',
    }
  }

  time =()=> {
    var today = new Date()
      var curHr = today.getHours()
      var greetings = null;
      if (curHr < 12) {
        greetings = 'Hi,Good Morning'
      } else if (curHr < 18) {
        greetings = 'Hi,Good Afternoon'
      } else {
        greetings = 'Hi,Good Evening'
      }
      this.setState({
        greeting : greetings
      })
  }

  componentDidMount (){
    this.time();
  }

  render(){
    return(
      <View style = {styles.container}>
          <Text style = {styles.text}> {this.state.greeting} </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container : {
    //flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 25,
    width : 200, 
    height : 25,
    marginLeft : 100
    
  },

  text : {
    textAlign : 'center',
    fontSize : 20,
    fontWeight : 'bold',
    color : 'white'
  }
})


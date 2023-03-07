import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class YesNoButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.yesButton}
          onPress={() => {
            this.props.navigation.navigate('MeditationSteps');
          }}
        >
          <Text style={styles.text1}> Yes </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.noButton}
          onPress={() => {
            this.props.navigation.navigate('NoButton');
          }}>
          <Text style={styles.text2}> No </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    marginLeft: 20,
    marginTop: -60,
  },

  yesButton: {
    width: 80,
    height: 40,
    borderColor: 'yellow',
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: 'center',
    margin: 10,
  },

  noButton: {
    width: 80,
    height: 40,
    borderColor: '#09F700',
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: 'center',
    margin: 10,
  },

  text1: {
    textAlign: 'center',
    color: '#09F700',
  },

  text2: {
    textAlign: 'center',
    color: 'yellow',
  },
});

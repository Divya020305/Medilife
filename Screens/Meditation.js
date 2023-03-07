import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Animated,
} from 'react-native';
import { Header } from 'react-native-elements';
import Greetings from '../components/Greetings';
import Start from '../components/start';
import AnimatedText from '../components/AnimatedText';
import { Icon } from 'react-native-elements';
import YesNoButton from '../components/YesNoButton';

export default class MeditationScreen extends React.Component {
  leftIcon = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('MenuTab');
        }}>
        <Icon name="menu" type="ionicon" color="white" />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="black"
          leftComponent={() => this.leftIcon()}
          centerComponent={{
            text: 'Slow down, Just Breathe',
            style: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
          }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Greetings />
        <Image
          style={styles.image}
          source={{ uri: 'https://i.gifer.com/7cHR.gif' }}></Image>

        <ImageBackground
          style={styles.backgif}
          source={require('../assets/circles.gif')}>
          <Start />

          <AnimatedText navigation={this.props.navigation}/>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  image: {
    width: 50,
    height: 50,
    marginLeft: 50,
    marginTop: -40,
  },

  backgif: {
    width: '95%',
    height: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

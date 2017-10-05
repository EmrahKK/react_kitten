/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  RkButton,
  RkCard,
  RkText,
  RkAvoidKeyboard,
  RkTheme,
  RkTextInput,
  RkChoice,
  RkChoiceGroup,
  RkModalImg,
  RkTabView
} from 'react-native-ui-kitten';

import Icon from 'react-native-vector-icons/Ionicons';

let accent = '#ed1c4d';
let images = [require('../img/sea.jpg'), require('../img/sea.jpg')]

RkTheme.setType('RkCard', 'story', {
  img: {
    height: 100,
    opacity: 0.7
  },
  header: {
    alignSelf: 'center'
  },
  content: {
    alignSelf: 'center'
  }
});

RkTheme.setType('RkTabView', 'rounded', {
  backgroundColor: 'transparent',
  color: 'white',
  borderColor: '#4a636d',
  tabContainer: {
    padding: 2,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  content: {
    padding: 7
  },
  container: {
    backgroundColor: '#a6bfcc',
    borderRadius: 20
  }
});

RkTheme.setType('RkTabView', 'roundedSelected', {
  backgroundColor: '#4a636d',
  borderColor: '#4a636d'
});

RkTheme.setType('RkTextInput', 'success', {
  labelColor: 'darkgreen',
  underlineColor: 'darkgreen',
  underlineWidth: 1,
});

RkTheme.setType('RkTextInput', 'rounded', {
  input: {
    fontSize: 24
  }
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <RkText>Text</RkText>
        <RkTextInput placeholder='Login' />
        <RkTextInput label={<Icon name={'ios-search'} />} />
        <RkTextInput rkType='rounded' />
        <RkTextInput label='Kullanıcı Adı:' rkType='success' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Start, Login, Signup } from './screens';

export default Root = StackNavigator(
  Start: {
    screen: Start,
    navigationOptions: {
      title: 'Welcome!',
      headerTintColor: Platform.OS === 'ios' ? null : 'white',
      headerStyle: Platform.OS === 'ios' ? {} : {
        height: 56 + StatusBar.currentHeight, // 56 = Header/Toolbar spec
        paddingTop: StatusBar.currentHeight, // StatusBar height
        backgroundColor: '#2196f3',
      },
    },
  },
  Login: {
    updateUser: this.props.updateUser,
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Level ' + navigation.state.params.data.level + ' ' + navigation.state.params.data.type,
      headerTintColor: Platform.OS === 'ios' ? null : 'white',
      headerStyle: Platform.OS === 'ios' ? {} : {
        height: 56 + StatusBar.currentHeight, // 56 = Header/Toolbar spec
        paddingTop: StatusBar.currentHeight, // StatusBar height
        backgroundColor: '#2196f3',
      },
    }),
  },
  Signup: {
    screen: Signup,
    navigationOptions: ({ navigation }) => ({
      title: 'Level ' + navigation.state.params.data.level + ' ' + navigation.state.params.data.type,
      headerTintColor: Platform.OS === 'ios' ? null : 'white',
      headerStyle: Platform.OS === 'ios' ? {} : {
        height: 56 + StatusBar.currentHeight, // 56 = Header/Toolbar spec
        paddingTop: StatusBar.currentHeight, // StatusBar height
        backgroundColor: '#2196f3',
      },
    }),
  },
})
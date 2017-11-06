
import React from 'react';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import LoginScreen from './app/screens/Login';
import SignUpScreen from './app/screens/Signup';
import HomeScreen from './app/screens/home';
import NewItemScreen from './app/screens/New';
import ShowItemsScreen from './app/screens/Show';

const navigationOptions = ({navigation}) => ({
      headerBackTitle: null
});

const NaggerApp = StackNavigator({
    Home: { screen: HomeScreen, navigationOptions: navigationOptions },
    Login: { screen: LoginScreen, navigationOptions: navigationOptions },
    SignUp: { screen: SignUpScreen, navigationOptions: navigationOptions },
    ShowItems: { screen: ShowItemsScreen, navigationOptions: navigationOptions },
    NewItem: { screen: NewItemScreen, navigationOptions: navigationOptions }
});

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC9VjyFoGpu7qBArmG_LfdYA1RJt_6WDHE",
      authDomain: "inventory-a058a.firebaseapp.com",
      databaseURL: "https://inventory-a058a.firebaseio.com",
      projectId: "inventory-a058a",
      storageBucket: "",
      messagingSenderId: "724608590213"
    });
  }
  componentWillUnmount() {
    this.database.goOffline();
  }
  render() {
      return <NaggerApp />;
  }
}
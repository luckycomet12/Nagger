
import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import firebase from 'firebase';
import _ from 'lodash';

class LoginScreen extends React.Component {
  static navigationOptions = {
      title: 'Login'
  };
  
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
		this.onName = this.onName.bind(this);
    this.onOK = this.onOK.bind(this);
    this.errorMessage = ' ';
    this.connected = false;
  }

	onName(value) {
    this.errorMessage = null;
		this.setState({
			name: value
		});
  }
  
	onOK() {
    if (this.state.name) {
      if (!this.connected) {
        this.database = firebase.database();
        this.connected = true;
      }

      this.database.ref('/validUsers')
      .on('value',snapshot => {
        const validUsers = snapshot.val();
        const user = _.find(validUsers,(value) => {
          return value == this.state.name;
        })
        if (user) {
          this.props.navigation.navigate('ShowItems',{
            name: user
          });
        }
        else {
          this.errorMessage = 'Invalid name.'
          this.setState({
            name: ''
          });
        }
      });
    }
    else {
      this.errorMessage = 'This is a mandatory field.'
      this.setState({
        name: ''
      });
    }
  }
  
  render() {
    return (
			<View>
				<FormLabel>Name</FormLabel>
				<FormInput onChangeText={this.onName}/>
        {this.errorMessage &&
          <FormValidationMessage>
            {this.errorMessage}
          </FormValidationMessage>
        }
				<Button title='OK' onPress={this.onOK}></Button>
			</View>
		);
  }
}
export default LoginScreen;
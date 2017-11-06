

import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import firebase from 'firebase';
import _ from 'lodash';

class SignUpScreen extends React.Component {
  static navigationOptions = {
      title: 'SignUp'
  };
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      validUsers: []
    };
		this.onName = this.onName.bind(this);
    this.onOK = this.onOK.bind(this);
    this.errorMessage = ' ';
  }
  
  componentWillMount() {
    this.ref = firebase.database().ref('/validUsers');
    this.ref.once('value',snapshot => {
      this.setState({
        validUsers: snapshot.val()
      });
    });
  }

	onName(value) {
    this.errorMessage = null;
		this.setState({
      name: value
    });
  }
  s
	onOK() {
    if (this.state.name) {
      const user = this.state.validUsers ? _.find(this.state.validUsers,(value) => {
        return value == this.state.name;
      }) : null;
      if (user) {
        this.errorMessage = 'Duplicate Name.'
        this.setState({
          name: ''
        });
      }
      else {
        this.ref.push(this.state.name);
        this.props.navigation.navigate('NewItem',{
          name: this.state.name
        })
      }
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
export default SignUpScreen;
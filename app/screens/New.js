
import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import firebase from 'firebase';
import _ from 'lodash';

class NewItemScreen extends React.Component {
    static navigationOptions = {
        title: 'Nagger'
    };
  
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.navigation.state.params.name,
            name: '',
        };
        this.onName = this.onName.bind(this);
        this.onOK = this.onOK.bind(this);
        this.errorMessage = ' ';
    }

	onName(value) {
        this.errorMessage = null;
        this.setState({
            name: value
        });
    }
  
	onOK() {
        if (this.state.name) {
            firebase.database().ref('/' + this.state.user).push({
                name: this.state.name, 
                done: false
            });
            this.props.navigation.navigate('ShowItems', {name: this.state.user});
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
            <FormLabel>New Item</FormLabel>
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
export default NewItemScreen;
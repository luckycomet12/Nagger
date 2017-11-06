
import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import NewItemScreen from './New';
import firebase from 'firebase';
import _ from 'lodash';

class ShowItemsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Nagger',
    headerRight: (<Icon name='add' 
      iconStyle={{color: 'blue'}} 
      onPress={() => navigation.navigate('NewItem',{
        name: navigation.state.params.name
      })}/>
    )
  })
  constructor(props) {
      super(props);
      this.state = {
          name: this.props.navigation.state.params.name,
          items: []
      };
  }
  componentWillMount() {
    this.ref = firebase.database().ref('/' + this.state.name);
    this.ref.once('value',snapshot => {
     var data = snapshot.val()
      this.setState({
        items: data
      });
    });
  }

  deleteItem = (item, index) => {
    //this.setState({
     //   item[index]: null
    return (null)
   // });

  }

  render() {
    if (this.state.items == null) {
         return <NewItemScreen name={this.state.name}/>;
       }
       else {
           return (
         <View>
           <List>
           {
             _.map(this.state.items,(item,index) => {
               return <ListItem
                 key={index}
                 title={item.name}
                rightIcon={{name: 'delete', color: 'red'}}
                onPressRightIcon={() => this.deleteItem(items, index)}
               />;
             })
           }
           </List>
         </View>
       )};
    }
}
export default ShowItemsScreen;
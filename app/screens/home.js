
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Nagger'
    };
    render() {
        return <View>
            <Button title='Login' 
				onPress={() => this.props.navigation.navigate('Login')}
				buttonStyle={styles.buttonStyle}
			>
			</Button>
            <Button title='Sign Up' 
				onPress={() => this.props.navigation.navigate('SignUp')}
				buttonStyle={styles.buttonStyle}
			>
			</Button>
        </View>;
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
	buttonStyle: {
		backgroundColor: 'green',
		marginTop: 20
	}
});
export default HomeScreen;

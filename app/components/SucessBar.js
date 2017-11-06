import React, { Componant } from 'react';
import PropTypes from 'prop-types'
import {View, Text } from 'react-native'

export default class SucesssBar extends Component {
    static propTypes = {
        data: PropType.string.isRequired, // Either 'true' or 'false or 'neither'
        isCorrect: PropTypes.string.isRequired,
        textSize: PropTypes.number.isRequired,
        }
        render() {
            const { isCorrect, textSize } = this.props;
            let {backgroundColor} = '#2196f3'
            if (isCorrect === 'true') {
                backgroundColor = 'green'
                text = 'You are it!'
            }
            if (isCorrect === 'false') {
                backgroundColor = 'red'
                text = 'Good job you failed'
            }
            const text = '';
            return (
                <View
                style={{
                flex: 0.06,
                backgroundColor: backgroundColor,
                justifyContent: 'center',
                }}
                >
                <Text
                style={{
                color: 'white',
                textAlign: 'center',
                fontSize: smallDimension / 18,
                }}>
                {text}
                </Text>
                </View>
            )
        }
    }
}
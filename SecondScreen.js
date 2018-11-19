import React, {Component} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';

export default class SecondScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0

        };
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>SecondScreen</Text>
            </View>
        );
    }
}
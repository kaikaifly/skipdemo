import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity, StatusBar, Image} from 'react-native';

export default class FirstScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0

        };
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <StatusBar//透明状态栏
                    backgroundColor='transparent'
                    translucent={true}
                    hidden={false}
                    animated={true}/>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Second')
                    }}>
                    <Image
                        source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2249893882,1165836821&fm=27&gp=0.jpg'}}
                        style={{width: 50, height: 50}}/>
                </TouchableOpacity>

            </View>
        );
    }
}
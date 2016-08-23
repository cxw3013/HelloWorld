/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

"use strict";

import React, {Component} from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Clipboard,
}from "react-native";


class UIStudy extends Component {
    // 构造
    constructor(props) {
        super(props);

        this.state = {
            content: 'Content will appear here'
        };
        this.setClipboardContent = this.setClipboardContent.bind(this);
    };

    async setClipboardContent() {
        Clipboard.setString('Hello World');
        try {
            let content = await Clipboard.getString();
            this.setState({content});
        }
        catch (e) {
            this.setState({content:e.message});
        }
    }
    render() {
        return (
            <View style={{marginTop:50}}>
                <Text onPress={this.setClipboardContent} style={{color:'blue'}}>
                    Tap to put "Hello World" in the clipboard
                </Text>
                <Text style={{color:'red', marginTop:20}}>
                    {this.state.content}
                </Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
});

AppRegistry.registerComponent(
    'UIStudy'
    , () =>UIStudy);

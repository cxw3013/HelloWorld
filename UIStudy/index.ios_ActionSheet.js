/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

"use strict";

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActionSheetIOS,
} from 'react-native';

let BUTTONS = [
    'Option 0',
    'Option 1',
    'Option 2',
    'Delete',
    'Cancel'
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;
class UIStudy extends Component {
    constructor(props) {
        super(props);
        //设置state
        this.state = {
            clicked: 'none',
            text: '',
        };
        //bind(this)很重要
        this.showActionSheet = this.showActionSheet.bind(this);
        this.showShareActionSheet = this.showShareActionSheet.bind(this);
    }

    render() {
        return (
            <View style={{marginTop:200}}>
                <Text onPress={this.showActionSheet} style={styles.button}>
                    Click to show ActionSheet
                </Text>
                <Text>
                    Clicked button:{this.state.clicked}
                </Text>
                <Text onPress={this.showShareActionSheet} style={styles.button}>
                    Click to show Share ActionSheet
                </Text>
                <Text>
                    {this.state.text}
                </Text>
            </View>
        );
    }

//ActionSheet
    showActionSheet() {
        ActionSheetIOS.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: 'This is a Title',//显示的标题
                message: 'This is the message',
                tintColor: 'blue'//控制颜色
            },
            (buttonIndex) => {
                let selectedTitle = BUTTONS[buttonIndex];
                console.log(buttonIndex + selectedTitle);
                this.setState({clicked: BUTTONS[buttonIndex]});
            }
        );
    }
    //ShareActionSheet
    showShareActionSheet() {
        ActionSheetIOS.showShareActionSheetWithOptions( {
            url:"https://code.facebook.com",
            message:'message to go with the shared url',
            subject:'a subject to go in the email heading',
            excludeActivityTypes:[
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        },
            (error) => alert(error),
            (success,method) => {
            let text;
            if(success) {
                text = `Shared via ${method}`;
            } else  {
                text = 'You didn\'t share';
            }
            this.setState({text});
        }
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 10,
        fontWeight: '500',
    },
});

AppRegistry.registerComponent('UIStudy', () => UIStudy);

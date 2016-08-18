/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

"use strict";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  UIManager,
  ActionSheetIOS,
} from 'react-native';

let BUTTONS;
BUTTONS = [
    'Option 0',
    'Option 1',
    'Option 2',
    'Delete',
    'Cancel',
];
 const DESTRUCTIVE_INDEX = 3;
 const CANCEL_INDEX = 4;
 class UIStudy extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked:'none',
        };
        //bind(this)很重要
        this.showActionSheet = this.showActionSheet.bind(this);
    }
  render() {
    return (
      <View style={{marginTop:200}}>
        <Text onPress = {this.showActionSheet} style = {styles.button}>
            Click to show ActionSheet
        </Text>
        <Text>
            Clicked button:{this.state.clicked}
        </Text>
      </View>
    );
}
//ActionSheet
showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
        options:BUTTONS,
        cancelButtonIndex:CANCEL_INDEX,
        destructiveButtonIndex:DESTRUCTIVE_INDEX,
        title:'This is a Title',//显示的标题
        message:'This is the message',
        tintColor:'blue',//控制颜色
    },
    (buttonIndex) => {
        let selectedTitle = BUTTONS[buttonIndex];
        console.log(buttonIndex + selectedTitle);
        this.setState({clicked:BUTTONS[buttonIndex]});
    }
);
}
}

const styles = StyleSheet.create({
  button: {
      marginBottom:10,
      fontWeight:'500',
  },
});

AppRegistry.registerComponent('UIStudy', () => UIStudy);

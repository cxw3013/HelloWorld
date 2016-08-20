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
    TouchableHighlight,
    AlertIOS,
    Alert,
}from "react-native";

let alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented '
    + 'catalysts for change. Dynamically revolutionize.';
class UIStudy extends Component {
    state:any;
    customButtons:Array<Object>;
    // 构造
    constructor(props) {
        super(props);
        this.saveResponse = this.saveResponse.bind(this);
        // 初始状态
        this.customButtons = [{
            text: 'Custom OK',
            onPress: this.saveResponse
        },{
            text:'Custom Cancel',
            style:'cancel',
        }]
        this.state = {
            promptValue:undefined,
        };

    }


    saveResponse(promptValue) {
        this.setState({promptValue:JSON.stringify(promptValue)});
    }

    render() {
        return (
            <View style={{marginTop:200}}>
                {/*只有一个输入框*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>AlertIOS.prompt(
                                    'Plain Text Entry'
                                    )}>
                    <View style={styles.button}>
                        <Text>AlertIOS plain text </Text>
                    </View>
                </TouchableHighlight>
                {/*密码输入框*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>AlertIOS.prompt(
                                    'Secure Text',null, null,'secure-text'
                                    )}>
                    <View style={styles.button}>
                        <Text>Secure Text</Text>
                    </View>
                </TouchableHighlight>
                {/*登陆输入框*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>AlertIOS.prompt(
                                    'Login & Password',
                                    null,
                                    null,
                                    'login-password'
                                    )}>
                    <View style={styles.button}>
                        <Text>login-password</Text>
                    </View>
                </TouchableHighlight>

                {/*自定义按钮并接受回调*/}
                <View style={styles.wrapper}/>
                <Text style={{marginBottom:10}}>
                    <Text style={{fontWeight:'bold'}}>
                        Promt value:
                    </Text>
                    {this.state.promptValue}
                </Text>

                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>AlertIOS.prompt(
                                    'Type a value',
                                    null,
                                    this.saveResponse
                                    )}>
                    <View style={styles.button}>
                        <Text>prompt with title & callback</Text>
                    </View>
                </TouchableHighlight>
                {/*自定义按钮并接受回调*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>AlertIOS.prompt(
                                    'Type a value',
                                    null,
                                    this.customButtons
                                    )}>
                    <View style={styles.button}>
                        <Text>prompt with title & custom buttons</Text>
                    </View>
                </TouchableHighlight>

                {/*自定义按钮并接受回调*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>AlertIOS.prompt(
                                    'Type a value',
                                    null,
                                    this.saveResponse,
                                    //undefined,
                                    'secure-text',
                                    'Default value'
                                    )}>
                    <View style={styles.button}>
                        <Text>prompt with title, callback & default value</Text>
                    </View>
                </TouchableHighlight>

                {/*自定义按钮并接受回调*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>AlertIOS.prompt(
                                    'Type a value',
                                    'Message',
                                    this.customButtons,
                                    'login-password',
                                    'admin@site.com',
                                    )}>
                    <View style={styles.button}>
                        <Text>prompt with title, customButtons, login/password & default value</Text>
                    </View>
                </TouchableHighlight>

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

AppRegistry.registerComponent('UIStudy', () => UIStudy);

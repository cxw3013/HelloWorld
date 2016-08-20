/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

"use strict";

import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, Alert} from "react-native";

let alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented '
    + 'catalysts for change. Dynamically revolutionize.';
class UIStudy extends Component {
    render() {
        return (
            <View style={{marginTop:200}}>
                {/*只有一个默认的OK按钮*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>Alert.alert(
                                    'Alert Title',
                                    alertMessage,
                                    )}>
                    <View style={styles.button}>
                        <Text>Alert With message and default button</Text>
                    </View>
                </TouchableHighlight>
                {/*自定义一个按钮,并且处理响应*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>Alert.alert(
                                    'Alert Title',
                                    alertMessage,
                                    [
                                    {text:'OK', onPress:()=>console.log('OK Pressed')},
                                    ]
                                    )}>
                    <View style={styles.button}>
                        <Text>Alert With one button</Text>
                    </View>
                </TouchableHighlight>
                {/*自定义两个按钮,并且处理响应*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>Alert.alert(
                                    'Alert Title',
                                    alertMessage,
                                    [
                                    {text:'Cancel', onPress:()=>console.log('Cancel Pressed')},
                                    {text:'OK', onPress:()=>console.log('OK Pressed')},
                                    ]
                                    )}>
                    <View style={styles.button}>
                        <Text>Alert With two button</Text>
                    </View>
                </TouchableHighlight>
                {/*自定义三个按钮,并且处理响应*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>Alert.alert(
                                    'Alert Title',
                                    alertMessage,
                                    [
                                    {text:'Foo', onPress:()=>console.log('Foo Pressed')},
                                    {text:'Bar', onPress:()=>console.log('Bar Pressed')},
                                    {text:'Baz', onPress:()=>console.log('Baz Pressed')},
                                    ]
                                    )}>
                    <View style={styles.button}>
                        <Text>Alert With three button</Text>
                    </View>
                </TouchableHighlight>
                {/*自定义N个按钮,并且处理响应*/}
                <TouchableHighlight style={styles.wrapper}
                                    onPress={()=>Alert.alert(
                                    'Alert Title',
                                    alertMessage,
                                    '..........'.split('').map((dot,index)=>({
                                    text:'Button' + index,
                                     onPress:()=>console.log('Pressed' + index)
                                     }))
                                    )}>
                    <View style={styles.button}>
                        <Text>Alert With too many buttons</Text>
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

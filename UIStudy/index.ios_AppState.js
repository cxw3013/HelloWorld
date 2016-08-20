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
    AppState,
}from "react-native";

let alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented '
    + 'catalysts for change. Dynamically revolutionize.';
class UIStudy extends Component {

    // 构造
    constructor(props) {
        super(props);

        this.state = {
            appState: AppState.currentState,
            previousAppStates: [],
            memoryWarnings: 0,
        };
        //this.handAppStateChange = this.handAppStateChange.bind(this);
    }


    componentDidMount() {
        AppState.addEventListener('change', this.handAppStateChange);
    }

    componentDidUnMount() {
        AppState.removeEventListener('change', this.handAppStateChange);
    }

    handAppStateChange = (appState) => {
        let previousAppStates;
        previousAppStates = this.state.previousAppStates.slice();
        previousAppStates.push(this.state.appState);
        this.setState({
            previousAppStates,
            appState,
        });
    }

    render() {
        return (
            <View style={{marginTop:50}}>
                <Text>
                    current AppState = {this.state.appState}
                </Text>
                <Text>
                    {JSON.stringify(this.state.previousAppStates)}
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

AppRegistry.registerComponent('UIStudy', () => UIStudy);

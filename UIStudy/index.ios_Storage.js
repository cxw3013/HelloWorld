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
    AsyncStorage,
    PickerIOS
}from "react-native";

let PickerItemIOS = PickerIOS.Item;
const STORAGE_KEY = '@AsyncStorageExample:key';
const COLORS = ['red', 'orange', 'yellow', 'green', 'blue'];

class UIStudy extends Component {

    // 构造
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: COLORS[0],
            messages: [],
        };

    };

    componentDidMount() {
        this._loadInitialState().done();
    };

    async _loadInitialState(){
        try {
            let value = await AsyncStorage.getItem(STORAGE_KEY);
            if (value !== null) {
                this.setState({
                    selectedValue: value
                });
                this.appendMessage('Recovered selection from disk: ' + value);
            } else {
                this.appendMessage('Initialized with no selection on disk.');
            }
        } catch (error) {
            this.appendMessage('AsyncStorage error: ' + error.message);
        }
    };

    async onValueChange(selectedValue) {
        this.setState({selectedValue});
        try {
            await AsyncStorage.setItem(STORAGE_KEY, selectedValue);
            this.appendMessage('Save selection to disk' + selectedValue);
        } catch (error) {
            this.appendMessage('AsyncStorage error: ' + error.message);
        }
    };

    async removeStorage(){
        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            this.appendMessage('Selection removed from disk.');
        } catch (error) {
            this.appendMessage('AsyncSrorage error: ' + error.message);
        }
    };

    appendMessage = (message) => {
        this.setState({
            messages: this.state.messages.concat(message)
        });
    };


    render() {
        let color = this.state.selectedValue;
        return (
            <View style={{marginTop:50}}>
                <PickerIOS
                selectedValue = {color}
                onValueChange={()=>{this.onValueChange()}}>
                    {
                        COLORS.map((value) =>(
                        <PickerItemIOS
                        key={value}
                        value={value}
                        label={value}
                        />
                        ))
                    }
                </PickerIOS>
                <Text>
                    {'Selected: '}
                    <Text style={{color}}>
                        {this.state.selectedValue}
                    </Text>
                </Text>
                <Text>
                    {' '}
                </Text>
                <Text onPress={()=>{this.removeStorage()}}>
                    Press here to remove from storage
                </Text>
                <Text>
                    {' '}
                </Text>
                <Text>Message:</Text>
                {this.state.messages.map((m) => <Text key={m}> {m} </Text>)}
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

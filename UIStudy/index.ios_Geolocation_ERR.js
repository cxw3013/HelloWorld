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
    Geolocation,
}from "react-native";


class UIStudy extends Component {
    // 构造
    constructor(props) {
        super(props);
        watchId:(null
    :
        ? number
    ),

        this.state = {
            initialPosition: 'unknown',
            lastPosition: 'unknown',
        };
    };

    componentDidMount() {
        Geolocation.getCurrentPosition(
            (position) => {
                let initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            (error) => alert(error.message),
            {
                enableHighAccuracy: true,//boolean 是否要求高精度的地理信息
                timeout: 20000,//表示等待响应的最大时间，默认是0毫秒，表示无穷时间
                maximumAge: 1000
            }//应用程序的缓存时间
        );
        this.watchID = Geolocation.watchPosition(
            (position) => {
                let lastPosition = JSON.stringify(position);
                this.setState({lastPosition});
            }
        );
    }

    componentDidUnMount() {
        Geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View style={{marginTop:50}}>
                <Text>
                    <Text style={styles.title}>
                        Initial position:
                    </Text>
                    {this.state.initialPosition}
                </Text>
                <Text>
                    <Text style={styles.title}>
                        Last position:
                    </Text>
                    {this.state.lastPosition}
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
    title: {
        fontWeight: '500',
    },
});

AppRegistry.registerComponent(
    'UIStudy'
    , () =>UIStudy);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    RefreshControl,
    TouchableHighlight,
} from 'react-native';

class UIStudy extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        //基本都是些固定写法
        //第一步
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });
        this.state = {
            //数据源
            //第二步
            dataSource: ds,
            data: {
                sectionHeader1: ['Android'],
                sectionHeader2: ['IOS', 'React-Native'],
                sectionHeader3: ['H5', 'JAVA', 'OC', 'Go', 'Swift'],
                sectionHeader4: ['C', 'C++', 'C#', 'Python', 'PHP']
            },
            isRefreshing: false,
        }

        this.onChangeVisibleRows = this.onChangeVisibleRows.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderSectionHeader = this.renderSectionHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderSeparator = this.renderSeparator.bind(this);

        this.renderFooter = this.renderFooter.bind(this);
        this.onRefresh = this.onRefresh.bind(this);

        this.pressRow = this.pressRow.bind(this);
    }

    onRefresh = ()=> {
        this.setState({isRefreshing: true});
        setTimeout(()=> {
            this.setState({isRefreshing: false});
        }, 2000)
    }

    pressRow(rowID) {
        console.log("pressed row + " + rowID);
    }

    renderRow(rowDate, sectionID, rowID) {
        // return (
        //     <Text style={styles.row}>
        //         {'数据内容: ' +rowDate + '\n组ID: ' + sectionID + '\n行ID: ' + rowID}
        //     </Text>
        // )
        if (sectionID == 'sectionHeader1') {
            return (
                <TouchableHighlight onPress={() => {this.pressRow(rowID)}}>
                    <Text style={styles.row}>
                        {'数据内容: ' + rowDate + '\n组ID: ' + sectionID + '\n行ID: ' + rowID}
                    </Text>
                </TouchableHighlight>
            )
        } else {
            return (
                <TouchableHighlight onPress={() => {this.pressRow(rowID)}}>
                <Text style={styles.row}>
                    {'数据内容--: ' + rowDate + '\n组ID: ' + sectionID + '\n行ID: ' + rowID}
                </Text>
                </TouchableHighlight>
            )
        }

    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View style={{height:1, backgroundColor:'blue'}}>
            </View>
        )
    }

    renderHeader() {
        return (
            <View style={{backgroundColor:'#F2F0F9', height:60, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:30, color:'red' }}>
                    这是整个列表的头部
                </Text>
            </View>
        )
    }

    renderFooter() {
        return (
            <View style={{backgroundColor:'#F2F0F9', height:60, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:30, color:'red' }}>
                    这是整个列表的尾部
                </Text>
            </View>
        )
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={{backgroundColor:'#22F0F9', justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontSize:20, color:'green' }}>
                    {'组ID: ' + sectionID + '\n数据内容: ' + sectionData}
                </Text>
            </View>
        )
    }


    onChangeVisibleRows(visibleRows, changedRows) {
        console.log('visibleRows' + visibleRows + '\nchangedRows' + changedRows);
    }

    render() {
        return (
            <View style={{paddingTop:20, flex: 1}}>
                <ListView dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
                          renderRow={this.renderRow}
                          renderSeparator={this.renderSeparator}
                          renderHeader={this.renderHeader}
                          renderSectionHeader={this.renderSectionHeader}
                          renderFooter={this.renderFooter}
                          onChangeVisibleRows={this.onChangeVisibleRows}
                          refreshControl={
                           <RefreshControl
                           refreshing={this.state.isRefreshing}
                           onRefresh={this.onRefresh}
                           tintColor = "#FF0000"
                           title = "Loading..."
                           titleColor="#00ff00"
                           />
                          }
                >
                </ListView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    row: {
        height: 80,
        fontSize: 20,
        //布局优化当写此属性时只会加载屏幕能看到数据
        overflow: 'hidden'
    }
});

AppRegistry.registerComponent('UIStudy', () => UIStudy);

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
} from 'react-native';

class UIStudy extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        //基本都是些固定写法
        //第一步
        let ds = new ListView.DataSource({rowHasChanged: ((r1, r2)=>r1 !== r2)});
        this.state = {
            //数据源
            //第二步
            dataSource: ds.cloneWithRows([
                'Android', 'IOS', 'React-Native',
                'H5', 'JAVA', 'OC', 'Go', 'Swift',
                'C', 'C++', 'C#', 'Python', 'PHP'
            ])
        }
        this.renderRow = this.renderRow.bind(this);
        this.onChangeVisibleRows = this.onChangeVisibleRows.bind(this);
    }

    renderRow(rowDate, sectionID, rowID) {
        return (
            <Text style={styles.row}>
                测试数据{rowDate + '\n组ID' + sectionID + '\n行ID' + rowID}
            </Text>
        )
    }

    onChangeVisibleRows(visibleRows, changedRows) {
console.log('visibleRows' + visibleRows + '\nchangedRows' + changedRows);
    }
    render() {
        return (
            <View style={{paddingTop:20, flex: 1}}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                          onChangeVisibleRows={this.onChangeVisibleRows}>
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

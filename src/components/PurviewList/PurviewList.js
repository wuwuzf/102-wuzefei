import React, { Component } from 'react'
import PurviewItem from '../PurviewItem/PurviewItem.js'
import { List } from 'antd';


export default class Purview extends Component {

    render() {
        const {teacherData,listData,Actions,teacherDataDec } = this.props;
        return (
            <div>
                <List
                    bordered
                    dataSource={listData}
                    renderItem={item =>
                         <PurviewItem
                            Actions={Actions}
                            data={item}
                            teacherData={teacherData}
                            teacherDataDec={teacherDataDec}
                         />}
                />
            </div>
        )
    }
}
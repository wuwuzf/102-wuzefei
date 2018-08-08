import React, { Component } from 'react'
import { List } from 'antd';
export default class ReviewReply extends Component {
    render() {
        return (
            <div>
                <List
                    bordered
                    dataSource={123}
                    renderItem={item => <sd />}
                />
            </div>
        )
    }
} 
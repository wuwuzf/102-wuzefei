import React, { Component } from 'react'
import './Reply.css'
import { Icon } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';

const data = [
    'OK',
];


export default class Reply extends Component {

    render() {
        return (
            <div>
                <div>
                    <Icon type="mail" style={{ fontSize: 16, color: '#08c' }} />
                    <Input style={{ width: '80%' }} placeholder="reply" />
                    <span className="fasong"><Button>发送</Button></span>
                </div>
                <div>
                    <h3 style={{ margin: '16px 0' }}>Small Size</h3>
                    <List
                        size="small"
                        header={<div>快捷回复</div>}
                        // footer={<div>Footer</div>}
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        )
    }
}
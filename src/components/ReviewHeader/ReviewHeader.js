import React, { Component } from 'react'
import './ReviewHeader.css'
import { Input, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import { Button } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;

export default class ReviewHeader extends Component {

    render() {
        return (
            <div className="header">
                <InputGroup compact>
                    <Select defaultValue="MID">
                        <Option value="MID">MID</Option>
                        <Option value="KEYWORD">关键字</Option>
                        <Option value="NAME">名字</Option>
                    </Select>
                    <Input style={{ width: '50%' }} />
                    <Button icon="search">Search</Button>
                </InputGroup>
            </div>
        )
    }
}
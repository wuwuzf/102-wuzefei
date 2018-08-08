import React, { Component } from 'react'
import { Input, Select } from 'antd';
import { Button } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;


export default class ReviewSearch extends Component {
    render() {
        return (
            <div className="search">
                    <InputGroup compact>
                        <Select defaultValue="MID">
                            <Option value="MID">MID</Option>
                            <Option value="KEY">关键字</Option>
                            <Option value="NAME">学员名</Option>
                        </Select>
                        <Input style={{ width: '50%' }} defaultValue="MID/关键字/学员名" />
                        <Button>提交</Button>
                    </InputGroup>
            </div>
        )
    }
}
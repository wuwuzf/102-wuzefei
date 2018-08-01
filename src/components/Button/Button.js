import React, { Component } from 'react';
import { Button } from 'antd';
import './Button.css'
import { Input } from 'antd';

const Search = Input.Search;




export default class Buttontwo extends Component {
    render() {
        return (
            <div>
                <Button >汇总</Button>
                <Button type="primary" className="bb">摄影课</Button>
                <Button >绘画课</Button>
                <Search
                    className="search"
                    placeholder="MID"
                    enterButton="搜索"
                    size="small"
                    style={{ width: '30%' }}
                    onSearch={value => console.log(value)}
                />
               
            </div>
        )
    }
}
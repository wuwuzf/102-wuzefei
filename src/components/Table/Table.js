import React,{Component} from 'react';
import './Table.css';
import { Table } from 'antd';




export default class Tables extends Component{
    constructor(){
        super();
    
}
    render(){
      const {data,columns,data1} =this.props;
        return(
            <div>
                <div>
                    <div className="word0">在学课程</div>
                    <div ><Table columns={columns} dataSource={data} /></div>
                </div>
                <div>
                    <div className='word1'>历史数据</div>
                    <div><Table columns={columns} dataSource={data1} /></div>
                </div>
            </div>
        )
    }
}
import React,{Component} from 'react';
import './Table.css';
import { Table } from 'antd';




export default class Tables extends Component{
    constructor(){
        super();
    
}
    render(){
      const {data,columns} =this.props;
        return(
            <div>
                <div>
                    <div><Table columns={columns} dataSource={data} /></div>
                </div>
            </div>
        )
    }
}
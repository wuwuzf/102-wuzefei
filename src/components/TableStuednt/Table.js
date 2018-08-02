import React,{Component} from 'react';
import { Table } from 'antd';
import { columns } from './list.js'




export default class Tabletwo extends Component{
    constructor(){
        super();
    
}
    render(){
      const {studentList} =this.props;
     console.log("二二", studentList)
        return(
                <div>
                    
                    <Table columns={columns} dataSource={studentList} />
                </div>
        )
    }
}
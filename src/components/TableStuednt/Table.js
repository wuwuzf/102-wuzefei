import React,{Component} from 'react';
import { Table } from 'antd';
import { columns } from './list.js'
import Buttontwo from '../Button/Button.js'
import './list.css'


export default class Tabletwo extends Component{
    constructor(){
        super();
    
}
    render(){
      const {studentList} =this.props;
     console.log("二二", studentList)
        return(
                <div className="tab">
                    <div className="bnt"><Buttontwo  /></div>
                    <Table columns={columns} dataSource={studentList} />
                </div>
        )
    }
}
import React,{Component} from 'react';
import { Table } from 'antd';
import { columns } from './list.js'
import './list.css'



export default class Class extends Component{
    constructor(){
        super();
    
}
    render(){
      const {list,basic_info,real_teacher,virtual_teacher} =this.props;
      console.log(this.props)
      console.log("啊啊啊",list)
        return(
                <div className="tab">
                  
                    <span>班级：{basic_info.name} </span>
                    <span>班级ID:{basic_info.id} </span>
                    <span>老师：{real_teacher.name}/ID :{real_teacher.mid}/微信 :{real_teacher.wx_code}</span>
                    <span>负责员工：{virtual_teacher.nick} /ID: {virtual_teacher.id} /  微信:{virtual_teacher.wx_code} </span>
                  
                    <Table dataSource={list} columns={columns}  />
                </div>
        )
    }
}
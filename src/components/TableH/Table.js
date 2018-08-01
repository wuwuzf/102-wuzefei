import React,{Component} from 'react';
import { Table } from 'antd';
import { columns } from './list.js'




export default class Tablethree extends Component{
    constructor(){
        super();
    
}
    render(){
      const {list,basic_info} =this.props;
      console.log(this.props)
      console.log("啊啊啊",basic_info,list)
        return(
                <div>
                    <span>班级：{basic_info.name}  
                    班级ID:{basic_info.id} 
                    {/* 老师：{basic_info['real_teacher'].name}   */}
                     {/* {basic_info['real_teacher'].mid} { basic_info['real_teacher'].wx_code} */}
                      {/* 负责员工：{basic_info.virtual_teacher.id}  */}
                       </span>
                    <Table dataSource={list} columns={columns}  />
                </div>
        )
    }
}
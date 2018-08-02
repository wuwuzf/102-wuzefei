import React,{Component} from 'react'
import { Icon } from 'antd';
import './list.css'
function colorIcon (text){
  if (text ==1 ){
    return <span className="yes"><Icon style={{ fontWeight:20 }}type="check" /></span>
  }
  else if (text == 0){
    return <span className="no"><Icon type="close" /></span>
  }
  else if (text == -1){
    return <span className="un"><Icon type="minus" /></span>
  }
}

function num (text) {
  if (text>4){
    return <span>{text}</span>
  }
  else if (text<5) {
    return <strong className="red">{text}</strong>
  }
}


export const columns =[{
    title: '课程内容',
    dataIndex: 'course_name',
    key: 'course_name',   
  }
  , {
    title: '上课时间',
    dataIndex: 'time',
    key: 'time',
  }, {
    title: '上课情况',
    dataIndex: 'enter_status',
    key: 'enter_status',
    render : text =>{
      return ( colorIcon(text) )
    }
  },{
    title: '作业提交情况',
    dataIndex: 'homework_status',
    key: 'homework_status', 
    render : text =>{
      return ( colorIcon(text) )
    }
  },{
    title: '被点评情况',
    dataIndex: 'review_status',
    key: 'review_status',
    render : text =>{
      return ( colorIcon(text) )
    }
  },{
    title: '打卡情况',
    dataIndex: 'clockin_status',
    key:'clockin_status',
    render : text =>{
      return ( colorIcon(text) )
    }
  },{
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key:'satisfied_score',
    render : text =>{
      return ( num (text) )
    }
  }
]
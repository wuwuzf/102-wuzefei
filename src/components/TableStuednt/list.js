import React,{Component} from 'react';
// import { Link } from 'react-router'
import './list.css'
export const columns =[{
  title: '图片',
  dataIndex: 'hurl',
  key: 'hurl',
  render:(text) =>{
    return (
      // <div className="hurl">
        <img className="hurl" src= {text} alt=''/>
      // </div>
    )
  }
},{
    title: '学员名',
    dataIndex: 'nick',
    key: 'nick',   
    render:(text) =>{
      return(
      // <Link  to="/student">{text}</Link>
      <div>{text}</div>
      )
    }
  }, {
    title: '学员编号',
    dataIndex: 'mid',
    key: 'mid',
  },
  
  {
    title: '入学时间',
    dataIndex: 'enter_time',
    key: 'enter_time',
  },{
    title: '开课时间',
    dataIndex: 'start_time',
    key: 'start_time', 
  },{
    title: '在学课程',
    dataIndex: 'learning_lessons',
    key: 'learning_lessons',
  },{
    title: '负责老师',
    dataIndex: 'teachers',
    key:'teachers'
  }
]
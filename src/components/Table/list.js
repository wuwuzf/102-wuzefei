import React,{Component} from 'react';
import './Table.css'
import { Icon } from '../../../node_modules/antd';
function fun_render(text, type) {
  if (type === 'float') {
    let num = text;
    if (num < 0.80) {
      return <span className="red">{text}</span>
    } else if (num > 0.95) {
      return <span className="orange">{text}</span>
    } else {
      return <span>{text}</span>
    }
  }
  else if (type === 'fraction') {
    let num1 = parseInt(text.split("/")[0]);
    let num2 = parseInt(text.split("/")[1]);
    const num = num1 / num2;
    if (num < 0.8) {
      return <span className="red">{text}</span>
    } else if (num > 0.95) {
      return <span className="orange">{text}</span>
    } else {
      return <span>{text}</span>
    }
  }
}


export const columns =[{
    title: '班级',
    dataIndex: 'classInfo',
    key: 'classInfo',   
    render:text =>{
      return(
        <div>
           <Icon type="exclamation-circle" />
           <span>{text.name}</span>
        </div>
      )}
  }, {
    title: '课程状态',
    dataIndex: 'status',
    key: 'status',
  }, {
    title: '开课时间',
    dataIndex: 'startTime',
    key: 'startTime',
  },{
    title: '老师',
    dataIndex: 'teacherInfo',
    key: 'teacherInfo',
    render:text =>{
      return(
        <div >
           <Icon type="user" />
           <span>{text.nick}</span>
        </div>
      )}
  },{
    title: '上课率',
    dataIndex: 'enterRate',
    key: 'enterRate',
    render:text =>{
      return(
        fun_render(text, 'fraction')
      )
  }
  },{
    title: '作业提交率',
    dataIndex: 'homeworkSubmitRate',
    key: 'homeworkSubmitRate',

    render:text =>{
            return(
              fun_render(text, 'float')
            )
        }
  },{
    title: '被点评情况',
    dataIndex: 'beCommenttedRate',
    key: 'beCommenttedRate',
    render:text =>{
      return(
        fun_render(text, 'float')
      )
  }
  },{
    title: '打卡率',
    dataIndex: 'signRate',
    key: 'signRate',
    render:text =>{
      return(
        fun_render(text, 'fraction')
      )
  }
  },{
    title: '满意度',
    dataIndex: 'satisfyRate',
    key: 'satisfyRate',
    render:text =>{
      return(
        fun_render(text, 'float')
      )
  }
  },
]
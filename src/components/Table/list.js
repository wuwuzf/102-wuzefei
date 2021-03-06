import React,{Component} from 'react';
import './Table.css'
import { Icon } from '../../../node_modules/antd';
import { Link } from 'react-router'
import { Popover, Button } from 'antd';
import Item from '../../../node_modules/antd/lib/list/Item';
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

function num (text) {
  if (text>4){
    return <span>{text}</span>
  }
  else if (text<5) {
    return <strong className="red">{text}</strong>
  }
}


export const columns1 =[{
    title: '班级',
    dataIndex: 'classInfo',
    key: 'classInfo',   
    render:text =>{
      return(
        <div>
           <Icon type="exclamation-circle" />
           <Link  to={`/classinfo/${text.id}`}>{text.name}</Link>
        </div>
      )}
  }, {
    title: '课程状态',
    dataIndex: 'status',
    key: 'status',
    render:text =>{
        if (text==1)
         return <span>进行中</span>
        else
         return <span>已完成</span>
      
    }
  }, {
    title: '开课时间',
    dataIndex: 'startTime',
    key: 'startTime',
  },{
    title: '老师',
    dataIndex: 'teacherInfo',
    key: 'teacherInfo',
    
    render:text =>{
      const content =(
        <div>
          <p>老师: id:{text.id} 微信:{text.wxCode}</p>
          <p>对应员工: 名字:{text.realName} ID:{text.mid} 微信:{text.wxCode}</p>
        </div>
      )
      return(
        <div >
          <Popover content={content} title={text.nick} trigger="click">
            <Icon  type="user" />
          </Popover>
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



export const columns2 =[{
    title: '教程',
    dataIndex: 'course_name',
    key: 'course_name'
  },{
    title: '开课时间',
    dataIndex: 'time',
    key: 'time'
  },{
    title: '老师',
    dataIndex: 'teacher_info',
    key: 'teacher_info',
    render:text =>{
      const content =(
        <div>
          <p>老师: id:{text.id} 微信:{text.wxCode}</p>
          <p>对应员工: 名字:{text.realName} ID:{text.mid} 微信:{text.wxCode}</p>
        </div>
      )
      return(
        <div >
           <Popover content={content} title={text.nick} trigger="click">
            <Icon  type="user" />
           </Popover>
           <span>{text.nick}</span>
        </div>
      )}
  },{
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score',
    render : text =>{
      return ( num (text) )
    }
  },{
    title: '具体反馈',
    dataIndex: 'satisfied_detail',
    key: 'satisfied_detail'
  },{
    title: '操作',
    dataIndex: 'reply_status',
    key: 'reply_status',
    render :(text) =>{
      if (text ==1 ){
        return (
      
        <span className="setstate">已回复</span>
      )}
      else {
        return (
          <div >
            <Icon type="mail" />
            <span className="setstate" >待回复</span>
          </div>
        )}
    }
  }]         




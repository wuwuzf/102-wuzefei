import React, { Component } from 'react'
import './PurviewItem.css'
import Page from '../PurviewPage/PurviewPage'
import { Button } from '../../../node_modules/antd';

export default class PurviewItem extends Component{
    state ={
        isActive:false,
        teacherData:[]
    }
    handleShowPage =() =>{
        const {teacherData } = this.props;
        this.setState({
            isActive:true,
            teacherData:teacherData
        })
    }
    handleHidePage = () => {
        this.setState({
            isActive:false
        });
    }
    handleSetStatus =() =>{
        this.setState({
         isTreeActive:true
        })
    }
    render(){
        const { data,Actions,teacherData,teacherDataDec} = this.props;
       
        return(
            <div>
                <span>{data.title}</span>
                <span>{data.description}</span>
                <span  onClick={this.handleShowPage}><Button>管理权限</Button></span>
                <Page 
                    isActive = {this.state.isActive}     
                    onCancel = { this.handleHidePage}
                    data={data}
                    teacherData ={teacherData}
                    teacherDataDec={teacherDataDec}
                    Actions={Actions}
                    show = {this.handleSetStatus}
                    isTreeActive={this.state.isTreeActive}
                />
            </div>
        )
    }
}
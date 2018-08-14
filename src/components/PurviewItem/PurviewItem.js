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

    render(){
        const { data,Actions,departments,info,result,renderInfo,selectedInfoIds} = this.props;
        console.log('看这里2222222222', this.props)
        return(
            <div>
                <div>
                    <span>{data.title}</span>
                    <span>{data.description}</span>
                    <span  onClick={this.handleShowPage}><Button>管理权限</Button></span>
                </div>
                <Page 
                    isActive = {this.state.isActive}     
                    onCancel = { this.handleHidePage}
                    data={data}
                    info ={info}
                    departments={departments}
                    result={result}
                    Actions={Actions}
                    renderInfo={renderInfo}
                    selectedInfoIds={selectedInfoIds}
                />
            </div>
        )
    }
}
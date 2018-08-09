import React,{ Component} from 'react';
import { Button } from '../../node_modules/antd';
import ActionDialog from '../components/ActionDialog/ActionDialog.js'
import './com.css'
export default class Dialog extends Component {
    state = {
        type:'',
        isActive:false,
        title:'',
        renderBody:()=>{},
        okText:'',
        cancelText:''
    }

    handleShowDialog1 = () => {
        this.setState({
            type:'ios1',
            isActive:true,
            title:'弹窗标题',
            body:'告知当前状态',
            okText:'确定',
            cancelText:'取消'
        })
    }
    handleShowDialog2 = () => {
        this.setState({
            type:'ios2',
            isActive:true,
            body:'告知当前状态',
            okText:'我知道了',
        })
    }
    handleShowDialog3 = () => {
        this.setState({
            type:'android1',
            isActive:true,
            title:'弹窗标题',
            body:'告知当前状态',
            okText:'确定',
            cancelText:'取消'
        })
    }
    handleShowDialog4 = () => {
        this.setState({
            type:'android1',
            isActive:true,
            body:'告知当前状态',
            okText:'确定',
            cancelText:'取消'
        })
    }

    handleHideDialog = () =>{
        this.setState({
            isActive:false
        })
    }
    render(){
        return(
            <div>
                 <div className ="button">
                    <div className="button1" onClick={this.handleShowDialog1}><Button>ios Dialog样式一</Button></div>
                    <div className="button1" onClick={this.handleShowDialog2}><Button>ios Dialog样式二</Button></div>
                    <div className="button1" onClick={this.handleShowDialog3}><Button>Android Dialog样式一</Button></div>
                    <div className="button1" onClick={this.handleShowDialog4}><Button>Android Dialog样式二</Button></div>
                </div>
                <ActionDialog
                 type = {this.state.type}
                 isActive = {this.state.isActive}
                 title = {this.state.title}
                 renderBody = {this.state.body}
                 okText = {this.state.okText}
                 cancelText = {this.state.cancelText}
                 onOk = { this.handleHideDialog}
                 onCancel = { this.handleHideDialog}
                 />
            </div>
        )
    }
}
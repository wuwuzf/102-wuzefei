import React, { Component } from 'react';
import './ActionDialog.css'
import { Button } from '../../../node_modules/antd/lib/radio';


export default class ActionDialog extends Component {
    static defaultProps = {
        isActive: false,
        title: '',
        renderBody: () => {},
        type:'',
        onOk:() => {},
        onCancel:() => {}
    }


    getMaskClassName = () => {
        if (!this.props.isActive) {
            return 'mask hideMask';
        }
        return 'mask showMask';
    }

    getBodyClassName = () =>{
        if (!this.props.isActive) {
            return 'menu';
          }
          return 'menu showMenu';
    }

    handleDialog =() =>{
        const {type,isActive} =this.props;
        if (!isActive)
            return null
        else
            return (
                <div>
                    {this.handleTitle()}
                    {this.handleBnt(type)}
                </div>
        )
    }
    handleTitle =() =>{
        const { title,renderBody } = this.props;
        return(
            
                <div>
                    {
                    !title.length
                    ? null
                    : <div className="title divider">{title}</div>
                    }
                    {
                    !renderBody.length
                    ? null
                    : <div className="title divider">{renderBody}</div>
                    }
                </div>
        )
    }

    handleBnt = (type) =>{
        const { okText,cancelText } = this.props;
       
        if (type == 'ios1')
        return (
            
            <div className="title divider " >
              
                    <span className="left" onClick={this.props.onOk}> {okText}</span>
                    <span className="right" onClick = {this.props.onCancel}>{cancelText}</span>
              
            </div>
        )
        else if (type == 'ios2')
        return (
            <div className="title divider " onClick={this.props.onOk}>{okText}</div>
        )
        else if (type == 'android1'||'android2')
        return (
            <div className="title divider ">
                <div className="right">
                    <span onClick={this.props.onOk} >{okText}</span>
                    <span onClick = {this.props.onCancel}>{cancelText}</span>
                </div>
            </div>
        )
    }
    render() {
       
        return (
            <div>
                <div className={this.getMaskClassName()}  ></div>
                <div className="dialog">
                    {this.handleDialog()}              
                </div>
            </div>
        )
    }
}
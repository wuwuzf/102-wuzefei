import React, { Component } from 'react'
import './Sheet.css'
import PropTypes from 'prop-types';
export default class Sheet extends Component {
    static defaultProps = {
        isActive: false,
        title: '',
        menus: [],
        onCancel: () => { },
    }

    static propTypes = {
        isActive: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        menus: PropTypes.array.isRequired,
        onCancel: PropTypes.func.isRequired
    }

    getMaskClassName = () => {
        if (!this.props.isActive) {
            return 'mask hideMask';
        }
        return 'mask showMask';
    }


    getMenuClassName = (type) => {
        if (!this.props.isActive) {
            if(type=='ios')
                return 'menu';
            else return null
        }
        else {
            if(type=='ios')
                return 'menu showMenu'
            else return 'abc'
        
    }
    }
    handleMenuItemClick = idx => {
        const { menus, onCancel } = this.props;
        menus[idx].click && menus[idx].click(idx);
        onCancel();
    }


    handleShowCancel = (type) =>{
        if (type=='ios')
        return (
            <div className="btn cancel" onClick={this.props.onCancel}>取消</div>
        )
        else return null
    }
    handleShowTitle =() =>{
        const { menus,title,type } = this.props;
        if (type=='ios')
        return(
            <div>
                {
                    !title.length
                    ? null
                    : <div className="title divider">{title}</div>
                }

                {
                    menus.map((item, idx) => (
                        <div
                            className="btn divider"
                            key={`actionSheet_${idx}`}
                            onClick={() => this.handleMenuItemClick(idx)}
                        >
                            {item.title}
                        </div>
                    ))
                }
            </div>
        )
        else return (
            <div>
                {
                    menus.map((item, idx) => (
                        <div
                            className="btn divider"
                            key={`actionSheet_${idx}`}
                            onClick={() => this.handleMenuItemClick(idx)}
                        >
                            {item.title}
                        </div>
                    ))
                }
            </div>
        )
    }
    handleShowBox =() =>{
        const {isActive,type} =this.props;
        if (!isActive) return null
        else return (
            <div>
                {this.handleShowTitle()}
                {this.handleShowCancel(type)}
            </div>
        )

    }

    render() {
        const {  onCancel, type } = this.props;
        return (
            <div className="sheetbnt">
                <div className={this.getMaskClassName()} onClick={onCancel} />
                <div className={this.getMenuClassName(type)}>
                   
                   {this. handleShowBox()}
                </div>
            </div>
        )
    }
}
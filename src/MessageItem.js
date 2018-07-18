import React,{Component}from 'react';
import './App.css';
export default class  MessageItem extends Component{
    constructor(props){
        super(props);
    }
    onMsgClick = ()=>{
        const {onMsgClick,item}=this.props;
        if(onClick){
            onClick(item);
        }
    }
}
render(){
    const {item} = this.porps;
    return(
        <li className="msg" onClick={this.onMsgClick}>
           <img src={item.icon} alt="图片未显示"/>
           <div className="box">
           <div className='word'>{item.name}</div>
           <div className="message">{item.description}</div>
        <span className="fr">{item.time}</span>
        </li>
    )
 }
}



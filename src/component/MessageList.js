import React,{Component} from 'react';
import icon0 from '../resourse/def.png';
import '../component/MessageList.css';


export default class MessageView extends Component {
  constructor(){
    super();
    this.state={
    message:[
       {
         name:'微信',
         icon:icon0
   
       },
       {
         name:'通讯录',
         icon:icon0
   
       },
       {
        name:'发现',
        icon:icon0
   
      },
      {
        name:'我',
        icon:icon0

      }
    ]
  }
  }
  renderMessageList = () =>{

    const MessageView = this.state.message.map((item,i) =>{
      return(
    <li className="ItemView">
      <div className="ItemView-word">{item.name}</div>
      <span className="ItemView-pic">
        <img className="img-img  ItemView-pic1" src={item.icon} alt="" />
        <img className="img-img  ItemView-pic2" src={item.icon} alt="" />
        <img className="img-img  ItemView-pic3" src={item.icon} alt="" />
        <img className="img-img  ItemView-pic4" src={item.icon} alt="" />
      </span>
    </li>)
    });
    return MessageView;
  }

  
   render(){    
     
    return(
     this.renderMessageList()
    );    
 }
}
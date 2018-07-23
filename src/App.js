import React from 'react';
import TopView from './components/container/top';
import MessageItem from './components/MessageItem.js';
import DialogView from './components/DialogView.js';
import './App.css';
import { DIALOG_SHOW_STATUS } from './const';

 const icon = require('./resource/icon.png');



class App extends React.Component {

  constructor(props){
    super(props);

    
      
   
    this.state = {
      messages: [
        {
          icon: icon,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14'
        },
        {
          icon: icon,
          title: '小板凳',
          descript: 'hello 小板凳',
          time: '7-18 11:15',
        },
        {
          icon: icon,
          title: '小豆包',
          descript: 'hi 小豆包',
          time: '7-17 10:00',
        }
      ],
      isDialogActive: false
    }
  }

  onItemClick = (message) => {
    console.log(message);
  }



  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
  }


  handleAddDialog = () => {
    this.setState({ isDialogActive: DIALOG_SHOW_STATUS.SHOW_ADD_MESSAGE });
  }


  handleMoreDialog = ()=> {
    this.setState({isDialogActive:DIALOG_SHOW_STATUS.SHOW_MORE_BTN });
  }


  renderTopViewList = ()=>{
    return <TopView  ADD={this.handleAddDialog}/>
  }

  handleAddItem = item => {
    const newMessages = this.state.messages.slice();
    newMessages.unshift({
      icon: icon,
      ...item,
    });
    this.setState({
      messages: newMessages,
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    });
  }


  render() {
    return (
      <div>
        {this.renderTopViewList() }

        {
          this.state.messages.map((item,i) => {
            return <MessageItem item={item}  MORE={this.handleMoreDialog} />
          }
        )}
        
        <nav className="chat-nav">
          <div className="chat-nav__item" onClick={this.handleAddItem}>
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">微信</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">通讯录</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">发现</div>
          </div>
          <div className="chat-nav__item" onClick={this.handleShowDialog.bind(this, true)}>
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">我</div>
          </div>
        </nav>


        <DialogView
          isActive={this.state.isDialogActive}
          onCloseClick={this.handleShowDialog}
          onAddItem={this.handleConfirmAddClick}
          handleDeleteItem={this.handleDeleteItem}
          handleSetToTop={this.handleSetToTop}
          handleMultipleClick={this.handleMultipleClick}
        />
      </div>
    );
  }
}

export default App;

import React from 'react';
import { connect } from 'react-redux'
import MessageItemView from './components/MessageItem.js';
import DialogView from './components/DialogView.js';
import NavBar from './components/NavBar';
import ChatNav from './components/ChatNav';
import { DIALOG_SHOW_STATUS } from './const';
import { acSetChatMessages, setChatSelectIdx, setChatMultipleSelect } from './actions/index';
import './App.css';
import { bindActionCreators } from 'redux';  //
import * as todoActionCreators from '../../zhousi/src/actions'  //
import { Provider } from 'react-redux'; //
import icon from './resource/icon_Good_B-2.png';


import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer  from './reducers'
import { createLogger } from 'redux-logger';
const logger = createLogger();


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
  )
)


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    }
  }

  onItemClick = (message) => {
    console.log(message);
  }

  handleItemMoreClick = (index) => {
    const { dispatch } = this.props
    dispatch(setChatSelectIdx(index))
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_MORE_BTN,
    })
  }

  handleDeleteItem = () => {
    const { messages, handleItemIndex, dispatch } = this.props
    const messageTmp = messages.slice()
    messageTmp.splice(handleItemIndex, 1)
    dispatch(acSetChatMessages(messageTmp))
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }

  handleMultipleClick = () => {
    const { handleItemIndex, dispatch } = this.props
    dispatch(setChatMultipleSelect([handleItemIndex]))
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }

  handleSelectItem = index => {
    const { showMultipleSelect, dispatch } = this.props
    const showMultipleSelectTmp = showMultipleSelect.slice()
    const idx = showMultipleSelectTmp.findIndex(item => item === index)
    if (idx >= 0) {
      showMultipleSelectTmp.splice(idx, 1)
    } else {
      showMultipleSelectTmp.push(index)
    }
    dispatch(setChatMultipleSelect(showMultipleSelectTmp))
  }

  handleDeleteMultiple = () => {
    const { showMultipleSelect, messages, dispatch } = this.props
    const messagesTmp = messages.slice()
    let showMultipleSelectTmp = showMultipleSelect.slice()
    showMultipleSelectTmp = showMultipleSelectTmp.sort((a, b) => b - a)
    showMultipleSelectTmp.forEach(item => {
      messagesTmp.splice(item, 1)
    })
    dispatch(acSetChatMessages(messagesTmp))
  }

  handleSetToTop = () => {
    const { handleItemIndex, messages, dispatch } = this.props
    const messageTmp = messages.slice()
    const message = messageTmp.splice(handleItemIndex, 1)
    messageTmp.unshift({
      ...message.pop(),
      isToTop: true,
    })
    dispatch(acSetChatMessages(messageTmp))
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    })
  }

  handleShowAddViewClick = () => {
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.SHOW_ADD_MESSAGE,
    })
  };

  handleAddItem = item => {
    const { messages, dispatch } = this.props;
    const newMessages = messages.slice();
    let firstNotTopIdx = -1;
    newMessages.forEach((item, idx) => {
      if (item.isToTop) {
        firstNotTopIdx = idx
      }
    });
    newMessages.splice(firstNotTopIdx + 1, 0, {
      icon: icon,
      isToTop: false,
      ...item,
    });
    dispatch(acSetChatMessages(newMessages))
    this.setState({
      isDialogActive: DIALOG_SHOW_STATUS.HIDE,
    });
  }

  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
  }

  renderMessageList = () => {
    const { messageList, showMultipleSelect } = this.props
    console.log(messageList)
    return messageList.map((item,i) => {
      return <MessageItemView
        key={i}
        item={item}
        index={i}
        onClick={this.onItemClick}
        onItemMoreClick={this.handleItemMoreClick}
        showMultipleSelect={showMultipleSelect}
        onSelectItem={this.handleSelectItem}
      />
    });
  }

  renderMultipleDeleteBtn() {
    const { showMultipleSelect } = this.props
    if (!Array.isArray(showMultipleSelect)) {
      return null
    }
    return (
      <div>
        <div className="multipleDeleteBtn" onClick={this.handleDeleteMultiple}>删除</div>
      </div>
    )
  }

  render() {
    const { isDialogActive } = this.state
    return (
      <div>
         <Provider store={store}> 
        <NavBar onShowAddViewClick={this.handleShowAddViewClick} />
        {this.renderMessageList()}
        {this.renderMultipleDeleteBtn()}
        <ChatNav />
        <DialogView
          isActive={isDialogActive}
          onCloseClick={this.handleShowDialog}
          handleAddItem={this.handleAddItem}
          handleDeleteItem={this.handleDeleteItem}
          handleSetToTop={this.handleSetToTop}
          handleMultipleClick={this.handleMultipleClick}
        />
         </Provider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { messageList } = state;//
  const props = {messageList} 
  return props;
  
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch)
    //dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

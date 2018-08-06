import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
// import Op from './container/Op'
// import Student from './container/Student'
// import ClassInfo from './container/Class'
// import { Provider } from 'react-redux';
// import { createStore,applyMiddleware,compose } from 'redux'; 
// import rootReducer from './reducers';
// import { createLogger } from 'redux-logger';
// import serverApi from './middleware/serverApi';
// const logger = createLogger(); 

// const store = createStore(
//     rootReducer,
//         applyMiddleware(serverApi,logger)
// )

class App extends Component {
    constructor(props){
        super(props);
      }
    
    render() {
        console.log("hehehehehhehiiiiii")
        const { children } = this.props
        return (
            <div>
                {children}
            </div>
        );
    }
}


function mapStateToProps(state) {
    const {
         tablelist,
         headerlist, 
         tablelisttwo,
         tablelistthree
          } = state
    return {
      ...tablelist,
      ...headerlist, 
      ...tablelisttwo,
      ...tablelistthree
    }
  }
  
  export default connect(mapStateToProps)(App);
  

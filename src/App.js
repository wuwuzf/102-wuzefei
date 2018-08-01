import React, { Component } from 'react';
import Op from './container/Op'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux'; 
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import serverApi from './middleware/serverApi';





const logger = createLogger(); 

const store = createStore(
    rootReducer,
        applyMiddleware(serverApi,logger)
)

class App extends Component {

    
    render() {
        console.log("hehehehehhehiiiiii")
        return (
            <Provider store={store}>
                <Op />
            </Provider>
        );
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, browserHistory, IndexLink } from 'react-router'
// import index from './reducers/index'
import rootReducer from './reducers';
import serverApi from './middleware/serverApi';


import Op from './container/Op'
import Student from './container/Student'
import ClassInfo from './container/Class'
import Review from './container/Review'
import ActionSheet from './container/ActionSheet'
import Dialog from './container/Dialog'
import Progress from './container/Progress'
import Purview from './container/Purview'
const logger = createLogger(); 

const store = createStore(
    rootReducer,
    applyMiddleware(serverApi,logger)
)



const routes = [{
    path:'/',
    component:App,
    indexRoute:{ component: Purview },
    childRoutes:[
        { path:'op/:mid', component:Op},
        { path: 'classinfo/:id', component: ClassInfo },
        { path: 'student', component:Student},
        { path: 'review' , component:Review},
        { path: 'Dialog' , component:Dialog},
        { path: 'Progress' , component:Progress},
        { path: 'ActionSheet' ,component:ActionSheet},
        { path: 'Purview' , component:Purview}
    ]

}]




console.log("kkkkkkkkkkkkkkk")

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />

    </Provider>,
    // <App />, 
    document.getElementById('root'));
registerServiceWorker();

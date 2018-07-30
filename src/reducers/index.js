import { combineReducers } from 'redux'
import tablelist from '../reducers/tablelist'
import headerlist from '../reducers/headerlist'


export default combineReducers({
    tablelist,
    headerlist
});
import { combineReducers } from 'redux'
import tablelist from '../reducers/tablelist'
import headerlist from '../reducers/headerlist'
import tablelisttwo from '../reducers/tablelisttwo'
import tablelistthree from '../reducers/tablelistthree'


export default combineReducers({
    tablelist,
    headerlist,
    tablelisttwo,
    tablelistthree
});
import { combineReducers } from 'redux'
import tablelist from '../reducers/tablelist'
import headerlist from '../reducers/headerlist'
import tablelisttwo from '../reducers/tablelisttwo'
import tablelistthree from '../reducers/tablelistthree'
import tablereview from '../reducers/tablereview'
import entities from '../reducers/entities'
export default combineReducers({
    tablelist,
    headerlist,
    tablelisttwo,
    tablelistthree,
    tablereview,
    entities
});
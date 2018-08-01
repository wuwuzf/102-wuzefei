import * as ActionTypes from '../const/actionTypes'


const initstate = {
    studentList:{}
  }
  
  export default function tablelistthree(state = initstate, action) {
    switch (action.type) {
     
      case ActionTypes.FETCH_STUDENTLIST_SUC:
        console.log("往这看" ,action)
        const studentList = action.response.data;
  
        return Object.assign({}, state, { studentList })
      default:
      
        return state;
    }
  } 


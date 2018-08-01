 import * as ActionTypes from '../const/actionTypes';



const initstate = {
   basic_info :[],
   list:{}
  }
  
  export default function tablelistthree(state = initstate, action) {
    switch (action.type) {
      case ActionTypes.FETCH_CLASSINFO_SUC:
        console.log("看过来",action)
        const basic_info = action.response.data.basic_info
        const list = action.response.data.list
        return Object.assign({}, state, { basic_info,list})
      default:
        return state;
    }
  } 
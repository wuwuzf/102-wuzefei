 import * as ActionTypes from '../const/actionTypes';



const initstate = {
   basic_info :{},
   real_teacher:{},
   virtual_teacher:{},
   list:[]
  }
  
  export default function tablelistthree(state = initstate, action) {
    switch (action.type) {
      case ActionTypes.FETCH_CLASSINFO_SUC:
        console.log("看过来",action)
        const basic_info = action.response.data.basic_info
        const real_teacher =action.response.data.basic_info.real_teacher
        const virtual_teacher = action.response.data.basic_info.virtual_teacher
        const list = action.response.data.list
        return Object.assign({}, state, { basic_info,real_teacher,virtual_teacher,list})
      default:
        return state;
    }
  } 
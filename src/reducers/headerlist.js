import * as ActionTypes from '../const/actionTypes';

const initstate={

//     message:[
//     'MID330900002',
//     '摄影课 绘画课' ,
//     '2018-03-30' ,
//     '987',
//     '876天',
//     '2018-03-30',
//     '1321234313'
// ]
  message:{
      hurl:""
  }
}



export default function headerlist(state = initstate,action){
    switch(action.type){
        case ActionTypes.FETCH_USERINFO_SUC:
        console.log("data is here ",action)
        const message = action.response.data;
        return Object.assign({}, state, { message })
        default:
        return state;
    }
} 
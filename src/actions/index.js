import axios from 'axios';
import * as ActionTypes from '../const/actionTypes.js';
import { normalize } from 'normalizr'
import Schema from '../scheme'


export function fetchUserInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_USERINFO,
      endpoint: '/getUserInfo',
      params: {
        mid
      }
    }
  }
}

export function fetchLessonInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_LESSONINFO,
      endpoint: '/getLessonInfo',
      params: {
        mid
      },
      normalizeFuc: json =>{
        return {
          current: normalize(json.currentlessonList,Schema.lessonListSchema),
          history: normalize(json.historyLessonsList, Schema.lessonListSchema)
        }
      }
    }
  }
}




export function fetchclassinfo(id) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_CLASSINFO,
      endpoint: '/getClassInfo',
      params: {
        id
      }
    }
  }
}


export function fetchstudentlist(id) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_STUDENTLIST,
      endpoint: '/getStudentList',
      params: {
        id
      }
    }
  }
}

export function fetchsatisfiledlist(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_SATISFILEDLIST,
      endpoint: '/getSatisfiledList',
      params: {
        mid
      }
    }
  }
}



// componentDidMount(){
//   axios({
//       method:'post',
//       url:'',
//       data:{
//           ""
//       }
//   }).then(res =>{

//   }).catch(err =>{
      
//   })
// }



// SERVER_API :{
//   type :ActionTypes.FEACH_LESSON_INFO,
//   url:''
//   param:{
//     mid
//   }

// }
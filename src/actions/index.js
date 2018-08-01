import axios from 'axios';
import * as ActionTypes from '../const/actionTypes.js';

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
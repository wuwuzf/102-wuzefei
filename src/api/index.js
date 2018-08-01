// import React,{Component} from 'react'
// import axios from 'axios';
// import * as ActionTypes from '../const/actionTypes';

// export function fetchlesson( next ) {
//   console.log("hheheheheh");
  
//   next({
//     type: ActionTypes.FETCH_LESSONINFO_REQ
//   });
  
//   axios({
//       method: 'post',
//       url: `http://xly-wkop.xiaoniangao.cn/getLessonInfo`,
//       headers: { 'content-type': 'application/x-www-form-urlencoded' },
//       data:{
//         mid:'001'
//       }
//     }).then(res => {
//       console.log("data is here")
//       console.log(res.data.data);
//       console.log("data is here")

//       next({
//         type: ActionTypes.FETCH_LESSONINFO_SUC,
//         data: res.data.data
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       next({
//         type: ActionTypes.FETCH_LESSONINFO_FAI
//       });
//     });
//   }

//  export function fetchuser( next ) {
//       next({
//         type: ActionTypes.FETCH_USERINFO_REQ
//       });
//       axios({
//         method: 'post',
//         url: `http://xly-wkop.xiaoniangao.cn/getUserInfo`,
//         headers: { 'content-type': 'application/x-www-form-urlencoded' },
//         data:{
//           mid:'001'
//         }
//       })
//     .then(res =>  {
//       console.log("往这看")
//       console.log(res);
//       next({
//         type: ActionTypes.FETCH_USERINFO_SUC,
//         data: res.data.data
//       });
//     })
//     .catch( err => {
//       console.log(err);
//       next({
//         type: ActionTypes.FETCH_USERINFO_FAI,
//       });
//     });
//   }






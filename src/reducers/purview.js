import * as ActionTypes from '../const/actionTypes';

const initstate = {
    listData:[ 
            {
                title:'点评作业:',
                description:'拥有个人点评页，可以为学生作业进行点评'
            },{
                title:'代课老师:',
                description:'拥有审核点评老师点评内容的权限，包括撤回点评，自行点评'
            }
    ],
    Info:{
        1001:{mid:'1001',name:'小张'},
        1002:{mid:'1002',name:'小刘'},
        1003:{mid:'1003',name:'小赵'}   
    },
    teacherDatas:[
        1001,1002,1003
    ],
    teacherDataDecs:[1001],

  }

  export default function purview (state=initstate,action) {
      switch (action.type) {
          case ActionTypes.FETCH_PURVIEW_HOMEWORK:
          return {
              ...state,
              listData:state.listData,
          }
          case ActionTypes.FETCH_PURVIEW_TEACHER:
          return {
              ...state,
              Info:state.Info,
              teacherDatas:state.teacherDatas
          }
          case ActionTypes.FETCH_PURVIEW_DEC:

          return {
            ...state,
            Info:state.Info,
            teacherDataDecs:state.teacherDataDecs
          }
          default:
            return state;
      }
  }
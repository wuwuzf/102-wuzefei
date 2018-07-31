import * as ActionTypes from '../const/actionTypes';
import * as api from '../api';


// const initstate={


//   data :[{
//     key: '1',
//     class: '高级班',
//     status: '进行中',
//     starttime: '2018-4-20',
//     teacher:'小白老师',
//     classrate:'3/21',
//     work:'67.98%',
//     review:'87.98%',
//     punch:'3/21%',
//     pleased:'90%'
//   }, {
//     key: '2',
//     class: '进阶班',
//     status: '进行中',
//     starttime: '2018-4-21',
//     teacher:'小白老师',
//     classrate:'5/21',
//     work:'76.89%',
//     review:'37.81%',
//     punch:'5/21%',
//     pleased:'98%'
//   }, {
//     key: '3',
//     class: '提高班',
//     status: '进行中',
//     starttime: '2018-4-22',
//     teacher:'小白老师',
//     classrate:'13/21',
//     work:'13.89%',
//     review:'21.76%',
//     punch:'13/21',
//     pleased:'88%'
//   },{
//     key: '4',
//     class: '入门班',
//     status: '进行中',
//     starttime: '2018-4-23', 
//     teacher:'小白老师',
//     classrate:'20/21',
//     work:'98.45%',
//     review:'98.67%',
//     punch:'20/21',
//     pleased:'30%'
//   },{
//     key: '5',
//     class: '体验班',
//     status: '已结束',
//     starttime: '2018-4-24',
//     teacher:'小白老师',
//     classrate:'21/21',
//     work:'31.98%',
//     review:'78.76%',
//     punch:'21/21',
//     pleased:'34%'
//   }
// ],
// data1:[{
//     key: '5',
//     class: '体验班',
//     status: '已结束',
//     starttime: '2018-4-24',
//     teacher:'小白老师',
//     classrate:'21/21',
//     work:'8/10',
//     review:'5/10',
//     punch:'10/10',
//     pleased:'90%'
// }
// ]
// }


const initstate = {
  LessonsList: [],
  historyLessonsList: []
}

export default function tablelist(state = initstate, action) {
  switch (action.type) {
    case ActionTypes.FETCH_LESSONINFO_SUC:

      let LessonsList = action.data.currentLessonsList;
      let historyLessonsList = action.data.historyLessonsList;
      // console.log("lesson is here`")
      // console.log(LessonsList,'+',historyLessonsList1);
      // console.log("lesson is here")

      return Object.assign({}, state, { LessonsList, historyLessonsList:historyLessonsList })
    // case ActionTypes.FETCH_USERINFO_SUC:
    //   let historyLessonsList = action.next.data.historyLessonsList;
    //   return Object.assign({}, state, { historyLessonsList })
    default:
      return state;
  }
} 
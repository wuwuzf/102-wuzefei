import * as ActionTypes from '../const/actionTypes';
import * as api from '../api';




const initstate = {
  LessonsListIds: [],
  historyLessonsListIds: [],
  satisfiledlist:[],
  lessonEntities:[]
}

export default function tablelist(state = initstate, action) {
  switch (action.type) {
    case ActionTypes.FETCH_LESSONINFO_SUC:
      console.log("这里",action)
      // const LessonsList = action.response.data.currentLessonsList;
      // const historyLessonsList = action.response.data.historyLessonsList;
      const lessonEntities = action.response.entities.lesson;
      const LessonsListIds = action.response.current.result;
      const historyLessonsListIds = action.response.history.result;
      return Object.assign({}, state, { LessonsListIds, historyLessonsListIds,lessonEntities})
      // return Object.assign({}, state, { LessonsList, historyLessonsList})
    case ActionTypes.FETCH_SATISFILEDLIST_SUC:
      const satisfiledlist = action.response.data.list;
      return Object.assign({}, state, { satisfiledlist })
    default:
      return state;
  }
} 
import * as ActionTypes from '../const/actionTypes';





const initstate = {
  currentLessonsListIds: [],
  historyLessonsListIds: [],
  satisfiledlistIds:[]
}

export default function tablelist(state = initstate, action) {
  switch (action.type) {
    case ActionTypes.FETCH_LESSONINFO_SUC:
      console.log("这里",action)   
      const currentLessonsListIds = action.response.currentLessonsList.result;
      const historyLessonsListIds = action.response.historyLessonsList.result;
      return {
        ...state,
        ...historyLessonsListIds,
        ...currentLessonsListIds
      }
    case ActionTypes.FETCH_SATISFILEDLIST_SUC:
      const satisfiledlistIds = action.response.result;
      return {
        ...state,
        ...satisfiledlistIds
      }
    default:
      return state;
  }
} 
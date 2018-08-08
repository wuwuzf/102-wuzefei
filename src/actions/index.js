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
      normalizeFuc: json => {
        console.log("json ", json)
        console.log()
        const { currentLessonsList: cur, historyLessonsList: his} = json;
        const currentLessonsList = normalize(cur, Schema.lessonListSchema);
        const historyLessonsList = normalize(his, Schema.lessonListSchema);
        console.log("lessons ", json.currentLessonsList)

        return {
          currentLessonsList,
          historyLessonsList
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
      },
      normalizeFuc: json => {
        const satisfiedList = normalize(json.list, Schema.satisfiedListSchema);
        return satisfiedList;
      }
    }
  }
}

export function fetchhomework(rules) {
  const { token, isReviewed } = rules;
    let type = '';
    if (token && !isReviewed) {
        type = ActionTypes.FETCH_HOMEWORK_MYUNREVIEW;
    } else if (token && isReviewed) {
        type =  ActionTypes.FETCH_HOMEWORK_MYREVIEWED;
    } else if (!token && !isReviewed) {
        type =  ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW;
    } else {
        type = ActionTypes.FETCH_HOMEWORK_ALLREVIEWED;
    }
  return {
    SERVER_API: {
      type,
      endpoint: '/getHomeWork',
      params: {
        rules
      },
      normalizeFuc: json => {
        // debugger
        const homework = normalize(json, Schema.homeworksSchema);
        return homework;
      }
    }
  }
}


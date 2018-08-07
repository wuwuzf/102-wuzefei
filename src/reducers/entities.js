import { combinReducers } from 'redux'
import ActionTypes from '../const/actionTypes'

function classes (state = {}, action){
    switch(action.type){
        case  ActionTypes.FETCH_SATISFILEDLIST_SUC:{
            const entities = action.response.entities
            return {
                ...state,
                ...entities.classes
            };
        }
        case  ActionTypes.FETCH_LESSONINFO_SUC:{
            const currentEntities = action.response.current.entities;
            const historyEntities = action.response.history.entities;
            return {
                ...state,
                ...currentEntities,
                ...historyEntities
            };
        }
        default:
         return state;
    }
}
  function teachers (state = {},action){
      switch(action.type){
          case FETCH_SATISFILEDLIST_SUC:{
              const entities = action.response.entities
              return {
                  ...state,
                  ...entities.teachers
              };
          }
          case ActionTypes.FETCH_LESSONINFO_SUC:{
            const currentEntities = action.response.current.entities;
            const historyEntities = action.response.history.entities;
            return {
                ...state,
                ...currentEntities,
                ...historyEntities
            };
          }
          default:
            return state;
      }
  }

function satisfied (state = {},action ){
    switch(action.type){
        case FETCH_SATISFILEDLIST_SUC:{
            const entities = action.response.entities
            return {
                ...state,
                ...entities.satisfied
            };
        }
        default:
            return state;
    }
}

function currentLessonList(state = {},action){
    switch(action.type){
        case ActionTypes.FETCH_LESSONINFO_SUC:{
            const entities = action.response.entities
            return {
                ...state,
                ...entities.currentLessonList
            };
        }
        default:
            return state;
    }
}


function historyLessonList(state = {},action){
    switch(action.type){
        case ActionTypes.FETCH_LESSONINFO_SUC:{
            const entities = action.response.entities
            return {
                ...state,
                ...entities.historyLessonList
            };
        }
        default:
            return state;
    }
}

export default combinReducers({
    classes,
    teachers,
    satisfied,
    currentLessonList,
    historyLessonList
})
import { combineReducers } from 'redux'
import * as ActionTypes from '../const/actionTypes'

function classes(state = {}, action) {
    const { response } = action;
    switch (action.type) {
        case ActionTypes.FETCH_SATISFILEDLIST_SUC: {
            const entities = response.entities
            return {
                ...state,
                ...entities.classes
            };
        }
        case ActionTypes.FETCH_LESSONINFO_SUC: {
            const currentEntities = response.currentLessonsList.entities.classes;
            const historyEntities = response.historyLessonsList.entities.classes;
            return {
                ...state,
                ...currentEntities,
                ...historyEntities
            };
        }
        case `${ActionTypes.FETCH_HOMEWORK_MYUNREVIEW}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_MYREVIEWED}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_ALLREVIEWED}_SUC`:
            {
                return {
                    ...state,
                    ...response.entities.classes
                }
            }
        default:
            return state;
    }
}
function teachers(state = {}, action) {
    switch (action.type) {
        case ActionTypes.FETCH_SATISFILEDLIST_SUC: {
            const entities = action.response.entities
            return {
                ...state,
                ...entities.teachers
            };
        }
        case ActionTypes.FETCH_LESSONINFO_SUC: {
            const currentEntities = action.response.currentLessonsList.entities.teachers;
            const historyEntities = action.response.historyLessonsList.entities.teachers;
            return {
                ...state,
                ...currentEntities,
                ...historyEntities
            };
        }
        case `${ActionTypes.FETCH_HOMEWORK_MYUNREVIEW}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_MYREVIEWED}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_ALLREVIEWED}_SUC`:{
         return{
             ...state,
             ...action.response.entities.teachers
         }}
        default:
            return state;
    }
}

function satisfied(state = {}, action) {
    switch (action.type) {
        case ActionTypes.FETCH_SATISFILEDLIST_SUC: {
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


const lessons = (state ={},action) =>{
    switch(action.type){
        case  ActionTypes.FETCH_LESSONINFO_SUC:{
            return {
                ...state,
                ...action.response.current.entities.lessons,
                ...action.response.history.entities.lessons
            }
        }
        default:
            return state;
    }
}


const comments = (state = {}, action)=>{

    const { response } = action;
    switch(action.type){
       
        case `${ActionTypes.FETCH_HOMEWORK_MYUNREVIEW}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_MYREVIEWED}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_ALLREVIEWED}_SUC`:{
            return {
                ...state,
                ...response.entities.comments
            }
        }
        
        default: return state;
    }
}


const homeworks = (state = {}, action) => {

    const { response } = action;
    switch (action.type) {
        case `${ActionTypes.FETCH_HOMEWORK_MYUNREVIEW}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_MYREVIEWED}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW}_SUC`:
        case `${ActionTypes.FETCH_HOMEWORK_ALLREVIEWED}_SUC`:{
            return {
                ...state,
                ...response.entities.homeworks
            }
        }
        default: return state;
    }
}
const entities = combineReducers({
    classes,
    teachers,
    satisfied,
    lessons,
    comments,
    homeworks
})

export default entities;
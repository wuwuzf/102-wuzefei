import * as ActionTypes from '../const/actionTypes'




const initstate ={
    myunreviewIds:[],
    myreviewedIds:[],
    allunreviewIds:[],
    allreviewedIds:[]
}



export default function tablereview(state= initstate,action){
    switch (action.type) {
        case  `${ActionTypes.FETCH_HOMEWORK_MYUNREVIEW}_SUC`:
        console.log('获取的数据111',action)
        // debugger
        return {
            ...state,
            myunreviewIds:action.response.result
        }
        case  `${ActionTypes.FETCH_HOMEWORK_MYREVIEWED}_SUC`:
        console.log('获取的数据',action)
        return {
            ...state,
            myreviewedIds:action.response.result
        }
        case  `${ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW}_SUC`:
        console.log('获取的数据',action)
        return {
            ...state,
            allunreviewIds:action.response.result
        }
        case  `${ActionTypes.FETCH_HOMEWORK_ALLREVIEWED}_SUC`:
        console.log('获取的数据',action)
        return {
            ...state,
            allreviewedIds:action.response.result
        }
        default:
            return state;
    }
}
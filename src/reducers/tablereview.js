import * as ActionTypes from '../const/actionTypes'








export default function tablereview(state=[],action){
    switch (action.type) {
        case  `${ActionTypes.FETCH_HOMEWORK}_SUC`:
        console.log('获取的数据',action)
        
        const review = action.response.data
        return [
            ...state,
            ...review
        ]
        default:
            return state;
    }
}
import * as ActionTypes from '../const/actionTypes';

const initstate = {
    listData: [
        {
            title: '点评作业:',
            description: '拥有个人点评页，可以为学生作业进行点评'
        }, {
            title: '代课老师:',
            description: '拥有审核点评老师点评内容的权限，包括撤回点评，自行点评'
        }
    ],
    info: {
        1001: { mid: '1001', name: '小张', isSelected: false },
        1002: { mid: '1002', name: '小刘', isSelected: false },
        1003: { mid: '1003', name: '小赵', isSelected: false },
        1004: { mid: '1004', name: '小王', isSelected: false },
        1005: { mid: '1005', name: '小数', isSelected: false },
        1006: { mid: '1006', name: '小李', isSelected: false }
    },

    departments: {
        101: {
            id: 101,
            name: '所有部门',
            childs: [102],
            info: []
        },
        102: {
            id: 102,
            name: 'xx集团',
            childs: [103],
            info: []
        },
        103: {
            id: 103,
            name: '广州分公司',
            childs: [104, 105, 106, 107],
            info: []
        },
        104: {
            id: 104,
            name: '总经办',
            childs: [],
            info: [1001, 1002]
        },
        105: {
            id: 105,
            name: '财务部',
            childs: [],
            info: [1003, 1004]
        },
        106: {
            id: 106,
            name: '信息部',
            childs: [],
            info: [1005, 1006]
        },
        107: {
            id: 107,
            name: '产品研发部',
            childs: [108, 109, 110],
            info: []
        },
        108: {
            id: 108,
            name: '技术一组',
            childs: [],
            info: [1001, 1002, 1003]
        },
        109: {
            id: 109,
            name: '技术二组',
            childs: [],
            info: [1004, 1005]
        },
        110: {
            id: 110,
            name: '测试组',
            childs: [],
            info: [1006]
        }
    },


    result: 101,
    selectedInfoIds: [],
    // renderInfo:''

}

export default function purview(state = initstate, action) {
    switch (action.type) {
        case ActionTypes.FETCH_PURVIEW_SHOW: {
            return {
                ...state,
                renderInfo: action.id
            }
        }
        case ActionTypes.FETCH_PURVIEW_ADD: {

            const newIds = state.selectedInfoIds.slice();
            if (newIds.includes(action.mid)) return state;

            newIds.push(action.mid);
            console.log('push',newIds)
            return {
                ...state,
                selectedInfoIds: newIds
            }
        }
        case ActionTypes.FETCH_PURVIEW_DEL: {

            const newIds = state.selectedInfoIds.slice();
            newIds.splice(newIds.indexOf(action.mid), 1);
            return {
                ...state,
                selectedInfoIds: newIds
            }
        }
        default:
            return state;
    }

}
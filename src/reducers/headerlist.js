

const initstate={
    header_one:[{
        name:'学员编号:'
    },{
        name:'在学课程:'
    },{
        name:'入学时间:'
    }],
    header_two:[{
        name:'历史付费额:'
    },{
        name:'累计学习天数:'
    },{
        name:'最后登录时间:'
    },],
    header_three:[{
        name:'手机号码:'
    },{
        name:'微信号码:'
    },{
        name:'备注:'
    }],
    message:[
    {one:'MID330900002'} ,
    {2:'摄影课 绘画课' },
    { 3:'2018-03-30'} ,
    { 4:'987'} ,
    {5:'876天'},
    {6:'2018-03-30'},
    {7:'1321234313'}
]

}



export default function headerlist(state = initstate,action){
    switch(action.type){
        default:
        return state;
    }
} 
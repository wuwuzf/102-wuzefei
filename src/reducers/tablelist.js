const initstate={
    columns :[{
    title: '班级',
    dataIndex: 'class',
    key: 'class',
  }, {
    title: '课程状态',
    dataIndex: 'status',
    key: 'status',
  }, {
    title: '开课时间',
    dataIndex: 'starttime',
    key: 'starttime',
  },{
    title: '老师',
    dataIndex: 'teacher',
    key: 'teacher',
  },{
    title: '上课率',
    dataIndex: 'classrate',
    key: 'classrate',
  },{
    title: '作业提交率',
    dataIndex: 'work',
    key: 'work',
  },{
    title: '被点评情况',
    dataIndex: 'review',
    key: 'review',
  },{
    title: '打卡率',
    dataIndex: 'punch',
    key: 'punch',
  },{
    title: '满意度',
    dataIndex: 'pleased',
    key: 'pleased',
  },
],

 
  
  data :[{
    key: '1',
    class: '高级班',
    status: '进行中',
    starttime: '2018-4-20',
    teacher:'小白老师',
    classrate:'87%',
    work:'87%',
    review:'87%',
    punch:'87%',
    pleased:'87%'
  }, {
    key: '2',
    class: '进阶班',
    status: '进行中',
    starttime: '2018-4-21',
    teacher:'小白老师',
    classrate:'87%',
    work:'87%',
    review:'87%',
    punch:'87%',
    pleased:'87%'
  }, {
    key: '3',
    class: '提高班',
    status: '进行中',
    starttime: '2018-4-22',
    teacher:'小白老师',
    classrate:'87%',
    work:'87%',
    review:'87%',
    punch:'87%',
    pleased:'87%'
  },{
    key: '4',
    class: '入门班',
    status: '进行中',
    starttime: '2018-4-23', 
    teacher:'小白老师',
    classrate:'87%',
    work:'87%',
    review:'87%',
    punch:'87%',
    pleased:'87%'
  },{
    key: '5',
    class: '体验班',
    status: '已结束',
    starttime: '2018-4-24',
    teacher:'小白老师',
    classrate:'87%',
    work:'87%',
    review:'87%',
    punch:'87%',
    pleased:'87%'
  }
],
data1:[{
    key: '5',
    class: '体验班',
    status: '已结束',
    starttime: '2018-4-24',
    teacher:'小白老师',
    classrate:'87%',
    work:'87%',
    review:'87%',
    punch:'87%',
    pleased:'87%'
}
]
}


export default function tablelist(state = initstate,action){
    switch(action.type){
        default:
        return state;
    }
} 
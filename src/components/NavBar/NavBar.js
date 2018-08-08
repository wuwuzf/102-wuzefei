import React,{Component} from 'react';
import './NavBar.css';
import { Tabs } from 'antd';
import Buttons from '../ButtonBox/ButtonBox.js'
import Table1 from '../Table/Table.js'
import { Table } from 'antd';
import { connect } from 'react-redux'
import {columns1} from '../Table/list.js'
import {columns2} from '../Table/list.js'

const TabPane = Tabs.TabPane;
 class NavBar extends Component{


    render(){
        console.log("啊啊啊",this.props.satisfiledlist)
        return(
            
            <div>
           
              <Tabs className="navbar" >
                <TabPane tab="课程信息" key="1">
                   <Buttons />
                   <Table1 data={this.props.currentLessonsList} data1={this.props.historyLessonsList} columns={columns1} />
                </TabPane>
                <TabPane tab="满意度反馈" key="2">
                    <Table dataSource = {this.props.satisfiledlist}  columns = {columns2} />
                </TabPane>
              </Tabs>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {
        tablelist:{
        currentLessonsListIds,
        historyLessonsListIds,
        satisfiledlistIds
    },
        entities:{
            lessons,
            satisfied
        }
     } = state;
    const currentLessonsList = currentLessonsListIds.map(id => lessons[id]);
    const historyLessonsList = historyLessonsListIds.map(id => lessons[id]);
    const satisfiledlist = satisfiledlistIds.map(id => satisfied[id]);
    return {currentLessonsList,historyLessonsList,satisfiledlist}
  }
  
  
  export default connect(mapStateToProps)(NavBar);
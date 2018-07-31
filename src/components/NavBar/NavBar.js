import React,{Component} from 'react';
import './NavBar.css';
import { Tabs } from 'antd';
import Button from '../ButtonBox/ButtonBox.js'
import Table from '../Table/Table.js'
import { connect } from 'react-redux'
import {columns} from '../Table/list.js'


const TabPane = Tabs.TabPane;
 class NavBar extends Component{


    render(){
        return(
            <div>
              <Tabs >
                <TabPane tab="课程信息" key="1">
                <Button />
                <Table data={this.props.LessonsList} data1={this.props.historyLessonsList} columns={columns} />
                </TabPane>
                <TabPane tab="满意度反馈" key="2">空白页</TabPane>
              </Tabs>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {LessonsList,historyLessonsList} = state.tablelist;
    return {LessonsList,historyLessonsList}
  }
  
  
  export default connect(mapStateToProps)(NavBar);
import React,{Component} from 'react';
import './NavBar.css';
import { Tabs } from 'antd';
import Button from '../ButtonBox/ButtonBox.js'
import Table from '../Table/Table.js'
import Table1 from '../Table/Table1'
import { connect } from 'react-redux'
import {columns1} from '../Table/list.js'
import {columns2} from '../Table/list.js'

const TabPane = Tabs.TabPane;
 class NavBar extends Component{


    render(){
        console.log('ppppppppppppppppppppppppppppppppp',this.props.satisfiledlist);
        return(
            <div>
              <Tabs >
                <TabPane tab="课程信息" key="1">
                   <Button />
                   <Table data={this.props.LessonsList} data1={this.props.historyLessonsList} columns={columns1} />
                </TabPane>
                <TabPane tab="满意度反馈" key="2">
                    <Table1 data = {this.props.satisfiledlist}  columns ={columns2} />
                </TabPane>
              </Tabs>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {LessonsList,historyLessonsList,satisfiledlist} = state.tablelist;
    return {LessonsList,historyLessonsList,satisfiledlist}
  }
  
  
  export default connect(mapStateToProps)(NavBar);
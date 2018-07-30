import React,{Component} from 'react';
import './NavBar.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
export default class NavBar extends Component{

//    callback= (key) => {
//         console.log(key);
//       }


    render(){
        return(
            <div>
              <Tabs >
                <TabPane tab="课程信息" key="1"></TabPane>
                <TabPane tab="满意度反馈" key="2">空白页</TabPane>
              </Tabs>
            </div>
        );
    }
}
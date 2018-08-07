import React,{ Component } from 'react'
import { Switch, Icon } from 'antd';
import './WorkInfo.css'
import { Layout } from 'antd';

const {  Sider} = Layout;
export default class WorkInfo extends Component {

    render(){
        const { data } = this.props;
        console.log("有没有",data)
        return(
            <Layout   className="workinfo">
                <Sider style={{ background: '#fff'}}>
                    {/* <img src={}  /> */}
                    NO.899
                </Sider>
                <Layout>
                    <p>
                        <span>作业：</span>
                        <span className="switch">佳作：<Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} defaultChecked /></span>
                    </p>
                    <p>
                        <span>姓名：</span>
                        <span>mid:</span>
                        <span>班级：</span>
                        <span>点评人：</span>
                        <span>提交时间：</span>
                    </p>
                </Layout>
            </Layout>
        )
    }
}
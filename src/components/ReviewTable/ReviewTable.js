import React, { Component } from 'react'
import { Tabs } from 'antd';
import Images from '../Image/Image.js'
import './ReviewTable.css'
import WorkInfo from '../WorkTnfo/WorkInfo.js'
import Reply from '../Reply/Reply.js'
import ReviewInfo from '../ReviewInfo/ReviewInfo.js'
import { List } from 'antd';
const TabPane = Tabs.TabPane;


export default class ReviewTable extends Component {
    render() {
        const { data } = this.props;
        console.log("送下来的单个数据", this.props.data[0])
        return (
            <div className="table">
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="我的未点评 今日已点评:999" key="1">
                           
                            <div className="box">
                                <div >
                                    <Images  />
                                    <WorkInfo />
                                    <Reply />
                                </div>
                                <div >
                                    <ReviewInfo />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="我的点评历史 累计点评:999" key="2">
                            <Images />
                        </TabPane>
                        <TabPane tab="全部未点评" key="3">
                            <Images />
                        </TabPane>
                        <TabPane tab="全部已点评" key="4">
                            <Images />
                        </TabPane>
                    </Tabs>
                </div>,
            </div>
        )
    }
}

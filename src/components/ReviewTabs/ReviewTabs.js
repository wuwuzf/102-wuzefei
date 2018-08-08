import React, { Component } from 'react'
import './ReviewTabs.css'
import { Tabs } from 'antd';
import ReviewList from '../ReviewList/ReviewList.js'
// import * as actionCreators from '../../actions/index';
const TabPane = Tabs.TabPane;


export default class ReviewTabs extends Component {
    
    render() {
        const rules = {
            myunreview:{token:1,isReviewed:0},
            myreviewed:{token:1,isReviewed:1},
            allunreview:{token:0,isReviewed:0},
            allreviewed:{token:0,isReviewed:1}
        }
        const { Actions } = this.props;
        return (
            <div className="tabs">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="我的未点评" key="1">
                        <ReviewList 
                         rule={rules. myunreview}
                         Actions={Actions}
                        />
                    </TabPane>
                    <TabPane tab="我的点评历史" key="2">
                        <ReviewList 
                        rule={rules. myreviewed}
                        Actions={Actions}
                        />
                    </TabPane>
                    <TabPane tab="全部未点评" key="3">
                        <ReviewList 
                         rule={rules.allunreview}
                         Actions={Actions}
                        />
                    </TabPane>
                    <TabPane tab="全部已点评" key="4">
                        <ReviewList 
                         rule={rules.  allreviewed}
                         Actions={Actions}
                        />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
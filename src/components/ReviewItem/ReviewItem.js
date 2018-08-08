import React, { Component } from 'react'
import './ReviewItem.css'
import ReviewReply from '../ReviewReply/ReviewReply.js'
import { Carousel, Input, Icon, Switch, Button } from 'antd';
const InputGroup = Input.Group;
export default class ReviewItem extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <Carousel effect="fade">
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </div>
                    <div className="workinfo">
                        <div>NO.</div>
                        <div>
                            <p>
                                <span>作业：</span>
                                <span className="switch1">佳作？<Switch checkedChildren="1" unCheckedChildren="0" /></span>

                            </p>
                            <p>
                                <span>学员：</span>
                                <span>mid:</span>
                                <span>点评人：</span>
                                <span>提交时间：</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <InputGroup compact>
                            {/* <Icon type="folder" /> */}
                            <Input style={{ width: '90%' }} defaultValue="" />
                            <Button>发送</Button>
                        </InputGroup>
                    </div>
                </div>
                <div>
                    <ReviewReply />
                </div>
            </div>
        )
    }
}
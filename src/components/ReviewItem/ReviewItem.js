import React, { Component } from 'react'
import './ReviewItem.css'
import ReviewReply from '../ReviewReply/ReviewReply.js'
import { Carousel, Input, Icon, Switch, Button } from 'antd';
const InputGroup = Input.Group;
export default class ReviewItem extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="item">
                <div className="item-left">
                    <div className="photo">
                        <Carousel effect="fade">
                            <div><h3><img src={data.photos[0]}/></h3></div>
                            <div><h3><img src={data.photos[1]}/></h3></div>
                            <div><h3><img src={data.photos[2]}/></h3></div>
                            <div><h3><img src={data.photos[3]}/></h3></div>
                        </Carousel>
                    </div>
                    <div className="item-right">
                        <ReviewReply data={data.comments} />
                    </div>
                    <div className="workinfo">
                        <div className="left">NO.{data.id}<img src="" /></div>
                        <div  className="right">
                            <p>
                                <span >作业:{data.description}</span>
                                <span className="switch1">佳作？<Switch checkedChildren="1" unCheckedChildren="0" /></span>

                            </p>
                            <p>
                                <span>{data.author.nick}</span>
                                <span>mid:{data.author.mid}</span>
                                <span>点评人：{data.commentator}</span>
                                <span>提交时间：{data.time}</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <InputGroup compact>
                            {/* <Icon type="folder" /> */}
                            <Input style={{ width: 500 }}  />
                            <Button>发送</Button>
                        </InputGroup>
                    </div>
                </div>
               
            </div>
        )
    }
}
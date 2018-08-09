import React, { Component } from 'react'
import './ReviewReply.css'
import { List } from 'antd';
export default class ReviewReply extends Component {

    


    render() {
        const { data } = this.props;
        return (
            <div className="reply">
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => {
                        if(item.from == 1){
                            return(
                                <div>
                                    <div>
                                    <span>{item.nick} {item.mid}</span>
                                    <span>{item.time}</span>
                                    </div>
                                    <div  className="replyitem">
                                        <span>{item.content}</span>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div>
                                    <div>
                                    <span>{item.nick} {item.mid}</span>
                                    <span>{item.time}</span>
                                    </div>
                                    <div  className="replyitem">
                                        <span>{item.content}</span>
                                    </div>
                                </div>
                            )
                        }
                    }
                    }
                />
            </div>
        )
    }
} 
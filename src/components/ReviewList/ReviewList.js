import React, { Component } from 'react'
import { List } from 'antd';
import ReviewItem from '../ReviewItem/ReviewItem.js'

export default class ReviewList extends Component {
componentDidMount() {
    const { Actions , rule} = this.props;
    Actions.fetchhomework(rule)
}
    render() {
         const { data ,Actions} = this.props;
        return (
            <div>
                <List
                    bordered
                    dataSource={123}
                    renderItem={item => 
                        <ReviewItem 
                        Actions={Actions}
                        data={item}
                        />
                     } 
                 /> 
            </div>
        )
    }
}
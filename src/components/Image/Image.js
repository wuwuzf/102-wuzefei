import React, { Component } from 'react'
import { Carousel } from 'antd';
import './Image.css'
export default class Images extends Component {
    render() {
        const {photos} = this.props;
        console.log("图片送过来",photos)
        return (
            <div className="image">
                <Carousel effect="fade">
                    <div><h3><img src="http://mpic.tiankong.com/d27/2ba/d272bae826029cfd2f26c2608f768e21/640.jpg@!670w"/></h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        )
    }
}
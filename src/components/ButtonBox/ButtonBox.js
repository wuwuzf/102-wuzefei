import React,{Component} from 'react';
import './ButtonBox.css'
// import { Link } from 'react-router'

export default class Button extends Component{
    render(){
        return(
            <div className="button">
                <div className="button_left">
                    <button>汇总</button>
                    <button className="button_a">摄影课</button>
                    <button>绘画课</button>
                </div>
                {/* <button className="button_right">返回</button> */}
                {/* <Link className="button_right" to="/student">返回</Link> */}
            </div>
        )
    }
}
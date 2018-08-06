import React,{Component} from 'react';
import './ButtonBox.css'
 import { Link } from 'react-router'
 import { Button } from 'antd'

export default class Buttons extends Component{
    render(){
        return(
            <div className="button">
                {/* <div className="button_left"> */}
                    <Button>汇总</Button>
                    <Button className="button_a">摄影课</Button>
                    <Button>绘画课</Button>
                {/* </div> */}
                 <div className="button_right">
                <Link to="/student"><Button>返回</Button></Link>
        </div>      
            </div>
        )
    }
}
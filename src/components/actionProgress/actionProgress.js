import React,{ Component} from 'react';
import { Icon } from 'antd';
import './actionProgress.css'
import { Button } from '../../../node_modules/antd/lib/radio';
export default class actionProgress extends Component{
    render(){
        return(
            <div>
               
                <div className="box"></div>
                
                <span className="icon"><Icon type="close-circle-o" /></span>
                <div className="bnt"><Button>上传</Button></div>
            
            </div>
        )
    }
}
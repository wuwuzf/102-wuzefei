import React,{ Component} from 'react';
import { Icon } from 'antd';
import './actionProgress.css'
import { Button } from '../../../node_modules/antd/lib/radio';
export default class actionProgress extends Component{

    // handleDate=(num) =>{
    //     const {}

    // }


    render(){
        const { value } = this.props;
        return(
            <div>
               
                <div className="box">
                    <div className="green" style={{width:20}}></div>
                </div>
                
                <span className="icon"><Icon type="close-circle-o" /></span>
                <div className="bnt"><Button>上传</Button></div>
            
            </div>
        )
    }
}
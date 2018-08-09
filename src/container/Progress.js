import React,{ Component} from 'react';
import ActionProgress from '../components/actionProgress/actionProgress.js'
import './com.css'

export default class Progress extends Component{
    state ={
        value:'',
        showCancel:true
    }
    render(){
        return(
            <div>
                <ActionProgress 
                value ={this.state.value}
                showCancel = {this.state.showCancel}
                // onCancel={}
                />
            </div>
        )
    }
}
import React ,{Component}from 'react';
import icon1 from '../resourse/abc.png';
import '../component/Footer.css';

 

export default class ItemView extends Component{
    constructor(){
        super();
        this.state={
            list:[
                {
                    name:'微信',
                    icon:icon1
                },
                {
                    name:'通讯录',
                    icon:icon1
                },
                {
                    name:'发现',
                    icon:icon1
                },
                {
                    name:'我',
                    icon:icon1
                }
            ]
        }
    }

    renderFooterList = () =>{
        const footerview =this.state.list.map((item,i) =>{
            return (
                <div className="footer-nav">
                  <div className="footer" >
                    <img className="footer-icon" src={item.icon} alt="" />
                    <div className="footer-name">{item.name}</div>
                  </div>
                </div>
            )
        });
        return footerview;
    }
    render(){
        return(
           this.renderFooterList()
        );
    }
}
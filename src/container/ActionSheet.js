import React,{ Component } from 'react' ;
import Sheet from '../components/actionsheet/Sheet.js'
import { Button } from '../../node_modules/antd';

export default class ActionSheet extends Component {
    state = {
        isActionSheetActive:false,
        title: '',
        menus:[],
        type:''
    };

handleShowSheet = () => {
    this.setState({
        isActionSheetActive:true,
        type:'android',
        menus:[{
            title:'示例菜单1',
            click: () => console.log('示例菜单1')
        },{
            title: '示例菜单2',
            click: () => console.log('示例菜单2')
        },{
            title: '示例菜单3',
            click: () => console.log('示例菜单3')
        }
    ]
    })
}

handleShowSheetIos = () => {
    this.setState({
      isActionSheetActive: true,
      type:'ios',
      title: '这是一个标题',
      menus: [{
        title: '示例菜单4',
        type: 'danger',
        click: () => console.log('示例菜单33')
      }, {
        title: '示例菜单5',
        click: () => console.log('示例菜44')
      }]
    });
  }

handleHideActionSheet = () => {
    this.setState({
        isActionSheetActive:false
    });
}
    render(){
        return(
        <div>
            <div className="button">
                <div className="button1" onClick={this.handleShowSheetIos}><Button style={{width:250}}>ios ActionSheet</Button></div>
                <div className="button1" onClick={this.handleShowSheet}><Button style={{width:250}}>Android ActionSheet</Button></div>
            </div>
            <Sheet 
                isActive = { this.state.isActionSheetActive}
                title={this.state.title}
                menus = { this.state.menus }
                onCancel = { this.handleHideActionSheet}
                type = { this.state.type }
            />
        </div>
        )
    }
}
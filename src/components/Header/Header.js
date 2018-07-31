import React,{Component} from 'react';
import './Header.css';
import icon from '../../resource/icon.png';
import { Input } from 'antd';
import { Layout } from 'antd';
import { Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const Search = Input.Search;



export default class Headers extends Component{
    constructor(){
        super();
    }
    render(){
        const {header_one,header_two,header_three,message } =this.props;
       
        return(
            
            <Layout style={{ background: '#eee'}} theme="white" className="header">
                <Sider style={{ background: '#fff'}} >
                    {/* <img src={icon} alt=''/> */}
                    <img className="header_icon" src={message.hurl} />
                </Sider>
                <Layout  className="header_message">
                    <Header style={{ background: '#fff' }} className="header_top">
                        三班人
                    </Header>
                    <Layout  className="header_bottom">
                        <Sider style={{ background: '#fff' }} className="header_one">
                            <div>学员编号: {message.nick}</div>
                            <div>在学课程: {message.learningLesson}</div>
                            <div>入学时间:{message.lastLoginDate}</div>
                        </Sider>
                        <Content style={{ background: '#fff' }}   className="header_tow">
                           <div>
                            <div>历史付费额: {message.history_pay}</div>
                            <div>累计学习天数:{message.totalearningDays}</div>
                            <div>最后登录时间:{message.lastLoginDate}</div>
                           </div>
                        </Content>
                        <Sider style={{ background: '#fff' }} className="three">
                            <div >
                                <div className="tel">手机号码:{message.tel}</div>
                                <Icon className="edit" type="edit" style={{ fontSize: 16, color: '#08c' }} />
                            </div>
                            <div >
                                <div className="wechat">微信号码:{message[6]}</div>
                                <Search className="search0"
                                    placeholder="input wechat"
                                    enterButton="提交"
                                    size="small"
                                    style={{ width: '70%' }}
                                    onSearch={value => console.log(value)}
                                />
                            </div>
                            <div >
                                <div className="more">备注: {message[8]}  </div>
                                <Search className="search1"
                                    placeholder="input beizhu"
                                    enterButton="提交"
                                    size="small"
                                    style={{ width: '70%' }}
                                    onSearch={value => console.log(value)}
                                />
                            </div>
                        </Sider>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
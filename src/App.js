import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import buttonView from './button';
import MessageItemView from './MessageItem';

const icon0 = require("./img/a.jpg");
const icon1 = require("./img/b.jpg");
const icon2 = require("./img/c.jpg");
const icon3 = require("./img/d.jpg");
const icon4 = require("./img/e.jpg");
const icon5 = require("./img/f.jpg");
const icon6 = require("./img/g.jpg");
const icon7 = require("./img/h.jpg");
const icon8 = require("./img/i.jpg");


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <ul>
            <li className="aw" >微信</li>
            <li className="al">
              <img src={icon7} alt="图片无法显示" />
            </li>
            <li className="al">
              <img src={icon8} alt="图片无法显示" />
            </li>
          </ul>
        </div>
        <div className="content" onclick="getMessage[0]">
          <ul>
            <li onclick="getMessage(0)">
              <img src={icon0} alt="图片未显示" />
              <p className="ab" >张三</p>
              <p className="ah">你好</p>
              <p className="af">10:10</p>
            </li>
            <li onclick="getMessage(1)">
              <img src={icon1} alt="图片未显示" />
              <p className="ab">李四</p>
              <p className="ah">去吃饭吗</p>
              <p className="af">11:10</p>
            </li>
            <li onclick="getMessage(2)">
              <img src={icon2} alt="图片未显示" />
              <p className="ab" >王五</p>
              <p className="ah">在哪呢</p>
              <p className="af">12:10</p>
            </li>
          </ul>
        </div>
        <div className="bottom" >
          <ul>
            <li className="b">
              <img src={icon3} alt="图片未显示" />
              <p className="as">消息</p>
            </li>
            <li className="b">
              <img src={icon4} alt="图片未显示" />
              <p className="as">通讯录</p>
            </li>
            <li className="b">
              <img src={icon5} alt="图片未显示" />
              <p className="as">发现</p>
            </li>
            <li className="b">
              <img src={icon6} alt="图片未显示" />
              <p className="ag">我</p>
            </li>
          </ul>
        </div>

      </div>

    );
  }
}

export default App;

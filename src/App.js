import React, { Component } from 'react';
import MessageList from './component/MessageList.js';
import Footer from './component/Footer.js';



import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
  }
 
  
  render
  render() {
    return (
      <div>
        <MessageList />
        
        <Footer />
      </div>
    );
  }
}

export default App;

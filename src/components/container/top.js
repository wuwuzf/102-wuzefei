import React, { Component } from 'react';



export default class TopView extends Component {
     render(){
         const {ADD} =this.props;
         return(
             <div className="top">
                <div className="top-add" onClick={ADD}>+</div>
             </div>
         );
     }
 }
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Header from '../components/Header/Header.js'
import NavBar from '../components/NavBar/NavBar.js'
import * as api from '../api';
import axios from 'axios';
import { connect } from 'react-redux'
class Op extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        console.log("lalalall")
        api.fetchlesson(dispatch);
        api.fetchuser(dispatch);
    }
    render() {
        console.log("papapapa")
        return (

            <div>

                <Header message={this.props.headerlist.message} />
                <NavBar />

            </div>
        )
    }
}



function mapStateToProps(state) {
    const {
        tablelist,
        headerlist
    } = state;
    const props = {
        tablelist,
        headerlist
    }
    return props;
}


export default connect(mapStateToProps)(Op);
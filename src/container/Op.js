import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Header from '../components/Header/Header.js'
import NavBar from '../components/NavBar/NavBar.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

import Buttontwo from '../components/Button/Button.js'
import Tabletwo from '../components/TableT/Table.js'
import Tablethree from '../components/TableH/Table.js'


class Op extends Component {

    componentDidMount() {
        const { Actions } = this.props;
        console.log(this.p)
        console.log("lalalall")
        const mid = 1;
        const id = 2;
        Actions.fetchUserInfo(mid);
        Actions.fetchLessonInfo(mid);
        Actions.fetchclassinfo(id);
        Actions.fetchstudentlist (id);
    }








    render() {
        console.log("this is msg: ", this.props.headerlist.message)
        console.log("嗯嗯嗯",this.props.tablelisttwo.studentList)
        const {tablelisttwo} = this.props;
        return (

            <div>

                <Header message={this.props.headerlist.message} />
                <NavBar />
                <Buttontwo />
                <Tabletwo  studentList={this.props.tablelistthree.studentList} />
               
                <Tablethree basic_info={this.props.tablelistthree.basic_info} list={this.props.tablelistthree.list} />
            </div>
        )
    }
}



function mapStateToProps(state) {
    const {
        tablelist,
        headerlist,
        tablelisttwo,
        tablelistthree
    } = state;
    console.log(state)
    const props = {
        tablelist,
        headerlist,
        tablelisttwo,
        tablelistthree
    }
    return props;
}


const mapDispatchToProps = dispatch => {
    return {
        Actions: bindActionCreators(actionCreators, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Op);
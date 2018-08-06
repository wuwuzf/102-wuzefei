import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';


import TableStudenet from '../components/TableStuednt/Table'


class Student extends Component {

    componentDidMount() {
        const { Actions} = this.props;
        console.log("lalalall")

        Actions.fetchstudentlist ();
    }








    render() {
        console.log("嗯嗯嗯",this.props.tablelisttwo.studentList)
        return (

            <div>
              
                <TableStudenet  studentList={this.props.tablelisttwo.studentList} />
            </div>
        )
    }
}



function mapStateToProps(state) {
    const {
        tablelisttwo,
    } = state;
    console.log(state)
    const props = {
        tablelisttwo,
    }
    return props;
}


const mapDispatchToProps = dispatch => {
    return {
        Actions: bindActionCreators(actionCreators, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Student);
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

import TableClass from '../components/TableClass/Table'


class ClassInfo extends Component {

    componentDidMount() {
        const { Actions,params } = this.props;
        console.log("班级")
        const id=params.id;
        Actions.fetchclassinfo(id);
    }








    render() {
        // console.log("嗯嗯嗯",this.props.tablelisttwo.studentList)
        return (

            <div>
                <TableClass basic_info={this.props.tablelistthree.basic_info} real_teacher={this.props.tablelistthree.real_teacher} virtual_teacher={this.props.tablelistthree.virtual_teacher} list={this.props.tablelistthree.list} />
            </div>
        )
    }
}



function mapStateToProps(state) {
    const {
        tablelistthree
    } = state;
    console.log(state)
    const props = {
        tablelistthree
    }
    return props;
}


const mapDispatchToProps = dispatch => {
    return {
        Actions: bindActionCreators(actionCreators, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ClassInfo);

import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import ReviewHeader from '../components/ReviewHeader/ReviewHeader.js'
import ReviewTable from '../components/ReviewTable/ReviewTable.js'


 class Review extends Component{

    componentDidMount() {
        const { Actions,params } = this.props;
        console.log("props中获取")
        const mid=params.mid;
        Actions.fetchhomework(mid);
    }
    render(){
        console.log("送下来的数据",this.props.tablereview)
        console.log("送下来的图片",this.props.tablereview[0])
        return(
            <div >
                <div><ReviewHeader /></div>
                <div><ReviewTable data = { this.props.tablereview }/></div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const {
        tablereview
    } = state;
    const props = { tablereview }
    return props;
}

const mapDispatchToProps = dispatch => {
    return {
        Actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);
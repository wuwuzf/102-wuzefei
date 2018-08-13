import React,{ Component } from 'react'
import PurviewList from '../components/PurviewList/PurviewList.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

 class Purview extends Component {
    render() {
        return(
            <div>
                <div><strong>点评权限</strong></div>
                <div>
                    <PurviewList 
                        Actions={this.props.Actions}
                        listData={this.props.listData}
                        teacherData={this.props.teacherData}
                        teacherDataDec={this.props.teacherDataDec}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    const { listData,teacherDatas,Info,teacherDataDecs } =state.purview;
    const teacherData =teacherDatas.map(id =>Info[id])
    const teacherDataDec = teacherDataDecs.map(id =>Info[id])
    console.log('看这里',teacherDataDec)
    return {
        listData,
        teacherData,
        teacherDataDec
    }
}

const mapDispatchToProps = dispatch =>{
    return{ Actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Purview);
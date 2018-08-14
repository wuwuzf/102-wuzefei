import React,{ Component } from 'react'
import './com.css'
import PurviewList from '../components/PurviewList/PurviewList.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

 class Purview extends Component {
    render() {
     
        return(
            <div className='pur'>
                <div><strong>点评权限</strong></div>
                <div>
                    <PurviewList 
                        Actions={this.props.Actions}
                        listData={this.props.listData}
                        info={this.props.info}
                        departments={this.props.departments}
                        result={this.props.result}
                        renderInfo={this.props.renderInfo}
                        selectedInfoIds={this.props.selectedInfoIds}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    const { listData,info,selectedInfoIds,departments,result,renderInfo } =state.purview;
    // const selectedInfos = selectedInfoIds.map(id =>info[id]);
    console.log('看这里', renderInfo)
    return {
        listData,
        info,
        departments,
        result,
        renderInfo,
        selectedInfoIds
    }
}

const mapDispatchToProps = dispatch =>{
    return{ Actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Purview);
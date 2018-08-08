import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import ReviewSearch from '../components/ReviewSearch/ReviewSearch.js'
import ReviewTabs from '../components/ReviewTabs/ReviewTabs.js'



 class Review extends Component {
    render() {
       
        return (
            <div>
                <div>
                    {/* <ReviewSearch /> */}
                </div>
                <div >
                    <ReviewTabs  Actions={this.props.Actions} />
                </div>
            </div>
        )
    }
}

const mapEntity = (ids,entity) =>{
    const {
        classes,
        teachers,
        comments,
        homeworks
    } = entity;
    
    const data = ids.map(id =>{
        const {
            classInfo: classId,
            teacherInfo: teacherId,
            comments: commentIdList
        } = homeworks[id];
        const _comments = commentIdList.map(id => comments[id]);
        return {
            ...homeworks[id],
            classInfo: classes[classId],
            teacherInfo: teachers[teacherId],
            comments:_comments
        }
    })
    return data;
}



const mapStateToProps = state => {
  
    const {entities,tablereview:{
        myunreviewIds,
        myreviewedIds,
        allunreviewIds,
        allreviewedIds
    }} = state;
    const myunreview = mapEntity(myunreviewIds,entities)
    const myreviewed = mapEntity(myreviewedIds,entities)
    const allunreview = mapEntity(allunreviewIds,entities)
    const allreviewed = mapEntity(allreviewedIds,entities)
    console.log("reducer传数据",myunreview)
    console.log('aaa',this.props)
    return {
        myunreview,
        myreviewed,
        allunreview,
        allreviewed
    }

    
}

const mapDispatchToProps = dispatch => {
   return{ Actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);
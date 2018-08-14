import React, { Component } from 'react'
import PurviewItem from '../PurviewItem/PurviewItem.js'
import { List } from 'antd';


export default class Purview extends Component {

    render() {
        const {departments,listData,Actions,info,result,renderInfo,selectedInfoIds} = this.props;
        
        return (
            <div>
                <List
                    bordered
                    dataSource={listData}
                    renderItem={item =>
                         <PurviewItem
                            Actions={Actions}
                            data={item}
                            info={info}
                            departments={departments}
                            renderInfo={renderInfo}
                            result={result}
                            selectedInfoIds={selectedInfoIds}
                         />}
                />
            </div>
        )
    }
}
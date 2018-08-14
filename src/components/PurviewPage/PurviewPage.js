import React, { Component } from 'react'
import { Tree, Button, Input, Icon } from 'antd';
import './PurviewPage.css'
const TreeNode = Tree.TreeNode;
const Search = Input.Search;
export default class Page extends Component {

    static defaultProps = {
        isActive: false,
        onCancel: () => { }
    }



    handleShowBox = () => {
        const { isActive, onCancel, data, departments, info, result } = this.props;

        if (!isActive) return null
        else return (
            <div className='page'>
                <div>
                    {data.title} {data.description}
                    <span className="x" onClick={onCancel} ><Icon type="close" style={{ color: '#08c' }} /></span>
                </div>
                <div className="top" >
                    <div className="left">
                        <div>
                            <span><Button>添加</Button></span>
                            <span><Button>删除</Button></span>
                            <span>
                                <Search
                                    placeholder="input search text"
                                    onSearch={value => value}
                                    style={{ width: 200 }}
                                />
                            </span>
                        </div>
                        {this.renderSelectedMembers()}
                    </div>
                    <div className="right">
                        <div className="tree">
                            <Tree
                                showLine
                                defaultExpandedKeys={['101']}
                                onSelect={this.onSelect}
                            >
                                {this.renderTree(info, departments, result)}
                            </Tree>
                        </div>
                        <div className="sear">
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                            <div>{this.handleShowInfo()}</div>
                            {/* <Button>确定</Button> */}
                        </div>
                       
                    </div>
                </div>
                <div className="bottom"> <Button>确定</Button></div>
            </div>
        )
    }

    //
    renderSelectedMembers = () => {
        const { info, selectedInfoIds } = this.props;
        console.log('sb=>', this.props.selectedInfoIds)
        const members = selectedInfoIds.map(id => info[id]);
        return members.map((member, idx) => {
            return <Button key={idx}
                onClick={this.delMid.bind(this, member.mid)}
            >
                {member.name}{member.mid}
                <Icon type="close-circle-o" />
            </Button>
        })
    }

    handleShowInfo = () => {

        const { departments, info, renderInfo } = this.props;
        const root = departments[renderInfo]
        if (!root) return null
        return (
            root.info ? root.info.map((item, mid) => {
                console.log('ooo==>', item)
                return <Button
                    key={mid}
                    onClick={this.addMid.bind(this, info[item].mid)}>{info[item].name}{info[item].mid}</Button>
            })
                : null
        )

    }
    addMid = (mid) => {
        console.log('dsb==>', mid);
        const { Actions: { fetchaddinfo } } = this.props;

        fetchaddinfo && fetchaddinfo(mid)
    }
    delMid = (item) => {
        const { Actions } = this.props
        const mid = item.mid
        Actions.fetchdelinfo(mid)
    };
    renderTree = (info, departments, result) => {
        // console.log('树的数据',info,departments,result)
        const root = departments[result]
        console.log('root', root)
        return (
            <TreeNode title={root.name} key={root.id}>
                {
                    root.childs ? root.childs.map(result => {
                        return this.renderTree(info, departments, result);
                    })
                        : null
                }
            </TreeNode>
        )

    }
    onSelect = (selectedKeys, info) => {
        const { Actions: { fetchshowinfo } } = this.props;
        fetchshowinfo && fetchshowinfo(selectedKeys)
    }
    render() {
        const { isActive } = this.props;
        console.log('状态', isActive)
        return (
            <div>
                {this.handleShowBox()}
            </div>
        )
    }
}
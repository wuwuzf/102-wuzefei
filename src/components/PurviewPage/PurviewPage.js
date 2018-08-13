import React, { Component } from 'react'
import { Tree, Button, Input, Icon } from 'antd';
import './PurviewPage.css'
const TreeNode = Tree.TreeNode;
const Search = Input.Search;
export default class Page extends Component {

    static defaultProps = {
        isActive: false,
        onCancel: () => { },
        isTreeActive:false
    }

      handleDec = (item) => {
        //   const { Actions} =this.props
        //   const mid = item.mid
        // Actions.fetchdecinfo(mid)
      };

    handleShowBox = () => {
        const { isActive, onCancel,  data,show,isTreeActive,teacherDataDec } = this.props;
    
        console.log('哈哈哈',isTreeActive)
        
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
                        <div className='dec'>
                            {
                                teacherDataDec.map((item) => {
                                    console.log('第三方', item);
                                    return (
                                        <div  className='dec'>
                                            <span >
                                                <Button> {item.name}
                                                    mid:
                                                {item.mid}
                                                </Button>
                                            </span>
                                            <span onClick={this.handleDec(item)}><Icon type="close-circle-o" style={{ color: '#777' }} /> </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div onClick={show} className="right">
                        <div   className="tree">
                            <Tree
                                showLine
                                defaultExpandedKeys={['0-0-0']}
                                onSelect={this.onSelect}
                            >
                                <TreeNode  title="所有部门" key="0-0">
                                    <TreeNode title="艾启迪集团" key="0-0-0">
                                        <TreeNode title="广州分公司" key="0-0-0-0" >
                                            <TreeNode title="总经办" key="0-0-0-0-0" />
                                            <TreeNode title="财务部" key="0-0-0-0-0" />
                                            <TreeNode title="工程部" key="0-0-0-0-0" />
                                            <TreeNode title="产品研发部" key="0-0-0-0-0" >
                                                <TreeNode title="产品研发一组" key="0-0-0-0-0-0" />
                                                <TreeNode title="产品研发二组" key="0-0-0-0-0-0" />
                                                <TreeNode title="测试组" key="0-0-0-0-0-0" />
                                            </TreeNode>
                                        </TreeNode>
                                    </TreeNode>
                                </TreeNode>
                            </Tree>
                        </div>
                        <div>
                            <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                            <div>{this.handleShowInfo(isTreeActive)}</div>
                           
                        </div>
                    </div>                  
                </div>
               <div className="bottom"> <Button>确定</Button></div>
            </div>
        )
    }
    handleShowInfo = (isTreeActive) =>{
        const { teacherData } = this.props;
        console.log('dgggggggggggg',isTreeActive)
        if (!isTreeActive)
        return null;
        else return(
            <div>
                {
                    teacherData.map((item) => {
                        console.log('第三方', item);
                        
                            return (<div className='dec' onClick={this.handleAdd}>
                                <Button>
                                {item.name}
                                mid:
                                {item.mid}
                                </Button>
                            </div>)
                    })
                }
            </div>)
            // <div>dcdbgfhbg</div>
    }
    handleAdd = () =>{
        
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
import React,{Component} from 'react';
import 'antd/dist/antd.css';
import Header from '../components/Header/Header.js'
import NavBar from '../components/NavBar/NavBar.js'
import Button from '../components/ButtonBox/ButtonBox.js'
import Table from '../components/Table/Table.js'
import { connect } from 'react-redux'


class Op extends Component{
    render(){
        return(
            <div>
                <Header  header_one={this.props.headerlist.header_one} header_two={this.props.headerlist.header_two} header_three={this.props.headerlist.header_three} message={this.props.headerlist.message} />
                <NavBar />
                <Button />
                <Table data={this.props.tablelist.data} data1={this.props.tablelist.data1} columns={this.props.tablelist.columns} />
            </div>
        )
    }
}



function mapStateToProps(state,ownProps){
    const {tablelist,headerlist} = state;
    const props= {tablelist,headerlist}
    return props;
  }
  
  
  export default connect(mapStateToProps)(Op);
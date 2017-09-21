import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import Nav from '../Nav';
class Projects extends Component{
  render(){
    <div className='projects'>

    </div>
  }
}
function mapStateToProps(state) {
  return {};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(PageHeader);
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
class Project extends Component{
  render(){
    return (
      <div className='project'>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Project);

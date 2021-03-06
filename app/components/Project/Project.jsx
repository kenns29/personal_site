import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
class Project extends Component{
  render(){
    return (
      <div className='project'>
        {
          this.props.children &&
          React.Children.map(this.props.children,
            (child=>React.cloneElement(child)))
        }
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
export {default as ProjectImg} from './ProjectImg';
export {default as ProjectText} from './ProjectText';

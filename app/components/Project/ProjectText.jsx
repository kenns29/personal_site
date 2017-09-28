import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
class ProjectText extends Component {
  render(){
    return (
      <div className='project-text'>
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
export default connect(mapStateToProps, matchDispatchToProps)(ProjectText);

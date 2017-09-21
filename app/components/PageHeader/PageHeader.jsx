import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
class PageHeader extends Component{
  render(){
    return (
      <h1 className = "page-header">
        <div id = "header-container">
          <div className = "name">Hong Wang</div>
          <div className = "contact">
            <div className = "method">Email:</div>
            <a href="mailto:hxwang@asu.edu" target="_top" >
              <div>hxwang@asu.edu</div>
            </a>
          </div>
          <div className = "contact">
            <div className = "method">LinkedIn:</div>
            <a href="https://www.linkedin.com/in/hong-wang-2a133854" target="_top">
              <div>{`https://www.linkedin.com/in/hong-wang-2a133854`}</div>
            </a>
          </div>
          <div className = "contact">
            <div className = "method">Resume:</div>
            <a href="./web_resume.pdf" target="_top">
              <div>download</div>
            </a>
          </div>
        </div>
      </h1>
    );
  }
}
function mapStateToProps(state) {
  return {};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(PageHeader);
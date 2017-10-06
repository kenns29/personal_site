import React, {Component} from 'react';
import {bindActionCreators} from "redux";
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
              <div>&nbsp;<span>hxwang@asu.edu</span></div>
            </a>
          </div>
          <div className = "contact">
            <div className = "method">LinkedIn:</div>
            <a href="https://www.linkedin.com/in/hong-wang-2a133854" target="_top">
              <div>
                <span>
                  {`https://www.linkedin.com/in/hong-wang-2a133854`}
                </span>
              </div>
            </a>
          </div>
          <div className = "contact">
            <div className = "method">Resume:</div>
            <a href="./web_resume.pdf" target="_top">
              <div><span>Download</span></div>
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

import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
class PageHeader extends Component{
  render(){
    return (
      <h1 className = "page-header">
        <div id = "header-container">
          <div className = 'info'>
            <div className = "name">Hong Wang</div>
            <div className = "contact">
              <div className = "method">Email:</div>
              <a href="mailto:hxwang@asu.edu" target="_top" >
                <div>hxwang@asu.edu</div>
              </a>
            </div>
            <div className = "contact">
              <div className = "method">Github:</div>
              <a href="https://github.com/kenns29">
                <div>{'https://github.com/kenns29'
                }</div>
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
          <div className = "figure">
            <a href="./img/Wang_HongWEB-1.jpg">
              <img src="./img/Wang_HongWEB-1.jpg" className="image"></img>
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

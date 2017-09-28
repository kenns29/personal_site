import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Project, {ProjectImg, ProjectText} from '../Project';
class Education extends Component {
  render(){
    return (
      <Project>
        <ProjectImg>
          <a href="./img/education.png">
            <img src="./img/education.png" className="image"></img>
          </a>
        </ProjectImg>
        <ProjectText>
          <span className="title">Comparing Universities by Graduating Rate and Pell Grant Rate</span>
          <p>
            We compare different universities by plotting the percent of students who graduate in four years
            against the percent of students who receive Pell Grant. How do universities differ in terms of four year graduation rate,
            and Pell Grant rate and is there any correlation between these two variables? These are the questions that can be answered.
          </p>
          <a href = "http://104.196.253.120:10081/">Demo</a>
        </ProjectText>
      </Project>
    );
  }
}
function mapStateToProps(state) {
  return {};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Education);

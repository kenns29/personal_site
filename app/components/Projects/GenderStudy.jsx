import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Project, {ProjectImg, ProjectText} from '../Project';
class GenderStudy extends Component {
  render(){
    return (
      <Project>
        <ProjectImg>
          <a href="./img/gender_study.png">
            <img src="./img/gender_study.png" className="image"></img>
          </a>
        </ProjectImg>
        <ProjectText>
          <span className = "title">A Study for Evolution of Topics in Women Study</span>
          <p>
            We have developed a visual interface to help woman study researchers explore the evolution of research topics in their field. Our data consists of 16857 research paper titles and abstracts from 10001 panels between the year 1997 and 2016. We used various methods such as topic modeling, keyword trends, and the word tree, to help the researchers explore and make sense of the dataset.
          </p>
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
export default connect(mapStateToProps, matchDispatchToProps)(GenderStudy);

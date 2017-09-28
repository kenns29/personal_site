import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Project, {ProjectImg, ProjectText} from '../Project';
class Timeline extends Component {
  render(){
    return (
      <Project>
        <ProjectImg>
          <a href = "./img/timeline.png">
            <img src="./img/timeline.png" className="image"></img>
          </a>
        </ProjectImg>
        <ProjectText>
          <span className="title">Visualizing topical trends in social media</span>
          <p>
            We use LDA to detect topics from all tweets and plotted the change of their frequencies in each country over time,
            and we use CUSUM control chart to detect abrupt changes of topic frequencies.
            We allow the user to drag on any period in the timeline to show named entities mentioned on the period.
          </p>
          <a href = "http://104.196.253.120:8080/timeline/">Demo</a>
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
export default connect(mapStateToProps, matchDispatchToProps)(Timeline);

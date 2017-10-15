import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Project, {ProjectImg, ProjectText} from '../Project';
class SemanticLinking extends Component {
  render(){
    return (
      <Project>
        <ProjectImg>
          <a href="./img/semantic_linking.png">
            <img src="./img/semantic_linking.png" className="image"></img>
          </a>
        </ProjectImg>
        <ProjectText>
          <span className = "title">A Visual Analytics Framework for Identifying Topic Drivers in Media Events</span>
          <p>
            We explore linking streaming media data with curated secondary textual data sources through user-guided semantic lexical matching
            in order to identify relationships and data links. In this manner,
            key contextual information can be identified and used to annotate media streams
            in order to provide a more detailed overview of events that may be driving media topics and frames.
            These linked events are further filtered through an application of causality modeling to model temporal drivers between the data series.
            Such causal links are then annotated through automatic entity extraction which enables the analyst to explore persons,
            locations and organizations that may be pertinent to the streaming topic of interest.
          </p>
          <span>
          <a href = "http://104.196.253.120:8080/DocumentRetrieval/DocumentRetrieval/DR.html">Demo</a>&nbsp;
          <a href = "./demovideo.mp4">Video</a>&nbsp;
          <a href = "./SemanticLinking.pdf">Paper</a>
          </span>
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
export default connect(mapStateToProps, matchDispatchToProps)(SemanticLinking);

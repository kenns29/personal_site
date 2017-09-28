import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Project, {ProjectImg, ProjectText} from '../Project';
class ClimateModel extends Component {
  render(){
    return (
      <Project>
        <ProjectImg>
          <a href="./img/model_compare.png">
            <img src="./img/model_compare.png" className="image"></img>
          </a>
        </ProjectImg>
        <ProjectText>
          <span className = "title">
            A Visual Analytics Framework for Climate Model Comparison</span>
          <ul>
            <li>Calculate climate model accuracy based on various evaluation metrics.</li>
            <li>Visualize and compare the model accuracy using various visualization techniques.</li>
          </ul>
          <span style={{fontStyle:'italic'}}>In Progress</span>
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
export default connect(mapStateToProps, matchDispatchToProps)(ClimateModel);

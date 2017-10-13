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
            MyriadCues: Supporting Expert Judgment of Simulation Model Performance Using Comparative Visual Cues</span>
          <p>
            In simulation modeling, a common analytical task for domain experts is to reconcile information from experimental and observational data for judging model performance. Current analytical approaches towards expert judgment of model performance are slow and ineffective as they lack support for complex many-to-many comparison tasks. To fill this gap, we developed MyriadCues, a visual analytic interface for comparison of model performance disparities, through a participatory design process with climate scientists. At the core of MyriadCues, are perceptually motivated visual cues for letting experts reliably capture many-to-many associations across models, output variables, and metrics, and explore the reasons for good or bad model performance. We validated MyriadCues through expert case studies and expert feedback.  As part of our contributions, we present a classification scheme for translating analysis goals into comparative visual cues, describe the design choices in MyriadCues, and discuss the validation of the tool using case studies and expert feedback.
          </p>
          <span style={{fontStyle:'italic'}}>Submitted, Demo Coming</span>
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

import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Nav from '../Nav';
import ClimateModel from './ClimateModel';
import Trade from './Trade';
import SemanticLinking from './SemanticLinking';
import DairyPaper from './DairyPaper';
import Timeline from './Timeline';
import Education from './Education';
class Projects extends Component{
  render(){
    return (
      <div>
        <Nav routeName='projects'/>
        <div className='projects'>
          <ClimateModel/>
          <SemanticLinking/>
          <Education/>
          <Trade/>
          <DairyPaper/>
          <Timeline/>
        </div>
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
export default connect(mapStateToProps, matchDispatchToProps)(Projects);

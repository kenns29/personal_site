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
import GenderStudy from './GenderStudy';
class Projects extends Component{
  render(){
    return (
      <div className={this.props.view === 'projects' ? '' : 'hidden'}>
        <Nav routeName='projects'/>
        <div className='projects'>
          <Trade/>
          <GenderStudy/>
          <SemanticLinking/>
          <Education/>
          <DairyPaper/>
          <Timeline/>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    view : state.ui.view
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Projects);

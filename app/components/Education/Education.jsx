import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Nav from '../Nav';
class Education extends Component{
  render(){
    return (
      <div className={this.props.view === 'education' ? '' : 'hidden'}>
        <Nav routeName='education'/>
        <div id="education">
          <ul>
            <li>
              <span style={font('large')}>Computer Science, PhD Student (2018)</span>
              <span style={font('small')}>Arizona State University</span>
              <span style={font('italic')}>Adviser:
                <a href="http://rmaciejewski.faculty.asu.edu/">Ross Maciejewski</a>
              </span>
            </li>
            <li>
              <span style={font('large')}>Computer Science, B.S (2013)</span>
              <span style={font('small')}>University of Nevada, Las Vegas</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
function font(flag='large'){
  const large = '20px', small = '15px';
  if(flag === 'large')
    return {fontWeight:'bold',fontSize:large,display:'block'};
  else if(flag === 'small')
    return {fontWeight:'bold',fontSize:small,display:'block'};
  else if(flag === 'italic')
    return {fontStyle:'italic',fontSize:small,display:'block'};
  return {};
}
function mapStateToProps(state) {
  return {
    view : state.ui.view
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Education);

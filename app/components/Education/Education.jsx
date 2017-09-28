import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Nav from '../Nav';
class Education extends Component{
  render(){
    return (
      <div>
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
  if(flag === 'large')
    return {fontWeight:'bold',fontSize:'15px',display:'block'};
  else if(flag === 'small')
    return {fontWeight:'bold',fontSize:'12px',display:'block'};
  else if(flag === 'italic')
    return {fontStyle:'italic',fontSize:'12px',display:'block'};
  return {};
}
function mapStateToProps(state) {
  return {};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Education);

import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Nav from '../Nav';
class Experience extends Component{
  render(){
    return (
      <div>
        <Nav routeName='experience'/>
        <div id="experience">
          <ul>
            <li>
              <span style={font('large')}>Pacific Northwest National Laboratory</span>
              <span style={font('small')}>PhD Intern (2017-Current)</span>
            </li>
            <li>
              <span style={font('large')}>Arizona State University</span>
              <span style={font('small')}>Research Assistant (2014-Current)</span>
            </li>
            <li>
              <span style={font('large')}>Arizona State University</span>
              <span style={font('small')}>Teaching Assistant (2013-2014)</span>
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
    return {fontSize:small,display:'block'};
  else if(flag === 'italic')
    return {fontStyle:'italic',fontSize:small,display:'block'};
  return {};
}
function mapStateToProps(state) {
  return {};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Experience);

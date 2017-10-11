import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {setView} from '../../actions/action-ui';
class Nav extends Component{
  makeClick(name){
    return (function(e){
      this.props.setView(name);
    }).bind(this);
  }
  render(){
    const {routeName} = this.props;
    return (
      <div className='nav'>
        <ul className='menu'>
          <li className={routeName === 'projects'?'selected':null}
            onClick = {this.makeClick('projects')}>
            <span>Projects</span>
          </li>
          <li className={routeName === 'education'?'selected':null}
            onClick = {this.makeClick('education')}>
            <span>Education</span>
          </li>
          <li className={routeName === 'experience'?'selected':null}
            onClick = {this.makeClick('experience')}>
            <span>Experience</span>
          </li>
          <li className={routeName === 'publication'?'selected':null}
            onClick = {this.makeClick('publication')}>
            <span>Publication</span>
          </li>
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({setView}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Nav);

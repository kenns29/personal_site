import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
class Nav extends Component{
  render(){
    return (
      <div className='nav'>
        <ul className='menu'>
          <li className='selected'>
            <NavLink activeClassName='active' to='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/gadgets'>Gadgets</NavLink>
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
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Nav);
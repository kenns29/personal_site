import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import '../../scss/nav.scss';
class Nav extends Component{
  render(){
    const {routeName} = this.props;
    return (
      <div className='nav'>
        <ul className='menu'>
          <li className={routeName === 'projects'?'selected':null}>
            <NavLink activeClassName='active'
              to='/'>Projects</NavLink>
          </li>
          <li className={routeName === 'gadgets'?'selected':null}>
            <NavLink activeClassName='active'
              to='/gadgets'>Gadgets</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    activeRoute: state.ui.activeRoute
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Nav);

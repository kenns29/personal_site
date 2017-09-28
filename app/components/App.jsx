import 'babel-polyfill';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../scss/main.scss';
import PageHeader from './PageHeader';
import Projects from './Projects';
import Gadgets from './Gadgets';
import Education from './Education';
import Experience from './Experience';
import Publication from './Publication';
export default class App extends Component {
  render() {
    return (
      <div id = "wrapper">
        <PageHeader/>
        <Router>
          <Switch>
            <Route exact path='/' component={Projects}/>
            <Route path='/gadgets' component={Gadgets}/>
            <Route path='/education' component={Education}/>
            <Route path='/experience' component={Experience}/>
            <Route path='/publication' component={Publication}/>
          </Switch>
        </Router>
      </div>
    );
  };
};

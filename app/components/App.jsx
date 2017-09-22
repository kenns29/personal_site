import 'babel-polyfill';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../scss/main.scss';
import PageHeader from './PageHeader';
import Projects from './Projects';
export default class App extends Component {
  render() {
    return (
      <div id = "wrapper">
        <PageHeader/>
        <Router>
          <Route path="/" component={Projects}/>
        </Router>
      </div>
    );
  };
};

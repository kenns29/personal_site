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
        <Projects/>
        <Education/>
        <Experience/>
        <Publication/>
      </div>
    );
  };
};

import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Project, {ProjectImg, ProjectText} from '../Project';
class Trade extends Component {
  render(){
    return (
      <Project>
        <ProjectImg>
          <a href="./img/trade.png">
            <img src="./img/trade.png" className="image"></img>
          </a>
        </ProjectImg>
        <ProjectText>
          <span className = "title">
            A Visual Analytics Framework for Spatial Temporal Trade Network Analysis</span>
          <p>{`A work that aim to study network-induced vulnerablity to food supply disruption,
          and their effect on a country's political stability and economic well being.
          We calculated triad profile and local clustering coefficient for each country
          and allow the analyst to discover their potential link to the country's political stability
          and economic well-being. We also identify the sudden changes of the countries' network property
          and allow the analyst to explore the cause and effect of such change.`}
          </p>
          <a href = "http://104.196.253.120:8080/TradeData/">Demo</a><span style={{fontStyle:'italic'}}>  long loading time</span>
        </ProjectText>
      </Project>
    );
  }
}
function mapStateToProps(state) {
  return {};
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Trade);

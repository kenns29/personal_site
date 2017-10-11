import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Project, {ProjectImg, ProjectText} from '../Project';
class DairyPaper extends Component {
  render(){
    return (
      <Project>
        <ProjectImg>
          <a href="./img/dairy_paper.png">
            <img src="./img/dairy_paper.png" className="image"></img>
          </a>
        </ProjectImg>
        <ProjectText>
          <span className = "title">Visualizing Attitude toward Dairy Products in Social Media</span>
          <p>
            A project that assess regional popularity of dairy products based on distribution of tweets mentioning these products.
            We implemented a word tree layout to allow user to discover common phrases that are related to the
            dairy products and plot distribution of tweets containing the phrases on a choropleth map.
            We also performed sentiment analysis on the tweets to assess the regional attitudes toward these dairy products
          </p>
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
export default connect(mapStateToProps, matchDispatchToProps)(DairyPaper);

import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as d3 from 'd3';
class ProjectImg extends Component{
  constructor(props){
    super(props);
    this.mouseover = this.mouseover.bind(this);
  }
  componentDidMount(){
    this.mouseover();
  }
  mouseover(){
    d3.select(this.container).on('mouseover', function(){
      d3.select(this).transition().duration(500)
      .style('width', '500px').style('height', '281px');
      d3.select(this.parentNode).select('.project-text')
      .transition().duration(500)
      .style('width', (this.parentNode.offsetWidth- 505) + 'px');
    })
    .on('mouseout', function(){
      d3.select(this).transition().duration(500)
      .style('width', '90px').style('height', '45px');
      d3.select(this.parentNode).select('.project-text')
      .transition().duration(500)
      .style('width', (this.parentNode.offsetWidth - 95) + 'px');
    });
  }
  render(){
    return (
      <div ref={input=>{this.container=input;}}className='project-image'>
        {
          this.props.children &&
          React.Children.map(this.props.children,
            (child=>React.cloneElement(child)))
        }
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
export default connect(mapStateToProps, matchDispatchToProps)(ProjectImg);

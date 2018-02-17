import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Nav from '../Nav';
class Publication extends Component{
  render(){
    return (
      <div className={this.props.view === 'publication' ? '' : 'hidden'}>
        <Nav routeName='publication'/>
        <div id="publication">
          <ul>
            <li>
              <span>Yafeng Lu, <span style={{color:'blue'}}>Hong Wang</span>, Steven Landis, Ross Maciejewski. "A Visual Analytics Framework for Identifying Topic Drivers in Media Events",
                <span style={{fontStyle:'italic'}}>IEEE Transactions on Visualization and Computer Graphics</span> (To appear)
              </span>
            </li>
            <li>
              <span>Corrie M Whisner, <span style={{color:'blue'}}>Hong Wang</span>, Sergio Felix, Ross Maciejewski.
                "Mining the Twitter-Sphere for Consumer Attitudes Towards Dairy,"
                <span style={{fontStyle:'italic'}}>The FASEB Journal</span> vol. 30 no. 1
              </span>
            </li>
            <li>
              <span>Yafeng Lu, Michael Steptoe, Sarah Burke, <span style={{color:'blue'}}>Hong Wang</span>, Jiun-Yi Tsai, Hasan Davulcu, Douglas Montgomery, Steven R. Corman, Ross Maciejewski.
                "Exploring Evolving Media Discourse Through Event Cueing,"
                <span style={{fontStyle:'italic'}}>IEEE Transactions on Visualization and Computer Graphics</span>, vol. 22, no. 1, pp. 220-229, Jan. 31 2016.
                doi: 10.1109/TVCG.2015.2467991
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    view : state.ui.view
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Publication);

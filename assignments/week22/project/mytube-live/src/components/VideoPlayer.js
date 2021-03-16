import React from 'react';
import {connect} from "react-redux";
import { stateMapper } from '../store/store';

class VideoPlayerComponents extends React.Component{
  render(){
    return (
      <div className="trending">
    </div>
    )}
}

let VideoPlayerComponents = connect(stateMapper)(TrendingComponet)
export default VideoPlayerComponents;
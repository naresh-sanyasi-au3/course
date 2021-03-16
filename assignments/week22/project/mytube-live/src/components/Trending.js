import React from 'react';
import {connect} from "react-redux";
import { stateMapper } from '../store/store';

class TrendingComponet extends React.Component{

  componentDidMount(){
    this.props.dispatch({
      type: "FETCH_VIDEOS"
    })
  }
  render(){
    return (
      <div className="trending">
       
    <h2 className="text-danger">Trending Videos</h2>
        <hr/>
       {this.props.videos.map(obj => {
         return (
           <div className="row">
             <div key={obj.id} className="col-md-4">
               <img src={obj.snippet.thumbnails.high.url} alt="img"></img>
               {obj.snippet.title}
             </div>
           </div>
         )

       })}
    </div>
    )}
}

let Trending = connect(stateMapper)(TrendingComponet)
export default Trending;
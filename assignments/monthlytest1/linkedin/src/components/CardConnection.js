import React from 'react';

const CardConnection = (props) => (
  <div className="container">
    <img 
      alt="monster" 
      src={`https://robohash.org/${props.connection.id}?set=set2&size=64x64`} 
    />
    <h2 style={{
      marginTop:"-50px",
      marginLeft: "100px"
    }}>{props.connection.name}</h2>
    <br />
    <hr />
  </div>
);

export default CardConnection;
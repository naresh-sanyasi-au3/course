import React from 'react';
import { Button } from 'reactstrap';

const Cards = (props) => (
  <div className="container">
    <img 
      alt="monster" 
      src={`https://robohash.org/${props.connection.id}?set=set2&size=64x64`} 
    />
    <h2 style={{
      marginTop:"-50px",
      marginLeft: "100px"
    }}>{props.connection.name}</h2>
    <Button type="submit" value="submit" color="seconday" style={{
      marginLeft: "60%",
    }}>Ignore</Button>
    <Button type="submit" value="submit" color="primary">Accept</Button>
    <br />
    <hr />
  </div>
);

export default Cards;
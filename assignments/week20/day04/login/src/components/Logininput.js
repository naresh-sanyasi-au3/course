import React from 'react';

function Logininput(props){
    return (
    <div className="form-group">
<label>{props.label}</label>
<input type="text" placeholder={props.placeholder} className="form-control" />
    </div>
    );
}
export default Logininput;
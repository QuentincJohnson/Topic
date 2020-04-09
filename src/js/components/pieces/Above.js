import React from 'react';
import "css/index.css";

const Above = (props) =>{
 
    return (
        <div className="abv-content-grd">
            <span >{props.user}</span>
            <span className="right">>></span>
        </div>
    )
  }

export default Above
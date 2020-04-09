import React from 'react';
import Above from 'components/pieces/Above'
import "css/index.css";

const Reply = (props) =>{
 
    return (
        <section className="thread-rep">
            <Above/>
            <div class="thread-content board">
                <h1>{props.title}</h1>
                <p>{props.post}</p>
            </div>  
        </section>
    )
  }

export default Reply
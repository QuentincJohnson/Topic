import React from 'react';
import Above from 'components/pieces/Above'
import "css/index.css";

const MainPost = (props) =>{
 
    return (
        <section className="Main-Post">
            <Above/>
            <div className="main-grid">
                <img src={props.img} alt="img" className="thread-img"/>
                <div className="thread-content">
                    <h1>{props.title}</h1>
                    <p>{props.post}</p>
                </div>
            </div>    
        </section>
    )
  }

export default MainPost
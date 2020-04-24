import React from 'react';
import Above from 'components/pieces/Above'
import "css/index.css";



const Reply = (porps) =>{
 
    return (
        <section className="thread-rep">
            <Above user={porps.user}/>
            <div className="thread-content board">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laudantium ipsam soluta praesentium natus vitae dolore nobis quos voluptates eligendi consequatur itaque esse at, tenetur harum deserunt. Minus, cumque minima!</p>
            </div>  
        </section>
    )
  }

export default Reply
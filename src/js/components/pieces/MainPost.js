import React from 'react';
import Above from 'components/pieces/Above'
import "css/index.css";

const MainPost = (props) =>{
 
    return (
        <section className="Main-Post">
            <Above user={props.user}/>
            <div className="main-grid">
                <img src={props.img} alt="img" className="thread-img"/>
                <div className="thread-content">
                    <h1>{props.title}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Nulla hic dolor voluptate culpa 
                         quae voluptatum quia aliquam, nemo quidem molestias, 
                         rerum animi quas. Corporis quam voluptatem tempore, voluptatum corrupti quasi.lorem
                         quae voluptatum quia aliquam, nemo quidem molestias, 
                         rerum animi quas. Corporis quam voluptatem tempore, voluptatum corrupti quasi.lorem
                    </p>
                </div>
            </div>    
        </section>
    )
  }

export default MainPost
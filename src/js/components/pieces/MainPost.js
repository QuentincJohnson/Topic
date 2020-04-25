import React from 'react';
import Above from 'components/pieces/Above'
import "css/index.css";

const MainPost = (props) =>{
    console.log(props.img)
 
    return (
        <section className="Main-Post">
            <Above user={props.user}/>
            <div className="main-post-grid main-grid">
                <div className="thread-img"><img src={props.img} alt="img"/></div>
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
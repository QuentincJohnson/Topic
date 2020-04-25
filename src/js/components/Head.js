import React from 'react';
import "css/index.css";
//import logo from 'img/logo.jpeg'

const Head = () => {
	return (
        <header>
            <ul className="head-grid">
                <li><img src="/public/img/Artboard 1@0.5x-8.png" alt="topic-logo" class="logo"></img></li>
                <li class="profile"><i class="fas fa-male"></i></li>
            </ul>
        </header>
    )
}

export default Head;

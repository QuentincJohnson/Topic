import React from 'react';
import { useState } from 'react'
import "css/index.css";


const Topics = (props) =>{

    const [Cat, setCat] = useState('welcome')
    return (
        <section className="char-section">
              <ul className="chars">
                  <li onClick={()=> setCat('art')}>Art</li>
                  <li onClick={()=> setCat('vg')}> VideoGames</li>
                  <li>Technology</li>
                  <li>Comics</li>
                  <li>Movies</li>
                  <li>T-V</li>
                  <li>Anime</li>
                  <li>Cartoons</li>
                  <li>Fashion</li>
                  <li>Culture</li>
                  <li>Politics</li>
                  <li>News</li>
                  <li>Wallpapers</li>
                  <li>Food</li>
                  <li>Fitness</li>
                  <li>Comedy</li>
              </ul>
          </section>
    )
  }

export default Topics;
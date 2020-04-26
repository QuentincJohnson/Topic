import React from 'react';
import { useState } from 'react'
import MainPost from 'components/pieces/MainPost'
import Reply from 'components/pieces/Reply'
import Foot from 'components/Foot'
import Head from 'components/Head';

const ReplyObj = require('../models/Reply')
const PostObj = require('../models/Posts')

const Content = (props) => {

    const [UserFill, setUserFill] = useState("Welcome")
    const [TitleFill, setTitleFill] = useState("Welcom to Topic")
    const [ImgFill, setImgFill] = useState("/public/img/Artboard 1@0.5x-8.png")
    const [TypeFill, setTypeFill] = useState("")

    const[Toggle, setToggle] = useState(true)


    var Replies = []
    for (let i = 0; i < ReplyObj[TypeFill]; i++){
        name = `user${i}`
        Replies.push(<Reply key={i} user={name} />)

    }
            
 
	return (
        <>
            <section className="char-section">
                <ul className="chars desktop">
                    <li onClick={() => {
                         setUserFill(PostObj.art.user)
                         setTitleFill(PostObj.art.title) 
                         setImgFill(PostObj.art.img)
                         setTypeFill('art')}}>Art</li>


                    <li onClick={()=>{                 
                        setUserFill(PostObj.vg.user)
                        setTitleFill(PostObj.vg.title) 
                        setImgFill(PostObj.vg.img)
                        setTypeFill('vg')}}> VideoGames</li>

                    <li onClick={()=> {                
                        setUserFill(PostObj.tech.user)
                        setTitleFill(PostObj.tech.title) 
                        setImgFill(PostObj.tech.img)
                        setTypeFill('tech')}}>Technology</li>

                        
                    <li onClick={()=> {
                        setUserFill(PostObj.comics.user)
                        setTitleFill(PostObj.comics.title) 
                        setImgFill(PostObj.comics.img)
                        setTypeFill('comics')}}>Comics</li>

                    <li onClick={()=> {
                             setUserFill(PostObj.movies.user)
                             setTitleFill(PostObj.movies.title) 
                             setImgFill(PostObj.movies.img)
                             setTypeFill('movies')}}>Movies</li>

                    <li onClick={()=> {
                            setUserFill(PostObj.tv.user)
                            setTitleFill(PostObj.tv.title) 
                            setImgFill(PostObj.tv.img)
                            setTypeFill('tv')}}>T-V</li>

                    <li onClick={()=> {
                            setUserFill(PostObj.anime.user)
                            setTitleFill(PostObj.anime.title) 
                            setImgFill(PostObj.anime.img)
                            setTypeFill('anime')}}>Anime</li>

                    <li onClick={()=> {
                            setUserFill(PostObj.cartoons.user)
                            setTitleFill(PostObj.cartoons.title) 
                            setImgFill(PostObj.cartoons.img)
                            setTypeFill('cartoons')}}>Cartoons</li>

                    <li onClick={()=> {
                            setUserFill(PostObj.fashion.user)
                            setTitleFill(PostObj.fashion.title) 
                            setImgFill(PostObj.fashion.img)
                            setTypeFill('fashion')}}>Fashion</li>

                    <li onClick={()=> {    
                            setUserFill(PostObj.music.user)
                            setTitleFill(PostObj.music.title) 
                            setImgFill(PostObj.music.img)
                            setTypeFill('music')}}>Music</li>

                    <li onClick={()=> {
                            setUserFill(PostObj.politics.user)
                            setTitleFill(PostObj.politics.title) 
                            setImgFill(PostObj.politics.img)
                            setTypeFill('politics')}}>Politics</li>

                    <li onClick={()=> {                
                            setUserFill(PostObj.news.user)
                            setTitleFill(PostObj.news.title) 
                            setImgFill(PostObj.news.img)
                            setTypeFill('news')}}>News</li>

                    <li onClick={()=> {                
                            setUserFill(PostObj.wall.user)
                            setTitleFill(PostObj.wall.title) 
                            setImgFill(PostObj.wall.img)
                            setTypeFill('wall')}}>Wallpapers</li>

                    <li onClick={()=> {                
                            setUserFill(PostObj.food.user)
                            setTitleFill(PostObj.food.title) 
                            setImgFill(PostObj.food.img)
                            setTypeFill('food')}}>Food</li>

                    <li onClick={()=> {                
                            setUserFill(PostObj.fitness.user)
                            setTitleFill(PostObj.fitness.title) 
                            setImgFill(PostObj.fitness.img)
                            setTypeFill('fitness')}}>Fitness</li>

                    <li onClick={()=> {                 
                            setUserFill(PostObj.comedy.user)
                            setTitleFill(PostObj.comedy.title) 
                            setImgFill(PostObj.comedy.img)
                            setTypeFill('comedy')}}>Comedy</li>
                </ul>
            </section>
            <article className="main-section">
                <Head/>
                <span className="burger" onClick={()=> setToggle(!Toggle)}><i className="fas fa-bars" ></i></span>


                <ul className={Toggle ? "chars mobile-c" : "chars mobile-c hide"}>
                    <li onClick={() => {
                         setUserFill(PostObj.art.user)
                         setTitleFill(PostObj.art.title) 
                         setImgFill(PostObj.art.img)
                         setTypeFill('art')}}>Art</li>


                    <li onClick={()=>{                 
                        setUserFill(PostObj.vg.user)
                        setTitleFill(PostObj.vg.title) 
                        setImgFill(PostObj.vg.img)
                        setTypeFill('vg')}}> VideoGames</li>

                    <li onClick={()=> {                
                        setUserFill(PostObj.tech.user)
                        setTitleFill(PostObj.tech.title) 
                        setImgFill(PostObj.tech.img)
                        setTypeFill('tech')}}>Technology</li>

                        
                    <li onClick={()=> {
                        setUserFill(PostObj.comics.user)
                        setTitleFill(PostObj.comics.title) 
                        setImgFill(PostObj.comics.img)
                        setTypeFill('comics')}}>Comics</li>

                    <li onClick={()=> {
                             setUserFill(PostObj.movies.user)
                             setTitleFill(PostObj.movies.title) 
                             setImgFill(PostObj.movies.img)
                             setTypeFill('movies')}}>Movies</li>

                    <li onClick={()=> {
                            setUserFill(PostObj.tv.user)
                            setTitleFill(PostObj.tv.title) 
                            setImgFill(PostObj.tv.img)
                            setTypeFill('tv')}}>T-V</li>

                    <li onClick={()=> {
                            setUserFill(PostObj.anime.user)
                            setTitleFill(PostObj.anime.title) 
                            setImgFill(PostObj.anime.img)
                            setTypeFill('anime')}}>Anime</li>

                    <li onClick={()=> {
                            setUserFill(PostObj.cartoons.user)
                            setTitleFill(PostObj.cartoons.title) 
                            setImgFill(PostObj.cartoons.img)
                            setTypeFill('cartoons')}}>Cartoons</li>

                    <li onClick={()=> {
                            setUserFill(PostObj.fashion.user)
                            setTitleFill(PostObj.fashion.title) 
                            setImgFill(PostObj.fashion.img)
                            setTypeFill('fashion')}}>Fashion</li>

                    <li onClick={()=> {    
                            setUserFill(PostObj.music.user)
                            setTitleFill(PostObj.music.title) 
                            setImgFill(PostObj.music.img)
                            setTypeFill('music')}}>Music</li>

                    <li onClick={()=> {
                            setUserFill(PostObj.politics.user)
                            setTitleFill(PostObj.politics.title) 
                            setImgFill(PostObj.politics.img)
                            setTypeFill('politics')}}>Politics</li>

                    <li onClick={()=> {                
                            setUserFill(PostObj.news.user)
                            setTitleFill(PostObj.news.title) 
                            setImgFill(PostObj.news.img)
                            setTypeFill('news')}}>News</li>

                    <li onClick={()=> {                
                            setUserFill(PostObj.wall.user)
                            setTitleFill(PostObj.wall.title) 
                            setImgFill(PostObj.wall.img)
                            setTypeFill('wall')}}>Wallpapers</li>

                    <li onClick={()=> {                
                            setUserFill(PostObj.food.user)
                            setTitleFill(PostObj.food.title) 
                            setImgFill(PostObj.food.img)
                            setTypeFill('food')}}>Food</li>

                    <li onClick={()=> {                
                            setUserFill(PostObj.fitness.user)
                            setTitleFill(PostObj.fitness.title) 
                            setImgFill(PostObj.fitness.img)
                            setTypeFill('fitness')}}>Fitness</li>

                    <li onClick={()=> {                 
                            setUserFill(PostObj.comedy.user)
                            setTitleFill(PostObj.comedy.title) 
                            setImgFill(PostObj.comedy.img)
                            setTypeFill('comedy')}}>Comedy</li>
                </ul>
                <MainPost user={UserFill} title={TitleFill} img ={ImgFill}/>
                {Replies}
                <Foot/>
            </article>
        </>
    )
}

export default Content;




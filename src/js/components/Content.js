import React from 'react';
import { useState } from 'react'
import MainPost from 'components/pieces/MainPost'
import Reply from 'components/pieces/Reply'
import Foot from 'components/Foot'

const ReplyObj = require('../models/Reply')
const PostObj = require('../models/Posts')

const Content = (props) => {

    const [Cat, setCat] = useState(0)

    const [UserFill, setUserFill] = useState("")
    const [TitleFill, setTitleFill] = useState("")
    const [ImgFill, setImgFill] = useState("")
    const [TypeFill, setTypeFill] = useState("")


    var Replies = []
    for (let i = 0; i < ReplyObj[TypeFill]; i++){
        name = `user${i}`
        Replies.push(<Reply key={i} user={name} />)

    }

    function fill(category) {
        setCat(category)
        switch (Cat) {
            case 1:
                setUserFill(PostObj.art.user)
                setTitleFill(PostObj.art.title) 
                setImgFill(PostObj.art.img)
                setTypeFill('art')
                type = 'vg'
                break;
            case 2:
                setUserFill(PostObj.vg.user)
                setTitleFill(PostObj.vg.title) 
                setImgFill(PostObj.vg.img)
                setTypeFill('vg')
                break;
            case 3:
                setUserFill(PostObj.tech.user)
                setTitleFill(PostObj.tech.title) 
                setImgFill(PostObj.tech.img)
                setTypeFill('tech')
                break;
            case 4:
                setUserFill(PostObj.comics.user)
                setTitleFill(PostObj.comics.title) 
                setImgFill(PostObj.comics.img)
                setTypeFill('comics')
                break;
            case 5:
                setUserFill(PostObj.movies.user)
                setTitleFill(PostObj.movies.title) 
                setImgFill(PostObj.movies.img)
                setTypeFill('movies')
                break;
            case 6:
                setUserFill(PostObj.tv.user)
                setTitleFill(PostObj.tv.title) 
                setImgFill(PostObj.tv.img)
                setTypeFill('tv')
                break;

            case 7:
                setUserFill(PostObj.anime.user)
                setTitleFill(PostObj.anime.title) 
                setImgFill(PostObj.anime.img)
                setTypeFill('anime')
                break;
            case 8:
                setUserFill(PostObj.cartoons.user)
                setTitleFill(PostObj.cartoons.title) 
                setImgFill(PostObj.cartoons.img)
                setTypeFill('cartoons')
                break;
            case 9:
                setUserFill(PostObj.fashion.user)
                setTitleFill(PostObj.fashion.title) 
                setImgFill(PostObj.fashion.img)
                setTypeFill('fashion')
                break;
            case 10:
                setUserFill(PostObj.music.user)
                setTitleFill(PostObj.music.title) 
                setImgFill(PostObj.music.img)
                setTypeFill('music')
                break;
            case 11:
                setUserFill(PostObj.politics.user)
                setTitleFill(PostObj.politics.title) 
                setImgFill(PostObj.politics.img)
                setTypeFill('politics')
                break;
            case 12:
                setUserFill(PostObj.news.user)
                setTitleFill(PostObj.news.title) 
                setImgFill(PostObj.news.img)
                setTypeFill('news')
                break;
            case 13:
                setUserFill(PostObj.wall.user)
                setTitleFill(PostObj.wall.title) 
                setImgFill(PostObj.wall.img)
                setTypeFill('wall')
                break;
            case 14:
                setUserFill(PostObj.food.user)
                setTitleFill(PostObj.food.title) 
                setImgFill(PostObj.food.img)
                setTypeFill('food')
                break;
            case 15:
                setUserFill(PostObj.fitness.user)
                setTitleFill(PostObj.fitness.title) 
                setImgFill(PostObj.fitness.img)
                setTypeFill('fitness')
                break;
            case 16:
                setUserFill(PostObj.comedy.user)
                setTitleFill(PostObj.comedy.title) 
                setImgFill(PostObj.comedy.img)
                setTypeFill('comedy')
                break;
            default:
                setUserFill('Welcom')
                setTitleFill('') 
                setImgFill('')
                break;
        }
        
    }

    
	return (
        <>
            <section className="char-section">
                <ul className="chars">
                    <li onClick={()=> fill(1)}>Art</li>
                    <li onClick={()=> fill(2)}> VideoGames</li>
                    <li onClick={()=> fill(3)}>Technology</li>
                    <li onClick={()=> fill(4)}>Comics</li>
                    <li onClick={()=> fill(5)}>Movies</li>
                    <li onClick={()=> fill(6)}>T-V</li>
                    <li onClick={()=> fill(7)}>Anime</li>
                    <li onClick={()=> fill(8)}>Cartoons</li>
                    <li onClick={()=> fill(9)}>Fashion</li>
                    <li onClick={()=> fill(10)}>Music</li>
                    <li onClick={()=> fill(11)}>Politics</li>
                    <li onClick={()=> fill(12)}>News</li>
                    <li onClick={()=> fill(13)}>Wallpapers</li>
                    <li onClick={()=> fill(14)}>Food</li>
                    <li onClick={()=> fill(15)}>Fitness</li>
                    <li onClick={()=> fill(16)}>Comedy</li>
                </ul>
            </section>
            <article className="main-section">
                <MainPost user={UserFill} title={TitleFill} img ={ImgFill}/>
                {Replies}
                <Foot/>
            </article>
        </>
    )
}

export default Content;




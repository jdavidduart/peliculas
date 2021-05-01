import React from 'react';
import './Home.css'
import {Carousel} from '3d-react-carousal';
export default function Home(){
    let slides = [
        <img  src="https://image.tmdb.org/t/p/w300//6Cn5Lx9kqhXzTNV5QXwZ3RW5pBg.jpg"  alt="1" />,
        <img  src="https://image.tmdb.org/t/p/w300//6Cn5Lx9kqhXzTNV5QXwZ3RW5pBg.jpg" alt="2" />  ,
        <img  src="https://image.tmdb.org/t/p/w300//6Cn5Lx9kqhXzTNV5QXwZ3RW5pBg.jpg" alt="3" />  ,
        <img  src="https://image.tmdb.org/t/p/w300//6Cn5Lx9kqhXzTNV5QXwZ3RW5pBg.jpg" alt="4" />  ,
        <img src="https://image.tmdb.org/t/p/w300//6Cn5Lx9kqhXzTNV5QXwZ3RW5pBg.jpg" alt="5" />   ];
    return(
        <div className='homeContainer'>
            <Carousel slides={slides} autoplay={true} interval={5000}/>
        </div>
    )
}
import React from 'react';
import './Home.css'
import Coverflow from 'react-coverflow';
export default function Home(){
    return(
        <div className='homeContainer'>
            <div className='latestTitle'>Latest Releases</div>
            <div className='sliderContainer'>
                <Coverflow useref="coverflow"
                    displayQuantityOfSide={2}
                    navigation={true}
                    enableHeading={true}
                    active={0}
                    infiniteScroll={true}
                    currentFigureScale={1}
                    otherFigureScale={0.6}
                    enableHeading={false}
                    >
                    <img src='https://m.media-amazon.com/images/M/MV5BYjYzOGE1MjUtODgyMy00ZDAxLTljYTgtNzk0Njg2YWQwMTZhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg' alt=''/>
                    <img src='https://m.media-amazon.com/images/M/MV5BYWU2ZTRhNDMtMWYxMC00ZTVkLThjZmItZGY4MGU0YmZlMjJlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg' alt=''/>
                    <img src='https://m.media-amazon.com/images/M/MV5BMTE1YjYwZmItYWEzMS00MGM3LTlhYTQtOWIyM2Y1MmUzNzUyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg' alt=''/>
                    <img src='https://m.media-amazon.com/images/M/MV5BMTMzMTg1MjgtOWNhYy00NmZmLWExOTctMjA2OTZhZDFkNDhhXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg' alt=''/>
                    <img src='https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg' alt=''/>
                </Coverflow>
            </div>
        </div>
    )
}
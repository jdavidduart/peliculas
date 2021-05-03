import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import { Carousel } from "3d-react-carousal";
import Loading from "../loading/loading"
function Home() {
  const movieImg = useSelector((store) => store.movieImg);
  const loading = useSelector((store) => store.loading);

  if(loading){
    return <Loading />
  }else{
    return (
      <div className="homeContainer">
        <h3 className="homeText">Peliculas recientemente agregadas</h3>
        <div className="homeText"></div>
         {movieImg.length>1? <Carousel slides={movieImg} autoplay={true} interval={5000} /> : <div/>} 
        </div>
    );
  }
}


export default Home;

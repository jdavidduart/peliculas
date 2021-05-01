import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import { getMovieDetail } from '../../actions/actions';
import './movie.css';
import { RiStarFill } from "react-icons/ri";
function Movie({movie,match,getDetail}){
  const movieId=match.params.id;
  const type=match.params.type;
  useEffect(()=>{
      getDetail(type,movieId)
  },[movieId,getDetail,type])
  return (
    <div className='movieInfo'>
      <div className='movieContainer'>
        <div>
          <h3 className='movieTitle'>{movie.name? movie.name : movie.title}</h3>
        </div>
        <div className='subC'>
          <div className='poster'><img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt=''></img></div>
          <div className='textPoster'>
            <div className='textMovie'>{movie.overview}</div>
              <div className='textMovie'>
              <div>Fecha de lanzamiento: {movie.release_date? movie.release_date: movie.first_air_date} </div>
              <div>Genero: {movie.genres?.map( (genre,index) => <span>{index===movie.genres.length-1? genre.name +'.' : genre.name+", "}</span>)} </div>
              <div>{movie.seasons? movie.seasons.length + " temporadas" : ""} </div>
              <div>{movie.original_title ? "Titulo original: " + movie.original_title  : ""} </div>
              <div>{movie.original_name ? "Titulo original: " + movie.original_name  : ""} </div>
              </div>
            <p className='textMovie'><RiStarFill size='30px' className='starRating'/><span className='textRating'>{movie.vote_average}</span><span className='textRating2'>/10</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDetail: (type,idMovie) => dispatch(getMovieDetail(type, idMovie))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

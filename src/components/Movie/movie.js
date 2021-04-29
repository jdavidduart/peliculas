import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import { getMovieDetail } from '../../actions/actions';
import './movie.css';
import { RiStarFill } from "react-icons/ri";
function Movie({movie,match,getDetail}){
  const movieId=match.params.id;
  useEffect(()=>{
      getDetail(movieId)
  },[movieId,getDetail])
  return (
    <div className='movieInfo'>
      <div className='movieContainer'>
        <div>
          <h3 className='movieTitle'>{movie.Title}</h3>
        </div>
        <div className='subC'>
          <div className='poster'><img src={movie.Poster} alt=''></img></div>
          <div className='textPoster'>
            <div className='textMovie'>{movie.Plot}</div>
            <p className='textMovie'>
            <div>Year: {movie.Year}</div>
            <div>Release Date: {movie.Released} </div>
            <div>Gender: {movie.Genre} </div>
            <div>Actors: {movie.Actors} </div>
            <div>Awards: {movie.Awards} </div>
            </p>
            <p className='textMovie'><RiStarFill size='30px' className='starRating'/><span className='textRating'>{movie.imdbRating}</span><span className='textRating2'>/10</span></p>
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
    getDetail: idMovie => dispatch(getMovieDetail(idMovie))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

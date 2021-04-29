import React from 'react';
import { connect } from "react-redux";
import './searchresults.css'
import { AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Searchresults (props){
    var movies=function(){
        
       if(props.results !== undefined){ 
            return( 
                <div>
                    <h3><span className='WantedHeader'>Results for </span><span className="movieWanted">"{props.movieWanted}"</span></h3> 
                    {props.results?.map(movie =>(
                            <div key={movie.imdbID}>
                                <Link to={`movie/${movie.imdbID}`}><p><AiFillCaretRight size='10px'/>{movie.Title}</p></Link>
                            </div>
                            )
                        )}
                </div>
                )
        }else{
            return (
                <div>
                    <h3>Results not found</h3>
                    <ul>
                        <li>Verify that you have not had any spelling errors such as: "Abengers" instead of "Avengers" "ironman" instead of "iron man"</li>
                        <li>Try again, searching for only one word.</li>
                    </ul>
                    <p><span className='WantedHeader'>You searched: </span><span className="movieWanted">"{props.movieWanted}"</span></p>
                </div>
                )
        }
    }
    return(
        <div className='searchresults'>
            <div className='container'>
                <div className='subContainer'>
                    
                    {
                      movies()
                    }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {         //se usa para seleccionar parte de los datos de la tienda y luego retornarlos en un obj, 
    return {                                //en este caso state.moviesLoaded y se renombra con movies.  mapStateToProps se actualiza cada vez que cambia el estado de tienda
      results: state.moviesLoaded,
      movieWanted: state.movieWanted
    };
  }
                                                                                          
  export default connect(
    mapStateToProps,null
  )(Searchresults);
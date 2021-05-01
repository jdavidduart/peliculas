import React from 'react';
import { connect } from "react-redux";
import './searchresults.css'
import { AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Searchresults (props){

    var movies=function(){

        if(props.results.length>0){ 
            return( 
                <div>
                    <h3><span className='WantedHeader'>Results for </span><span className="movieWanted">"{props.movieWanted}"</span></h3> 
                    {props.results?.map(movie =>(
                            <div key={movie.id}>
                                <Link to={`${movie.media_type}/${movie.id}`}><div><AiFillCaretRight size='10px'/>{movie.name}</div></Link>
                            </div>
                            )
                        )}
                </div>
                )
        }else{
            return (
                <div>
                    <h3>Resultados no encontrados</h3>
                    <ul>
                        <li>Verifica que no hayas cometidos errores ortograficos como por ejemplo "Bengadores" en vez de "Vengadores", "ironman" instead of "iron man"</li>
                        <li>Intenta otra vez, buscando por una sola palabra.</li>
                    </ul>
                    <p><span className='WantedHeader'>Tu busqueda: </span><span className="movieWanted">"{props.movieWanted}"</span></p>
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
import axios from "axios"
export function loading(payload){
    return {
        type:"LOADING", payload: payload  
    }
}


export function getMovies(titulo) {
    var total;
    return function(dispatch) {
        dispatch(loading(true))
        return fetch("https://api.themoviedb.org/3/search/multi?api_key=547d4e708c1b1edbff45e5ce3d36034c&language=es&query=" + titulo)
        .then(response => response.json())
        .then(json => {
            total=json;
            if(json.total_results>10){
            return fetch("https://api.themoviedb.org/3/search/multi?api_key=547d4e708c1b1edbff45e5ce3d36034c&language=es&query=" + titulo + '&page=2')
            }
            else{
                dispatch({ type: "GET_MOVIES", payload: total, title:titulo });
                dispatch(loading(false))
            }    
        })
        .then(r =>{ 
            if(r !== undefined) {return r.json()}
        })
        .then(json => {
            if(json !==undefined){
            total.results=total.results.concat(json.results);
            dispatch({ type: "GET_MOVIES", payload: total, title:titulo })
            dispatch(loading(false))
            }
        })
    };
}
    
export function  getMovieDetail (type,movieId){       
    return function(dispatch) {                                       
        return fetch("https://api.themoviedb.org/3/"+type+"/"+movieId+"?api_key=547d4e708c1b1edbff45e5ce3d36034c&language=es")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
}

/* export function getLatest (){       
    return function(dispatch) {
        dispatch(loading(true))                                    
        return fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=547d4e708c1b1edbff45e5ce3d36034c&language=es&page=1")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_LATEST_MOVIES", payload: json });
            dispatch(loading(false)) 
        });
    };
} */


export function getLatest (){       
    return async function(dispatch) {
        try {
            dispatch(loading(true))  
            const respuesta = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=547d4e708c1b1edbff45e5ce3d36034c&language=es&page=1")
            dispatch({ type: "GET_LATEST_MOVIES", payload: respuesta.data });
            dispatch(loading(false)) 
        }catch (error) {
        }   
    };
}

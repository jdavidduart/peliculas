export function getMovies(titulo) {
    var total;
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
            total=json;
            if(json.totalResults>10){
            return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo + '&page=2')
            }
            else{
                dispatch({ type: "GET_MOVIES", payload: total, title:titulo });
            }    
        })
        .then(r =>{ 
            if(r !== undefined) {return r.json()}
        })
        .then(json => {
            if(json !==undefined){
            total.Search=total.Search.concat(json.Search);
            dispatch({ type: "GET_MOVIES", payload: total, title:titulo })
            }
        })
    };
}
    
export function  getMovieDetail (id){       
    return function(dispatch) {                                             //se retorna una funcion para que pueda ejecutarse de manera asincronica
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
}


export function inputValue(text){
    return{
        type: "MOVIE_WANTED", 
        payload: text 
    }
}
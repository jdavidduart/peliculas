const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    movieWanted:[],
    movieLatest:{},
    movieImg:[],
    loading: false
  };

  function rootReducer(state = initialState, action) {        
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.results.map(movie =>{
            if(!movie.name){
              movie.name=movie.title
            }
            return movie
          }),                 
          movieWanted: action.title
        };
    }

    if (action.type === "GET_MOVIE_DETAIL") {
        return {
          ...state,
          movieDetail: action.payload,
          loading: false

        };
    }

    if (action.type === "GET_LATEST_MOVIES") {
      return {
        ...state,
        movieLatest: action.payload,
        movieImg: action.payload.results?.map(movie =>(
          <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt =''></img>
        ))
      };
    }

    if(action.type === "LOADING") {
      return {
        ...state,
        loading: action.payload
      };
    }
    
    return state;
  }
  
  export default rootReducer;
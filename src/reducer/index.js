const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {},
    movieWanted:[]
  };

  function rootReducer(state = initialState, action) {        //reducer es el encargado de camnbiar los estados
    if (action.type === "GET_MOVIES") {
        return {
          ...state,
          moviesLoaded: action.payload.Search,                 //se sobreescribe para no guardar las busquedas anteriores
          movieWanted: action.title
        };
    }

    if (action.type === "GET_MOVIE_DETAIL") {
        return {
          ...state,
          movieDetail: action.payload

        };
    }
    
    return state;
  }
  
  export default rootReducer;
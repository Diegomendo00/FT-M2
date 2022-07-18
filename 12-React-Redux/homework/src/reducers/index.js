import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE } from "../actions-type/action-type";
const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MOVIE_FAVORITE) {
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload)
      }
  }
  if (action.type === GET_MOVIES) {
      return {
        ...state,
        moviesLoaded: action.payload.Search//este search sale de las propiedades que me trae la API 
      };
  }
  if(action.type === GET_MOVIE_DETAIL){
	  return{
		  ...state,
		  movieDetail: action.payload
	  }
  }
  if(action.type === REMOVE_MOVIE_FAVORITE){
	  return{
		  ...state,
		  moviesFavourites: state.moviesFavourites.filter(m => m.imdbID !== action.payload)
	  }
  }
  return state;
}

export default rootReducer;
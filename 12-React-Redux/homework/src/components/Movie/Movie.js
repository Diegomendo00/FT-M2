import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount(){
	this.props.getMovieDetail(this.props.match.params.id)
}//esta funcion lo que hace es que apenas se llegue a este componente cargue la informacion de la pelicula mediante su id

    render() {
        return (
            <div className="movie-detail">
                <h3>{this.props.movie.Title}</h3>
					 <p>{this.props.movie.Plot}</p>	
            </div>//estas son propiedades que estan dentro del objeto con la informacion de las peliculas
        );
    }
}
const mapStateToProps= (state) => {
	return {
		movie: state.movieDetail
	}
}


export default connect( mapStateToProps, {getMovieDetail})(Movie);
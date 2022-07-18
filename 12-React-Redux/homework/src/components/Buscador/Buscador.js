import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {addMovieFavorite, getMovies, getMovieDetail, removeMovieFavorite} from "../../actions/index.js"



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();//cuando realize el click en el boton deben aparecer todas las coincidencias que hayan con el nombre que halla pueso dentro del input
	 this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>{/* cuando se llame una funcion en un componente de clase se debe realizar de esta manera para evitar realizar un bindeo de la funcion al this*/}
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
			{/* esto quiere decir que mientras alla algo en movie, con el map, que revise cada pelicula y me la coloque en una lista. se coloca el Title por que asi es como me llega la propiedad desde la API*/}
			{this.props.movies?.map(m => (
				<div>
				<Link to={`/movie/${m.imdbID}`}>
					<li>{m.Title}</li>
				</Link>
				<button onClick= {() => this.props.addMovieFavorite({Title: m.Title, imdbID: m.imdbID})}>FAV</button>
				</div>//aqui con Link le establezco que me lleve a la direccion de la pelicula con el id; y destro de la funcion del onclick, mediante los resultados del map (m) que me guarde solo el titulo y el id dentro del array de peliculas favoritas que esta en el initialState
			))
			}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);


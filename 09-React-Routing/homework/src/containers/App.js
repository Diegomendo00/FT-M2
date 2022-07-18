import React, { useState } from "react";

import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import About from "../components/About";
import { Route, Switch } from "react-router-dom";
import Ciudad from "../components/Ciudad";

const apiKey = "3058dcc9e6dc74aaf0b46e6dcedcfa22";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    //se puede hacer de otra forma con la funcion find y quedaria asi:
    //  let ciudad = cities.find((c) => c.id === Number(ciudadId));
    //  return ciudad;
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId)); // aqui llega el id dado por la url en donde con un filter se revisa dentro de los datos que tengo en cities, si este, al ser un array lo envio con la posicion, como solo debe ser uno la posicion sera 0. el parseInt es para que transforme el dato en  numero ya que como llega de una url es un string
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      {/*<Nav /> tiene que aparecer en todas las rutas.*/}
      <Route exact path="/">
        {/*<Cards /> debe aparecer sólo en la ruta /.     para que no me aparezca siempre la misma pagina agrego el exact*/}
        <Cards cities={cities} onClose={onClose} />
      </Route>
      {/* la forma legacy seria asi 
		<Route
    path='/'
    render = {() => <Cards cities={cities} onClose={onClose} /> }
				/>  el render se utiliza cuando una ruta va a recibir propiedades*/}
      <Route path="/about">
        {/* <About /> debe aparecer sólo la ruta /about. */}
        <About />
        {/* la forma de legacy seria esta:
		  <Route
    path='/about'
    component={About}
			/>*/}
      </Route>
      {/*<Cuidad /> debe aparecer sólo en la ruta /ciudad/{ciudadId}  */}
      <Route
        path="/ciudad/:id"
        render={({ match }) => <Ciudad city={onFilter(match.params.id)} />}
      ></Route>
      {/* cada vez que se invoque el render este vendra con tres propiedades que son match, location y history. como solo vamos a necesitar match realizamos un destructuring. ahora como a ciudad se le pasa una propiedad(city) primero necesito que lo que vaya a enviar este relacionado con el id que se pasa dentro de la url, por eso realizo la funcion que ya esta establecida (antes del return) sobre el id */}
      {/* finalmente cuando ya tenga ese dato(el cual va a ser un objeto con muchas propiedades) se lo envio al componente de ciudad (revisar ciudad.jsx)*/}
      <hr />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import { useState } from "react";

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((res) => res.json()) //cuando reciba la respuesta del fetch paso ese archivo a json(javascript) que son los datos de la ciudad dentro de la API del clima
      .then((recurso) => {
        const ciudad = {
          //esto viene copiado del readme en donde especifican que asi es como llega la informacion
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
        }; //como la informacion que llega desde la pagina es diferente a la que estaba establecida en Cards creo una constante para guardarla y que sea de aqui que mi funcion de onSearch, tome la informacion.
        //ahora necesito guardar la informacion que me trajo en un arreglo. el nombre de la variable puede ser cualquiera.
        setCities((oldCities) => [...oldCities, ciudad]); //toda la informacion de las ciudades quedara guardada dentro de la variable cities
      }); //lo siguiente es hacer que al momento de oprimir el botn de x se elimine los elementos de la pantalla para lo cual creo otra funcion
  }
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  } //como cada ciudad tiene un id, se toma como parametro y dentro de la funcion agarro lo que halla dentro del array de cities(que cambia por la funcion de setCities), que me devuelva un nuevo arreglo pero filtrando las ciudades, diciendo que debe dejar las ciudades cuyo id sea diferente al id que se recibe por parametro.
  //luego se pasa al Cards que es quien renderiza a Card para que la funcion actue dentro de este componente
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
      {/*ahora para que me muestre la informacion necesito asignarle la variable a Cards*/}
    </div>
  );
}

import React from "react";

const Ciudad = ({ city }) => {
  // aqui como me llegan muchas propiedades realizo un destructuring con solo el dato que necesito
  if (!city) {
    return <h3>No existe esta Ciudad</h3>;
  }
  return (
    <div className="ciudad">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
};

export default Ciudad;

import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  //en este ultimo punto nos daran como parametro una funcion y l que se necesita es que cada vez que se oprima el voton la funcion haga algo .
  //para que funcione de esta manera se hace con una arrow function que active la funcion solo cuando se clickea el boton
  return (
    <div>
      <input type="text" />
      <button onClick={() => props.onSearch("Agregando ciudad ...")}>
        {" "}
        Agregar{" "}
      </button>
    </div>
  );
}

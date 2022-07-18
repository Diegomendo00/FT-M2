import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState();

  const ciudades = (e) => {
    setCity(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity(""); //esto es para que la barra de busqueda quede en blanco al oprimir el boton de agregar
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={ciudades}
        value={city}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}

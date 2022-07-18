import React from "react";
import Card from "./Card.jsx";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  // de las propiedades que me estan pasando, para saber el archivo que estan enviado se revisa el archivo padre(app.js), a cities realizarle un map en el cual por cada ciudad (c) que reciba renderizar una
  //tarjeta card, primero hay que importar el archivo donde se encuentra la estructura de card y luego se agregan las propiedades que estan en el archivo padre (app.js)
  //ahora los datos los va a tomar de c que es cada ciduad que recorre el map dentro del array de cities
  //para evitar un error en la consola relacionada con key, esto es debido a que cuando se hace un map y se renderizan varias propiedas estas deben tener un identificador unico, en este caso vamos autilizar el id que tiene cada ciudad (data.js)
  //en caso de que no existiera cities, para uqe la pgina no se rompa se coloca un condicional

  if (!props.cities) {
    return <h3>No hay ciudades</h3>;
  }
  return (
    <div>
      {props.cities.map((c) => (
        <Card
          key={c.id}
          max={c.main.temp_max}
          min={c.main.temp_min}
          name={c.name}
          img={c.weather[0].icon}
          onClose={() => alert(c.name)}
        />
      ))}
    </div>
  );
}

import React from "react";

export default function Card(props) {
  // acá va tu código
  // si se hiciera con destructuring quedaria asi: function Card ({name, max, min, img, onClose}) ya que son las propiedades que vamos a recibir como parametro
  const ciudad = props.name;
  const maximo = props.max;
  const minimo = props.min;
  const imagen = `http://openweathermap.org/img/wn/${props.img}@2x.png`;
  const cerrar = props.onClose;

  //otra forma seria directamente llamar las propiedades que nos dan dentro del archivo de jsx
  return (
    <div>
      <button onClick={cerrar} className="boton">
        x
      </button>
      <div>Ciudad: {ciudad}</div>
      <div>Temp. max: {maximo}</div>
      <div>Temp. min: {minimo}</div>
      <img src={imagen} alt="Imagen not found" />
      {/* asi quedaria de la otra forma
		<div>
		<button onClick = {props.onClose} >X</button>
		<h3>{props.name}</h3>
				<div>
				<p>MIN</p>
				<p>{props.min}</p>
				</div>
				<div>
				<p>MAX</p>
				<p>{props.max}</p>
				</div>
				<img src={ `http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Imagen not found"/>
		</div> */}
    </div>
  );
}

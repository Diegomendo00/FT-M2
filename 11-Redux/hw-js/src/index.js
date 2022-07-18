import { createStore } from 'redux';
import contador from './reducer';
import { incremento, decremento, asincrono } from './actions';

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
const valor = document.querySelector("#valor")

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let actualStore = store.getState().contador
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerText = actualStore
}

// Ejecutamos la funcion 'renderContador':

renderContador()

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(renderContador)

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

let btnMas = document.getElementById("incremento")
btnMas.onClick =() => store.dispatch(incremento())


let btnMenos = document.querySelector("#decremento")
btnMenos.onClick = () => store.dispatch(decremento())

let btnAsync = document.querySelector("#incrementoAsync")
btnAsync.onClick =() => store.dispatch(asincrono())
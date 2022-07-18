const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = {
  contador: 0

}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
	if(action.type === INCREMENTO){
	
		return {
			
			contador: state.contador + 1
		}
	}
		if(action.type === DECREMENTO){
		return {
			contador: state.contador - 1
		}
	}
	if(action.type === ASINCRONO){
		return {
			setTimeout
		}
	}
  return state
}

module.exports = contador
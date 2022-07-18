//segun el documento del readme el orden de funcionamiento de los archivos va a ser:
//1. event-emitter.js
//2. whiteboard.js
//3. app.js

//tambien se puede obsrvar el archivo index.html que es la pgina con la cual vamos a trabajar

//primero quito la funcion para que no quede como una IIEF(funcion que se ejecutan tan pronto se como se define)
// (function () {

// window.EventEmitter = EventEmitter; esto significa que esta colocando una variable en el objeto global que puede ser utilizado en cualquier momento y en lugar de esto vamos al final de este codigo para colocar el module.exports que realiza la misma funcion y permitir que otros archivos puedan ejecutar esta funcion cuando la necesiten

// our EventEmitter constructor function
function EventEmitter() {
  this.subscribers = {};
}

// To be used like:
// instanceOfEE.on('touchdown', cheerFn);
EventEmitter.prototype.on = function (eventName, eventListener) {
  // If this instance's subscribers object does not yet
  // have the key matching the given event name, create the
  // key and assign the value of an empty array.
  if (!this.subscribers[eventName]) {
    this.subscribers[eventName] = [];
  }

  // Push the given listener function into the array
  // located on the instance's subscribers object.
  this.subscribers[eventName].push(eventListener);
};

// To be used like:
// instanceOfEE.emit('codec', 'Hey Snake, Otacon is calling!');
EventEmitter.prototype.emit = function (eventName) {
  // If there are no subscribers to this event name, why even?
  if (!this.subscribers[eventName]) {
    return;
  }

  // Grab the remaining arguments to our emit function.
  var remainingArgs = [].slice.call(arguments, 1);

  // For each subscriber, call it with our arguments.
  this.subscribers[eventName].forEach(function (listener) {
    listener.apply(null, remainingArgs);
  });
};

module.exports = EventEmitter;

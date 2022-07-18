//primero quitamos la funcion

// (function () {

// var whiteboard = window.whiteboard;//cambiamos por:
var whiteboard = require("./whiteboard.js");
// var socket = window.io(window.location.origin);//en lugar de utilizarlo desde el window (contexto global) lo traigo directamente y luego se debe invocar o ejecutar con el mismo parametro de la funcion (window.location.origin)
var io = require("socket.io-client"); // se escribe diferente ya que el archivo no es hecho por nosotros  entonces se coloca directamente el nombre
//ya trajimos la funcion del archivo ahora toca ejecutarla
var socket = io(window.location.origin);

socket.on("connect", function () {
  console.log("Connected!");
});

socket.on("load", function (strokes) {
  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    whiteboard.draw(start, end, color, false);
  });
});

socket.on("draw", function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on("draw", function (start, end, color) {
  socket.emit("draw", start, end, color);
});

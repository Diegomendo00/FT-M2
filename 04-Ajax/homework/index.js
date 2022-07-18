//primer punto
const btnAmigos = document.querySelector("#boton");
const ulAmigos = document.querySelector("#lista");
//primero colocamos los elementos que vamos a utilizar en variables.

//colocamos todo lo que se hizo en la funcion del boton de amigos en una funcion aparte para que pueda ser utiliza despues en otras funciones
function showFriends() {
  ulAmigos.innerHTML = ""; // cuando se apreta una vez el boton de amigos me mostrara una lista , si se vuelve a oprimir me mostrara dos listas, si son tres me mostrara tres listas y asi sucesivaente .Este paso se hace con el fin de que cada vez que se aprete el boton de amigos la informacion que tenga adentro de la lista quedara vacia, asi solo me mostrara una la lista cada vez que se oprime el boton.
  fetch("http://localhost:5000/amigos") // fetch es utilizado para traer la informacion de otras paginas al codigo que estoy realizando
    .then((res) => res.json()) //.then se utiliza cuando hay promesas, es decir, que despues de que traiga los archivos me generara una respuesta la cual paso al formato json para poder ser leida por javascript
    .then((amigos) => {
      //despues paso ese archivo a una variable la cual voy a recorrer para poder agregar la informacion contenida a mi pagina html
      for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerText = amigos[i].name; // creo un elemento de lista en mi pagina html(createElement) a la cual voy a agregarle solo la informacion que necesito(innerText) para despues anexarla al lugar donde requiero
        ulAmigos.append(li);
      }
    });
}

btnAmigos.addEventListener("click", showFriends); // al momento de hacer click en el boton de amigos activara la funcion de showFriends

//segundo punto
//traigo las variables que necesito modificar
const inputAmigo = document.querySelector("#input"); // input son las barras en las cuales coloque el valor o palabra a buscar
const btnSearch = document.querySelector("#search"); // aqui estoy seleccionando el boton de buscar en la pagina
const spanAmigo = document.querySelector("#amigo"); //aqui selecciono lo que me va a mostrar la pagina al momento de utilizar en el boton de search
btnSearch.addEventListener("click", function () {
  let idAmigo = inputAmigo.value; // voy a coger el valor que le coloco o escribo en el input y colocarlo en una variable para despues utilizarla en la busqueda
  inputAmigo.value = ""; //esto se hace con el proposito de que al momento de realizar la busqueda el input quede vacio nuevamente
  fetch(`http://localhost:5000/amigos/${idAmigo}`) //utiliza template strings(comillas alreves alt+96) para que al momento de buscar agregue el valor que estoy pasando por parametro en el input
    .then((res) => res.json())
    .then((amigo) => {
      spanAmigo.innerText = amigo.name;
    }); // finalmente agrego la informacion encontrada con innerText al span pero solo agrego el nombre que es lo que necesito(amigo.name)
});

//Tercer Punto
//traigo las variable que voy a modificar
const inputDelete = document.querySelector("#inputDelete");
const btnDelete = document.querySelector("#delete");
const spanDelete = document.querySelector("#success");

btnDelete.addEventListener("click", function () {
  let idAmigo = inputDelete.value;
  inputDelete.value = "";
  fetch(`http://localhost:5000/amigos/${idAmigo}`, {
    //cuando solo se neceita traer informacion ("GET") al fetch no se le pasan mas parametros, pero si queremos hacer otro proceso como agregar ("POST") o eliminar ("DELETE") se añade method junto con la accion a realizar entre comillas y en mayuscula
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      spanDelete.innerText = "Amigo borrado exitosamente";
      showFriends(); //invocamos la funcion para que al momento de eliminar un nombre de la lista esta se active y se actualice automaticamente
    });
});

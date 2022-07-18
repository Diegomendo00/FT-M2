var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl); //se utiliza la funcion matchFunc para verificar que dentro del arbol del DOM se encuentre el parametro pasado en startEl. Si se encuentra que lo coloque dentro del array creado al principio del codigo.

  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let elementsFound = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...elementsFound]; // se utiliza el spread operator para concatenar lo que habia en resultSet con elementsFound
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
//hay que hacer que la funcion segun el string que pase como parametro me defina si es alguno de los tipos que se mencionan antes.
//recrear un queryselector en una funcion

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") return "id"; //
  if (selector[0] === ".") return "class";
  if (selector.includes(".")) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (element) => `#${element.id}` === selector; // (el) es el elemento tomado del html para comparar el cual tiene diferentes propiedades como un objeto o un array
    //la funcion .id me devuelve la id sin en el hastag por lo cual para poderlo comparar con el posible id que se pase por parametro, le tengo que agregar un hastag
    // esto `#${el.id}` es igual a escribir "#" + el.id
    //como seria sin la arrow function:
    /*matchFunction = function (el) {
       if ("#" + el.id === selector) {
         return true;
       }
       return false;
     };*/
  } else if (selectorType === "class") {
    matchFunction = (element) =>
      element.classList.contains(selector.substring(1)); //classlist me devuelve una lista con todas las clases dentro del html, segundo, se utiliza contains para saber si dentro de esa lista esta la clase que yo le pase por parametro y tercero, se usa el substring el cual me quita el punto inicial al escribir una clase para poderla comparar con la lista de clases
  } else if (selectorType === "tag.class") {
    matchFunction = (element) => {
      let [tag, className] = selector.split("."); //se utiliza el destructuring para coger el parametro, quitarle el punto con la funcion split y luego colocarlos en una array separados.
      return (
        element.classList.contains(className) &&
        element.tagName.toLowerCase() === tag.toLowerCase()
      ); // finalmente se verifica que la className este dentro de la lista de clase y que el tag tambien se encuentre dentro del html
    };
  } else if (selectorType === "tag") {
    matchFunction = (element) =>
      element.tagName.toLowerCase() === selector.toLowerCase(); //al verificar la propiedad tagName de un elemento en html, devolvera el tag en formato string pero en mayuscula y el test no lo reconocera de esta manera, para lo cual utilizamos la funcion toLowerCase para colocar todas las letras del string en minuscula
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

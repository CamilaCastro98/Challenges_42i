//Función que toma un array de valores enteros positivos (coins) y calcula cuál es el
//menor entero que no se puede obtener de la combinación de los elementos del array.
//Cuando el array está vacío, se retorna 1.

const findNonConstructibleChange = (coins) => {
  //Ordenar el arreglo de forma ascendente, de esta forma es más fácil
  //ir evaluando los enteros que pueden o no formarse.
  const orderedCoins = coins.sort((a, b) => a - b);

  //Definir e inicializar la variable "change" en 1, ya que es el mínimo entero
  //posible que puede evaluarse.
  let change = 1;

  //Crear un bucle que recorra todos los elementos del array ordenado.
  for (let i = 0; i < orderedCoins.length; i++) {
    //Evaluar si el elemento actual en el bucle es más grande que el valor acumulado de "change".
    if (orderedCoins[i] > change) {
      //Si la condición se cumple, quiere decir que no es posible llegar al valor de "change" con
      //Los elementos existentes. Retornar "change".
      return change;
    }
    //Si la condición no se cumple, quiere decir que el valor de "change" sí puede alcanzarse con
    //alguna combinación de los elementos ya evaluados.
    //Sumar el elemento actualmente evaluado a "change" para continuar evaluando valores enteros mayores.
    change += orderedCoins[i];
  }
  // Si el bucle se completa sin encontrar un valor de "change" que no pueda ser construido,
  // retornar el valor de "change", que será el siguiente entero no construible.
  return change;
};

module.exports = findNonConstructibleChange;

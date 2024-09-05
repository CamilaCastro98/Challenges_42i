//Función que toma un array de números (numbers) y un valor numérico (targetSum) y confirma si existe
//un par de elementos en el array que sumen el valor introducido, devolviendo
//el par o un array vacío dependiendo del caso.

const findPairWithSum = (numbers, targetSum) => {
  //Crear una variable que vaya acumulando los valores del array leídos por el posterior bucle.
  const pastNumbers = new Set();

  for (let i = 0; i < numbers.length; i++) {
    //Evaluar si existe un elemento previamente leído por el bucle que, sumado al elemento actualmente evaluado,
    //sea igual a "targetSum".
    if (pastNumbers.has(targetSum - numbers[i])) {
      //Si existe el elemento, se retorna el par.
      return [targetSum - numbers[i], numbers[i]];
    }

    //Si no se cumple la condición, el elemento actualmente evaluado se añade a la lista de elementos ya leídos,
    //Para poder compararlo con el resto de los elementos que quedan por evaluar.
    pastNumbers.add(numbers[i]);
  }

  //Si el bucle se completa y el código prosigue, significa que el par no se encontró.
  //Retornar el array vacío.
  return [];
};

module.exports = findPairWithSum;

//Opté por usar un Set en lugar de un bucle anidado debido a que la complejidad de tiempo del algoritmo
//es mayor con esta última opción para grandes inputs, por lo que el uso de Set es más eficiente.

//  Funciones

//Completa la función que tomando dos números como argumento devuelva el más alto.


function sum (number1, number2) {
    if (number1 > number2)
    { return number1; } else {return number2;}
    
  }
  console. log (sum (3, 2))
  
  
  /**Iteración #2: Buscar la palabra más larga
  *Completa la función que tomando un array de strings como argumento devuelva el más largo,
  en caso de que dos strings tenga la misma longitud deberá devolver el primero.
  Puedes usar este array para probar tu función:
  */

  const avengers2= ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
  function findLongestWord(arrayAvengers) {
    let avenger="";
    for (i=0; i<arrayAvengers.length; i++){
      if ( avenger.length<arrayAvengers[i].length){
  avenger = arrayAvengers[i]
      }
      
    }
    return avenger;
  } 
  let resultadoFuncion = findLongestWord (avengers2)
  console. log (resultadoFuncion)
  
  
  
  
  /**
   * Iteración #3: Calcular la suma**
  
  Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
  Implemente la función denominada sumNumbers que toma un array de números como argumento
  y devuelve la suma de todos los números de la matriz.
   */
  
   const numbers = [1, 2, 3, 5, 45, 37, 58];
  
   function sumNumbers(arrayNumbers) {
    let suma = 0;
    for (let i = 0; i < arrayNumbers.length; i++) {
      suma += arrayNumbers[i];
    }
    return suma;
  }
   const resultado = sumNumbers(numbers);

   console.log(resultado);


  /**
   * Iteración #4: Calcular el promedio
Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
   */

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(arrayPromedio) {
    let suma = 0;
    for (let i = 0; i < arrayPromedio.length; i++) {
      suma += arrayPromedio[i];
    }
    let promedio = suma / arrayPromedio.length;
return promedio;
}

const promedio2 = average(numbers2);
console.log(promedio2);
  



/**
 * Iteración #5: Calcular promedio de strings
Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de 
lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
  function averageWord(mixedElements) {
    let suma = 0;
  
    for (let i = 0; i < mixedElements.length; i++) {
      if (typeof mixedElements[i] === 'number') {
        suma += mixedElements[i];
      } else if (typeof mixedElements[i] === 'string') {
        suma += mixedElements[i].length;
      }
    }
  
    return suma;
  }
  const resultado2 = averageWord(mixedElements);
  console.log(resultado);




/**
 * Iteración #6: Valores únicos
Crea una función que reciba por parámetro un array y compruebe si existen
elementos duplicados, en caso que existan los elimina para retornar un array 
in los elementos duplicados. Puedes usar este array para probar tu función:
 */

function removeDuplicates(array) {
  return array.filter((value, index, self) => self.indexOf(value) === index);
}

const duplicatesElements = [
  'sushi',
  'pizza',
  'burger',
  'potato',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

const uniqueElements = removeDuplicates(duplicatesElements);
console.log(uniqueElements);



/**
 * **Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea
comprobar que existe dentro de dicho array - comprueba si existe el elemento,
en caso que existan nos devuelve un true y la posición de dicho elemento y por 
la contra un false. Puedes usar este array para probar tu función:
 */

function finderName(array, value) {
  const index = array.indexOf(value);
  if (index !== -1) {
    return { exists: true, position: index };
  } else {
    return { exists: false };
  }
}

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

const nameToFind = 'Tony';
const result = finderName(nameFinder, nameToFind);
console.log(result);

/**
 * **Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite
cada una de las palabras que lo conforma.  Puedes usar este array
para probar tu función:
 */

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(array) {
  const wordCount = {};

  array.forEach(word => {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  return wordCount;
}

const repetitions = repeatCounter(counterWords);
console.log(repetitions);
//  Funciones

//Completa la función que tomando dos números como argumento devuelva el más alto.


function sum (number1, number2) {
    if (number1 > number2)
    { return number1; } else {return number2;}
    
  }
  console. log (sum (3, 2))
  
  
  //Iteración #2: Buscar la palabra más larga
  //Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
  //Puedes usar este array para probar tu función:
  
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
  
  
  
  
  
  // **Iteración #3: Calcular la suma**
  
  //Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
  //Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
  
  const numbers = [1, 2, 3, 5, 45, 37, 58];
  
  function sumAll(param) {
    // insert code
  }
/**export const checkCoincidences = (letra, palabra) => {
    console.log("palabra en la funcion buscar", palabra);
    const arrayIndices = [];
  
    for (let i = 0; i < palabra.length; i++) {
      palabra[i] === letra && arrayIndices.push(i);
    }
    return arrayIndices;
  };
  
  export const obtener_random = (num_min, num_max) => {
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.random() * amplitud_valores) + num_min;
    return valor_al_azar;
  };
  
  export const createSpanInParrafo = (palabra) => {
    for (let i = 0; i < palabra.length; i++) {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.classList.add("letra");
      const parrafo = document.querySelector("#palabraAhorcado");
      parrafo.appendChild(span);
    }
  };*/


/**definir una variable const con el nombre replaceAt que tiene como valor una funcion arrow
 * esta función toma un string, character y un index,  y devuelve una nueva cadena de texto
 * donde el carácter en la posición especificada por el índice se reemplaza por el carácter
 * proporcionado.
 */
 const replaceAt = (string, character, index) => {
    
  return string.substring(0, index) + character + string.substring(index + character.length);
}
/**
* Variable const con nombre words que define un array.
* La función Math.floor se utiliza para asegurar que el índice generado aleatoriamente sea un número entero.
* Variable const con nombre secretWord que declara la función Math.random para seleccionar un elemento
* del array aleatoriamente.
*/
 const words=["cometieron", "tres", "errores", "sergio", "leone", "clint", "eastwood"];
const secretWord = words[Math.floor(Math.random() * words.length)];
let hiddenWord = secretWord.replace(/./g, "_ ");
//document.getElementById("volverAJugar").style.display = "none"
//document.getElementById("hiddenWord").innerHTML = hiddenWord;

let errorCounter = 0;
let error = false; // Mover la declaración de error aquí


export const evaluateWord = () => {
  document.getElementById("volverAJugar").style.display = "none"
  const letter = document.getElementById("input").value;
  document.getElementById("input").value ="";
  error = true; // Actualizar error a true al inicio de cada evaluación
  // Bucle for para recorrer la longitud de secretWord. Condición if.
  for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === letter) {
          hiddenWord = replaceAt(hiddenWord, letter, i*2);
          error = false;
      }
  }
  /**
   * if (!hiddenWord.includes("_")) { ... }: Esta es una estructura condicional if que verifica
   * si la variable hiddenWord no contiene ningún guion bajo ("_"). La función includes() verifica
   * si una cadena de texto incluye otra cadena de texto dentro de ella. Si hiddenWord no contiene
   * ningún guion bajo, significa que todas las letras de la palabra han sido adivinadas correctamente,
   * por lo que se ejecuta el bloque de código dentro de las llaves { ... }.
   */
  document.getElementById("hiddenWord").innerHTML = hiddenWord;
   {
    if (!hiddenWord.includes("_"))
    document.getElementById("volverAJugar").innerHTML = "¡Has ganado! ;) vuelve a jugar";
      document.getElementById("volverAJugar").style.display = "block"
   document.getElementById("volverAJugar").addEventListener("click", function(){
              location.reload();
      })
  }
  
  if (error) {
      errorCounter++;
      /**Primero accede al selector id y después a la propiedad del estilo dentro del documento CSS */
      document.getElementById("ahorcado").style.backgroundPosition = -errorCounter * 280 + "px";
      if (errorCounter === 5) {
          document.getElementById("retryButton").innerHTML = "Has perdido :( vuelve a jugar";
          document.getElementById("retryButton").addEventListener("click", function() {
              location.reload(); // Esto recarga la página, reiniciando todo el juego
          });
          
      }
  }
}
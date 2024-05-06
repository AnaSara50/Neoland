import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const arr = ["Hola", " ", "qué",  " ",  "tal?"];

  const [count, setCount] = useState(0); // variable, función = y defino el valor inicial, y uso la variable donde quiera
  const [texto, setTexto] = useState("");
  const [texto2, setTexto2] = useState(false);

  const actualizarEstado = () => {
    setCount((value) => {
      //aquí le digo cómo funciona el contador. Utilizo un ternario como condición.
      value = value == 20 ? -1 : value;
      return value + 1;
    });

    setTexto(() => {
      //aquí le digo como actualizar el texto, en función del contador
      if (count >= 6 && count < 12) {
        return "Buenos días";
      } else if (count >= 12 && count < 20) {
        return "Buenas tardes";
      } else {
        return "Buenas noches";
      }
    });
  };
// esta es la parte de html (puede incluir métodos y funciones) donde se pinta la página
  return (
    <>
       <div>
          <img src="https://res.cloudinary.com/dlefk3lwg/image/upload/v1713708092/userProyect04FT/kgefzgyuzutycwfntu2v.jpg" />
          </div>
      <h2>{texto}</h2>
      <div>
        {arr.map((item, index) => (//arr.map es un método para recorrer los elementos de un array. Index es la posición en el array, item el valor del elemento.
          <span key={index}>{item}</span>
        ))}
      </div>
      <div>
        <p>{texto2}</p>
        <button onClick={() => setTexto2(() => "A ti que te parece")}className='boton2'>Pregunta</button> 
      </div>
      <div className="card">
        <button onClick={() => actualizarEstado()} className='boton'>count is {count}</button>
      </div>
    </>
  );
}

export default App;
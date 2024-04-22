
import { evaluateWord } from "../../utils/juegoahorcado";
import "./juego.css";


const templateAhorcado = ()=> `   

<body>
<div id="cuerpo">
<div id="container>
<div id="info">
        
    <h1 id="titulo">El juego del ahorcado</h1>
    <p id="hiddenWord"></p><br>
    <p id="texto">Introduce una letra</p>
    <input id="input" type="text"><br>
    <button id="button">Comprobar</button> 
    <button id="retryButton"></button>
            <div id="ahorcado">
        </div> 
          <button id="volverAJugar">Volver a jugar</button> 
        </div>
        </div>
</div>
</body>`


const listeners = ()=>{ 
const boton = document.getElementById("button")
boton.addEventListener("click", evaluateWord)
}

const listener = ()=>{ 
    const boton = document.getElementById("volverAJugar")
    boton.addEventListener("click")
    }

    const listene = ()=>{ 
        const boton = document.getElementById("retryButton")
        boton.addEventListener("click")
        }


export const PrintAhorcado =()=>{
    document.querySelector("main").innerHTML= templateAhorcado();
    listeners();
}
const templateAhorcado = ()=> `   <div class="container">
<div id="info">
    <h1 id="titulo">El juego del ahorcado</h1>
    <p id="hiddenWord"></p><br>
    <p id="texto">Introduce una letra</p>
    <input id="input" type="text"><br>
    <button id="button">Comprobar</button> 
    <button id="retryButton"></button>
<div id="ahorcado">
 </div> 
 </div>   
</div>

<button id="volverAJugar">Volver a jugar</button>`;

export const PrintAhorcado =()=>{
    document.querySelector("main").innerHTML= templateAhorcado();
}
//SpinnerButton.js-----> src/components/spinner/SpinnerButton.js

/* Se importa la hoja de estilos del documento SpinnerButton.css
Hay una función arrow que devuelve una plantilla de texto HTML
*/

import "./SpinnerButton.css";
const template = () =>
  `<div class="containerSpinnerButton">
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
    <h2>Cargando filtros</h2>
  </div>`;

export const PrintSpinner = () => {
  document.getElementById("spinnerButtonFilter").innerHTML = template();
};
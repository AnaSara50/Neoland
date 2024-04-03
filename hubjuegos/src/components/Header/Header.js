
// --- Header.js --------> src/components/Header

import { getUser } from "../../global/state/globalState";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header.css";


/**
 * Este archivo hace referencia a la etiqueta <header> de html.
 * Importamos el archivo que da estilos (CSS) al Header.
 * Importamos las funciones getUser - changeColor RGB y initControler
 */


//!-------------------------------------------------------------------
//? ------------------1) TEMPLATE ------------------------------------
//!-------------------------------------------------------------------

/**
 * Declaramos la variable const con nombre "template" y valor "Funcion arrow =>"
 * Dentro de la etiqueta <img> incluimos una imagen con un selector clase.
 * Creamos una etiqueta <nav> donde incluimos tres etiquetas <img> con sus respectivas imagenes.
 * La etiqueta <nav> se utiliza para agrupar enlaces de navegación.
 */

const template = () => `
  <img
    src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679162/header_giqdug.jpg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682679055/logout_arz0gw.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
`;
//!-----------------------------------------------------------------------------------
//? ----------------------- 2 ) Añadir los eventos con sus escuchadores---------------
//!-----------------------------------------------------------------------------------
const addListeners = () => {};
//!-----------------------------------------------------------------------------------
//? ------------------------------ 3) La funcion que se exporta y que pinta-----------
//!-----------------------------------------------------------------------------------

/**
 * Exportamos la función => para renderizar la plantilla del Header.
 * Metodo document.querySelector selector "header" 
 * Con innerHTML inyectamos la función template.
 * La última linea llama a la función y añade eventos como botones o enlaces.
 * 
 */

export const PrintTemplateHeader = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
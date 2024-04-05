//axios.js -----> src/utils/axios.js

/**
 * Después de instalar axios (biblioteca para hacer solicitudes http desde el navegador), 
 * importamos el archivo.
 * Exportamos una variable llamada axiosUtil con valor función => (asincronía).
 * Await, palabra clave. Para esperar que una promesa se resuelva.
 * axios.request () es un metodo que envia una solicitud http
 * options () es un objeto.
 * Then... es una función.
 */

import axios from "axios";

export const axiosUtil = async (options) => {
  return await axios.request(options).then((res) => res.data);
};
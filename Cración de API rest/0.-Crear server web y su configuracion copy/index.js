const express = require ("express");
const dotenv = require ("dontenv");
const cors = require("cors");

dotenv.config ();

/*Creación de servidor web*/
const app = express ();


/*Traer variable de entorno del puerto*/
const PORT = process.env.PORT;
console. log (PORT);

// Instalación de la librería Cors --> CONFIGURAR EL QUE SE PUEDE HACER EN EL BACK ASI COMO EL ACCESO
app.use(cors());

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));


/*instanciamos (new) Error 404 not found. Con los parametros request, response y next. Los dos primeros
son objetos que representan la solicitud  y respuesta HTTP. Next es una función. */
app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

// error que se ha producido en este caso 500 req es el objeto de solicitud y res el objeto de respuesta.
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});


// esto de aqui  nos revela con que tecnologia esta hecho nuestro back
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);

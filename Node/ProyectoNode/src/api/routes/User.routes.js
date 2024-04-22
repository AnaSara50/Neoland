const express = require("express");
const UserRoutes = express.Router();

/*los archivos routes importan la funciones del archivo controller*/
const {
  registerLargo,
  registerUtil,
  registerWithRedirect,
  sendMailRedirect,
  resendCode,
  checkNewUser,
  login,
  autoLogin,
  changePassword,
  sendPassword,
  modifyPassword,
  update,deleteUser,
  getAll,
  byId,
  byName,
  byGender,
} = require("../controllers/User.controllers");

/*Aquí la función upload requiere los archivos de middleware que son los token.
El middleware es lo que esta entre el usuario y la ruta (end point)*/

const { upload } = require("../../middleware/files.middleware");
const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");

//!------------------------------------------------------------------------
//?--------------------------------RUTAS SIN REDIRECT----------------------
//!------------------------------------------------------------------------
/* el metodo post es para crear*/
UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post("/registerUtil", upload.single("image"), registerUtil);
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/login", login);
UserRoutes.post("/login/autologin", autoLogin);
/*el método patch es para actualizar en este caso una contraseña*/ 
UserRoutes.patch("/forgotpassword", changePassword);
/*[isAuth] es un middleware para compara en este caso las contraseñas*/
UserRoutes.patch("/changepassword", [isAuth], modifyPassword);
UserRoutes.patch("/update/update", [isAuth], upload.single("image"), update);
/*método delete para borrar usuario. */
UserRoutes.delete("/", [isAuth], deleteUser);
/*el método get es para obtenoer identificadores del usuario. getAll byId por identificador Id o
 por los diferentes parametros del body*/
UserRoutes.get("/", getAll);
UserRoutes.get("/finById/:id", byId);
UserRoutes.get("/finByName/:name", byName);
UserRoutes.get("/finByGender/:gender/:name", byGender);

//!------------------------------------------------------------------------
//?--------------------------------RUTAS CON REDIRECT----------------------
//!------------------------------------------------------------------------
/*para que una función cumpla un solo cometido*/ 
UserRoutes.post("/register", upload.single("image"), registerWithRedirect);

//!---------------- REDIRECT-------------------------------
/*:id para meter los parametros*/ 
UserRoutes.post("/register/sendMail/:id", sendMailRedirect);
UserRoutes.patch("/sendPassword/:id", sendPassword);
module.exports = UserRoutes;

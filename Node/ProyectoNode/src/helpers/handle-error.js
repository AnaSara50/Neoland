
/* setError envia,setea un error*/ 
const setError = (code, message) => {
    const error = new Error();
  
    error.code = code;
    error.message = message;
    return error;
  };
  module.exports = setError;
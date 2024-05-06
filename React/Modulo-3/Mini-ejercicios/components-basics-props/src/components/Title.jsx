import React from 'react';
import "./Title.css"

// constante Title con el prosp(propidad) text que crea una función que retorna un texto h1 
const Title = ({ text }) => {
  return <h1>{text}</h1>;
};
// aquí la función retorna el props texto con el valor "vaya fin de semana"
const App = () => {
  return (
    <div>
      <Title text="Vaya fin de semana" />
    </div>
  );
};

export default App;

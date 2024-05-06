import React from 'react';
import "./SubTitle.css"

//Creamos una variable const con el nombre SubTitle y una propiedad text que retorna un h2
const SubTitle = ({ text }) => {
  return <h2>{text}</h2>;
};

const App = () => { //la función retorna el props con el valor se ha quedado, tan bonito
  return (
    <div>
      <SubTitle text="se ha quedado, tan bonito" />
    </div>
  );
};

export default App;
import React from 'react';
import "./SubTitle.css"


const SubTitle = ({ text }) => {
  return <h2>{text}</h2>;
};

const App = () => {
  return (
    <div>
      <SubTitle text="podría salir el sol" />
    </div>
  );
};

export default App;
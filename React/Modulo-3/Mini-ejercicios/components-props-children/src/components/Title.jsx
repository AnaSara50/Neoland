import React from 'react';
import "./Title.css"


const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

const App = () => {
  return (
    <div>
      <Title text="Que frío hace" />
    </div>
  );
};

export default App;
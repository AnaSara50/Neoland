import React from 'react';
import "./Paragraph.css"


const SubTitle = ({ text }) => {
  return <p>{text}</p>;
};

const App = () => {
  return (
    <div>
      <Paragraph text="para ir a la playa" />
    </div>
  );
};

export default App;
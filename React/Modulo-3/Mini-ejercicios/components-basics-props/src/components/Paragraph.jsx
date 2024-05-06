import React from 'react';
import "./Paragraph.css"


const SubTitle = ({ text }) => {
  return <p>{text}</p>;
};

const App = () => {
  return (
    <div>
      <Paragraph text="Para estudiar" />
    </div>
  );
};

export default App;
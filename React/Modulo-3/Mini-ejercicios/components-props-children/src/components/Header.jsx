import React from 'react';
import Title from './Title'; 

const Header = ({ children }) => {
  return (
    <header>
      {children}
    </header>
  );
};

const App = () => {
  return (
    <div>
      <Header>
        <Title text="Que frío hace" />
      </Header>
    </div>
  );
};

export default App;



/**
 * Crea un componente que reciba como children el componente Title y retorne un <header> + Children.
 */
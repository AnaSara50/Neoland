import React from 'react';
import Main from './Main'; 

const Main = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

const App = () => {
  return (
    <div>
      <Main>
        <Title text="Que frío hace" />
      </Main>
    </div>
  );
};

export default App;



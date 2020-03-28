import React from 'react';

import Header from './Header';

function App() {
  let counter = 0;

  function increment() {
    counter += 1;

    console.log(counter); // Variavel é alterada, mas não refletida, por causa do conceito de Estado
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;

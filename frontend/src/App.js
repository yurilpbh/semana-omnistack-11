import React, { useState} from 'react';

//JSX (JavaScript XML (Sintaxe do HTML)) - Quando o HTML está integrado dentro do JS

import './global.css';

import Routes from './routes'

function App() {
  /* //Um estado armazena informação sobre um componente e não pode ser mutado diretamente
  //useState retorna um Array [valor, funcaoDeAtualizacao]
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }
 */
  return (
    <Routes />
    /* <div>
      //<Header title="Semana OmniStack"/> //Utiliza-se com props.title no Header
      /*<Header> 
        Semana OmniStack 
      </Header> //Utiliza-se com props.children no Header
      
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div> */
    );
}

export default App;

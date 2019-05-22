import React from 'react'
import Tweet from './tweet'
//import Hello from './sayHello' Importa o codigo
// Tudo que foi escrito em sayHello() está nesse <hello/> tag
function App(){
  
  return(
    <div className="app">
      <h1>Hello World</h1>
      <Tweet/>
    </div>
  );
}

export default App;

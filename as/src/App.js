import React, {useState} from 'react'
import Tweet from './tweet'
//import Hello from './sayHello' Importa o codigo
// Tudo que foi escrito em sayHello() está nesse <hello/> tag
function App(){

  // const [isPurple, setPurple] = useState(false)
  // const [count, setCount] = useState(0)

  // const increment = () => {
  //   setCount(count + 1)
  //   setPurple(!isPurple)
  // }

  // Api example
  const [users, setUsers] = useState ([
    {name: 'Bruno', message: 'Hello World!'},
    {name: 'John', message: 'React is awesome!'},
    {name: 'Louis', message: 'Hello there'}
  ])

  return(
    <div className="app">
      {/* <Tweet name="test Name" message = "message1"/>
      <Tweet name="test Name2" message = "message2"/>
      <Tweet name="test Name3" message = "message3"/>
      <Tweet name="test Name4" message = "message4"/> */}
      {/* <h1 className={isPurple ? 'purple' : ''}>Mudar cor</h1>
      <button onClick = {increment}>Contar</button>
      <h1>{count}</h1> */}

      {users.map(user => (
        <Tweet name={user.name} message = {user.message}/>
      ))}
    </div>
  );
}

export default App;

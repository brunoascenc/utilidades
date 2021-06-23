import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const nameInput = useRef(null);
  const passInput = useRef(null);

  const handleClick = () => {
    fetch('https://segware-book-api.segware.io/api/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        name: `${username}`,
        path: `${password}`,
      }),
      // headers: {
      //   'access-control-allow-origin': '*',
      //   'content-length': '196',
      //   'content-type': 'application/json; charset=utf-8',
      //   date: 'Wed, 23 Jun 2021 16:26:06 GMT',
      //   etag: 'W/"c4-+7bF0rXZgmfDxS9Pkw8KvYyn4Vg"',
      //   'x-powered-by': 'Express',
      // },
    })
      .then((res) => res.json())
      .then((res) => {
        setUsername(nameInput.current.value);
        setPassword(passInput.current.value);
        console.log(res);
      });
  };

  // useEffect(() => {
  //   axios
  //     .post(`https://segware-book-api.segware.io/api/sign-in`, {
  //       username: username,
  //       password: password,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="App">
      <input ref={nameInput} type="text" placeholder="name" />
      <input ref={passInput} type="text" placeholder="password" />
      <button onClick={handleClick}>asas</button>
    </div>
  );
}

export default App;

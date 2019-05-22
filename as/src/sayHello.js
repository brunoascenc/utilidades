import React from 'react'; //Posso fazer o codigo separadamente

function Hello() {
  const testButton = () => {
    console.log('s');
  };

  return (
    <div>
      <button onClick={testButton}>Click</button>
    </div>
  );
}

export default Hello;

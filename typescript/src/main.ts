const someElement = document.querySelector('.foo');

someElement.addEventListener('blur', (event) => {
  const target = event.target as HTMLInputElement; //as is the key
  console.log('event', target.value);
});

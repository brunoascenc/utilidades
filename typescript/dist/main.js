var someElement = document.querySelector('.foo');
someElement.addEventListener('blur', function (event) {
    var target = event.target; //as is the key
    console.log('event', target.value);
});

let loader
function loadNow(opacity){
  if(opacity <= 0){
    displayContent()
  }
  else{
    loader.style.opacity = opacity;
    window.setTimeout(function () {
      loadNow(opacity - 0.05)
    }, 100)
  }
}

function displayContent(){
  loader.style.display = 'none'
  document.getElementsById('content').style.display = 'block'
}

document.addEventListener('DOMContentLoaded', () => {
  loader = document.getElementById('loader')
  loadNow(1)
})

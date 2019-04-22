
const dezTip = () => {
    const valorTip = document.getElementById('valor').value
    let resultado = valorTip * 0.10
    document.getElementById('msg').innerHTML = `Tip 10%: ${resultado}`
}

const vinteTip = () => {
    const valorTip = document.getElementById('valor').value
    let resultado = valorTip * 0.20
    document.getElementById('msg').innerHTML = `Tip 20%: ${resultado}`
}


const trintaTip = () => {
    const valorTip = document.getElementById('valor').value
    let resultado = valorTip * 0.30
    document.getElementById('msg').innerHTML = `Tip 30%: ${resultado}`
}


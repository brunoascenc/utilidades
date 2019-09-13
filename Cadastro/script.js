function validarForm(){
    const nomeGrupo = document.getElementById('inputGrupo').value;
    const raInt1 = document.getElementById('ra1').value;
    const raInt2 = document.getElementById('ra2').value;

    if(!nomeGrupo){
        document.getElementById('mensagem').innerHTML = "* Insira o nome do grupo"
        return false
    } 
    else if(!raInt1 && !raInt2 || !raInt1 || !raInt2){
        document.getElementById('mensagem').innerHTML = "* No mínimo 2 integrantes"
        return false
    }

    else {
        alert('Cadastrados')
        return true
    }
}
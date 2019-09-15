function validarForm() {
    const nomeGrupo = document.getElementById('inputGrupo').value;
    const raInt1 = document.getElementById('ra1').value;
    const raInt2 = document.getElementById('ra2').value;
    const raInt3 = document.getElementById('ra3').value;
    const raInt4 = document.getElementById('ra4').value;
    const emailGrupo = document.getElementById('emailInput').value;
  
    if (!nomeGrupo) {
      document.getElementById('mensagem').innerHTML = '* Insira o nome do grupo';
      return false;
  
    } else if (!emailGrupo) {
      document.getElementById('mensagem').innerHTML = '* Insira o email do grupo';
      return false;
  
    } else if (!raInt1 || !raInt2) {
      document.getElementById('mensagem').innerHTML = '* No mínimo 2 integrantes';
      return false;
  
    } else if (isNaN(raInt1) || isNaN(raInt2) || isNaN(raInt3) || isNaN(raInt4)) {
      document.getElementById('mensagem').innerHTML = '* Informe um RA válido';
      return false;
  
    } else if (
      raInt1 === raInt2 ||
      raInt1 === raInt4 ||
      raInt1 === raInt3 ||
      raInt2 === raInt3 ||
      raInt2 === raInt4
    ) {
      document.getElementById('mensagem').innerHTML = '* Os campos não podem ser iguais';
      return false;
  
    } else {
      alert('Inscrição feita com sucesso, enviamos um email de confirmação. Código da equipe: 45554');
      return true;
    }
  }
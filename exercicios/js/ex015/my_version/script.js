function verificarPessoa() {
  var anoNascimento = document.querySelector('#ano_nascimento');
  anoNascimento = Number(anoNascimento.value);

  var sexo = document.querySelector('input[name="sexo"]:checked');
  var resultado = document.querySelector('#resultado');

  var genero =  verificarGenero(sexo.id);
  var idade = verificarIdade(anoNascimento);

  if (idade < 0 || anoNascimento < 0) {
    alert('[ERROR]: Digite uma data válida!');
    return;
  }

  if (idade === 1) {
    resultado.innerHTML = `Detectamos: ${genero} com ${idade} ano`;
  } else {
    resultado.innerHTML = `Detectamos: ${genero} com ${idade} anos`;
  }

  var img = document.querySelector('img');
  img.style.height = '300px';
  img.style.width = '300px'

  if (idade < 3) {

    switch (genero) {
      case "Mulher":
        img.src = "/exercicios/js/ex015/imgs/feminino/bebe.png";
        break;
      case "Homem":
        img.src = "/exercicios/js/ex015/imgs/masculino/bebe.png";
        break;
    }

  } else if (idade < 13) {

    switch (genero) {
      case "Mulher":
        img.src = "/exercicios/js/ex015/imgs/feminino/crianca.png";
        break;
      case "Homem":
        img.src = "/exercicios/js/ex015/imgs/masculino/crianca.png";
        break;
    }
  } else if (idade < 18) {
    switch (genero) {
      case "Mulher":
        img.src = "/exercicios/js/ex015/imgs/feminino/adolescente.png";
        break;
      case "Homem":
        img.src = "/exercicios/js/ex015/imgs/masculino/adolescente.png";
        break;
    } 
  } else if (idade < 60){
    switch (genero) {
      case "Mulher":
        img.src = "/exercicios/js/ex015/imgs/feminino/adulta.png";
        break;
      case "Homem":
        img.src = "/exercicios/js/ex015/imgs/masculino/adulto.png";
        break;
    }
  } else {
    switch (genero) {
      case "Mulher":
        img.src = "/exercicios/js/ex015/imgs/feminino/idosa.png";
        break;
      case "Homem":
        img.src = "/exercicios/js/ex015/imgs/masculino/idoso.png";
        break;
    }
  }
}

function verificarGenero(sexo) {
  if (sexo === 'masculino') {
    return "Homem";
  } else {
    return "Mulher";
  };
}

function verificarIdade(anoNascimento) {
  let agora = new Date();
  let anoAtual = agora.getFullYear();

  return anoAtual - anoNascimento;
}
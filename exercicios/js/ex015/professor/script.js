function verificar() {
  var data = new Date();
  var ano_atual = data.getFullYear();
  var formulario_ano = document.getElementById('txt-ano');
  var resultado = document.querySelector('div#resultado');

  if (formulario_ano.value.length == 0 || formulario_ano.value > ano_atual) {
    alert('[ERRO]: verifique os dados e tente novamente!');
  } else {
    var formulario_sexo = document.getElementsByName('radio-sexo');
    var idade = ano_atual - Number(formulario_ano.value);
    var genero = "";
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (formulario_sexo[0].checked) {
      genero = 'Homem';

      if (idade < 3) {
        img.setAttribute('src', '/exercicios/js/ex015/imgs/masculino/bebe.png');
      } else if (idade < 13) {
        img.setAttribute('src', '/exercicios/js/ex015/imgs/masculino/crianca.png');
      } else if (idade < 18) {
        img.setAttribute('src', '/exercicios/js/ex015/imgs/masculino/adolescente.png');
      } else if (idade < 60){
        img.setAttribute('src', '/exercicios/js/ex015/imgs/masculino/adulto.png');
      } else {
        img.setAttribute('src', '/exercicios/js/ex015/imgs/masculino/idoso.png');
      }

    } else if (formulario_sexo[1].checked) {
      genero = 'Mulher';

      if (idade < 3) {
        img.setAttribute('src', '/exercicios/js/ex015/imgs/masculino/bebe.png');
      } else if (idade < 13) {
        img.setAttribute('src', '/exercicios/js/ex015/imgs/masculino/crianca.png');
      } else if (idade < 18) {
        img.setAttribute('src', '/exercicios/js/ex015/imgs/masculino/adolescente.png');
      } else if (idade < 60){
        img.setAttribute('src', '/exercicios/js/ex015/imgs/masculino/adulta.png');
      } else {
        img.setAttribute('src', '/exercicios/js/ex015/imgs/masculino/idosa.png');
      }
    }

    resultado.style.textAlign = 'center';
    resultado.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
    resultado.appendChild(img);
  }
}
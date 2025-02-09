var agora = new Date();
var hora = agora.getHours();
const img = document.querySelector('img');
const body = document.body;

console.log(typeof(hora))

function deixarLetraBranca() {
  // Função para ser usada em fundos escuros
  body.style.color = '#FFFFFF';

  const conteudo = document.querySelector('#conteudo');
  if (conteudo) {
    conteudo.style.color = '#000000';
  }
};

textoHora = document.getElementById('hora');
textoHora.innerHTML = `${hora}`;

if (hora < 7) {
  img.src = "imgs/madrugada.jpg"
  body.style.backgroundColor = "#1C2541";

  deixarLetraBranca();
} else if (hora < 13) {

  img.src = "imgs/manha.jpg";
  body.style.backgroundColor = '#FFD670';

} else if (hora < 17) {

  img.src = "imgs/tarde.jpg";
  body.style.backgroundColor = '#F3722C';

  deixarLetraBranca();
} else {

  img.src = "imgs/noite.jpg";
  body.style.backgroundColor = '#2D1E6B';

  deixarLetraBranca();
}
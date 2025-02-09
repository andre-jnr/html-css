function carregar() {
  var img = document.getElementById('imagem');
  var msg = document.getElementById('msg');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    // bom dia
    img.src = 'imgs/manha.jpg';
    document.body.style.backgroundColor = '#FFD670';
  } else if (hora >= 12 && hora < 18) {
    // boa tarde
    img.src = 'imgs/tarde.jpg';
    document.body.style.backgroundColor = '#F3722C';
  } else {
    // boa noite
    img.src = 'imgs/noite.jpg';
    document.body.style.backgroundColor = '#2D1E6B';
  }
};


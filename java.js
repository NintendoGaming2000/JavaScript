//Harold Sparham G8 Rendu

// Selecteurs

const buttonCou = document.querySelector("btnCou");
const h1 = document.querySelector("h1");
const imageEdel = document.querySelector("Edelgard");
const buttonImg = document.querySelector("btnImg");
const bar = document.querySelector('#bar');

// le variable body contient l'élément 'body' de la page.
var body = document.querySelector('body');

// écoute pour l'evenement pour la barre d'espace
document.addEventListener('keypress', function(event) {
  // si la barre d'espace est appuyée
  if (event.code === 'Space') {
    // genere un couleur aleatoire
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = 'rgb(' + r + ',' + g + ',' + b + ')';

    // changer le fond du body de la page
    body.style.backgroundColor = color;
  }
});

//création du scrollbar
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Evenement pour changer la couleur du titre
//Sur clique sur le boutton
btnCou.addEventListener("click", function() {
    if (h1.style.color =="red") {
        h1.style.color = "green";
    } else {
        h1.style.color ="red";
    }
});

//Evenement pour changer l'image
function changeImage() {
  var image = document.getElementById("Edelgard");
  if (image.src.match("Student")) {
    image.src="Images/Edelgard_Queen.png";
} else {
    image.src="Images/Edelgard_Student.png";
}
}
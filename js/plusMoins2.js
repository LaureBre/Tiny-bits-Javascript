var decompte = 0;
var vmin = 1;
var guess = 0;
var vmax = 100;
var max = 100;
var quizz = Math.floor(Math.random()*100);
var domMessage = document.getElementById("message");
var domFourchette = document.getElementsByClassName("fourchette");

document.getElementById("max100").checked = "checked";

function changeMax(maxRadio) {
  max = maxRadio;
  document.getElementById("afficheMax").innerText = max;
  document.getElementById("guess").max = max;
  document.getElementById("guess").value = 1;
  quizz = Math.floor(Math.random()*max);
  document.getElementById("afficheGuess").innerText = "1";
  domMessage.innerText = '';
  nettoyage();
}

function afficheValeur() {
  document.getElementById("afficheGuess").innerText = document.getElementById("guess").value;
}

function changeGuess() {
  decompte++;
  guess = document.getElementById("guess").value;
  document.getElementById('pasMalin').innerText = '';

  if (guess == quizz) {
    domMessage.innerText = "Bravo ! Vous avez gagné en " + decompte + " coups.";
    if (((max == 100) && (decompte < 10)) || ((max == 500) && (decompte < 13)) || ((max == 1000) && (decompte < 17))) {
      domMessage.style.background = "rgb(0, 255, 77)";
    }
    else {
      domMessage.style.background = "rgb(255, 139, 18)";
      domMessage.innerText += "\n Enfin bravo... Vous auriez pu mieux faire."
    }
    nettoyage();
  }
  else if (guess < quizz) {
    domMessage.innerText = "Votre nombre est trop petit.";
    if (guess < vmin) {
      document.getElementById('pasMalin').innerText = "Voilà qui n\'est pas malin, vous saviez déjà que c\'était plus !";
    };
    vmin = guess;
    for (i = 0; i < domFourchette.length; i++) {
      domFourchette[i].style.width = (vmax - vmin) / max * 100 + "%";
      domFourchette[i].style.marginLeft =  vmin / max * 100 + "%";
    };
    domMessage.style.background = "rgba(255, 223, 8, 0.93)";
    domMessage.style.color = "black";
  }
  else if (guess > quizz) {
    domMessage.innerText = "Votre nombre est trop grand.";
    if (guess > vmax) {
      document.getElementById('pasMalin').innerText = "Voilà qui n\'est pas malin, vous saviez déjà que c\'était plus !";
    };
    vmax = guess;
    for (i = 0; i < domFourchette.length; i++) {
      domFourchette[i].style.width = (vmax - vmin) / max * 100 + "%";
      // domFourchette[i].style.marginLeft =  vmin / max * 100 + "%";
    };
    domMessage.style.background = "rgba(52, 6, 93, 0.98)";
    domMessage.style.color = "white";
  };
  if (decompte == 5) {
    document.getElementById('pasMalin').innerText += '\n 5 coups';
  }
  else if (decompte == 10) {
    document.getElementById('pasMalin').innerText += '\n Déjà 10 coups...';
  };
}

function nettoyage() {
  decompte = 0;
  guess = 0;
  vmin = 1;
  vmax = max;
  quizz = Math.floor(Math.random()*max);
  for (i = 0; i < domFourchette.length; i++) {
    domFourchette[i].style.width = "100%";
    domFourchette[i].style.marginLeft = "0";
  };
  domMessage.style.color = "black";
  document.getElementById('pasMalin').innerText = '';
}

function reInitialise() {
  nettoyage();
  domMessage.style.background = "transparent";
  domMessage.innerText = '';
}

function testNb()
{

  var nombre = Number(document.getElementById("annee").value);
  var domChamp = document.getElementById('affDivers');

  if (!(Number.isInteger(nombre))) {

    domChamp.innerText = (nombre + " n'est pas un nombre entier");
  }
  else if (nombre == '') {

    ddomChamp.innerText = '';
  }
  else if (nombre < 0) {

    domChamp.innerText = (nombre + " n'est pas un nombre positif");
  }
  else if (nombre > 2018) {

    domChamp.innerText = (nombre + " n'est pas encore là !");
  }
  else if (nombre < 1900) {

    domChamp.innerText = ("L\'an " + nombre + " ça fait un peu trop vieux pour Internet.");
  }
  else if ((nombre < 2000) && (nombre >= 1900)) {

    domChamp.innerText = (nombre + " appartient au XXème siècle. \n Ne serions-nous pas entrés dans le XXIème siècle ?");
  }
  else {
    domChamp.innerText = ("Merci de m\'avoir renseigné !");
  }
}

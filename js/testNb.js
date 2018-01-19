function testNb()
{

  var nombre = Number(document.getElementById("nombre").value);

  if (!(Number.isInteger(nombre))) {

    console.log(nombre + " n'est pas un nombre entier");
  }
  else if (nombre < 0) {

    console.log(nombre + " n'est pas un nombre positif");
  }
  else if (nombre > 2018) {

    console.log(nombre + " n'est pas encore là !");
  }
  else if (nombre < 1900) {

    console.log("L\'an " + nombre + " ça fait un peu trop vieux pour Internet.");
  }
  else if ((nombre < 2000) && (nombre >= 1900)) {

    console.log(nombre + " appartient au XXème siècle. \n Ne serions-nous pas entrés dans le XXIème siècle ?");
  }
  else {
    console.log("Merci de m\'avoir renseigné !");
  }
}

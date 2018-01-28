function tva() {
  var tva = Number(document.getElementById('tva').value);

  document.getElementById('affDivers').innerText = ("Le prix TTC est de " + (tva += (tva * .196)) + " euros");
}

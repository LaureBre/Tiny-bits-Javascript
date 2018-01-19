function tva() {
  var tva = Number(prompt("Entrez le prix Hors Taxe :"));

  console.log("Le prix TTC est de " + (tva += (tva * .196)) + " euros");
}

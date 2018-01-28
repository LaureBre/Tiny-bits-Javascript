function conv() {
  var temperature = Number(prompt("Entrez la température en °C :"));

  document.getElementById('affDivers').innerText = temperature + " °C = " + ((temperature * 9 / 5) + 32) + " °F";
}

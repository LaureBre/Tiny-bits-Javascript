
var max = 100;
var quizz;
var tour;
var etat = 1;
var guess;

var guessId = document.getElementById("guess");

function afficheValeur() {
  if (guessId !== 'undefined') {
    // document.getElementById("guess").addEventListener("change", function(){
    //   guess = etatRange;
    //   console.log(guess);
    // });

    document.getElementById("guess").addEventListener("input", function(){
      console.log(document.getElementById("guess").value);
      document.getElementById("affiche").innerHTML = document.getElementById("guess").value;
    });

  };
}

function changeMax(thisValue)
{
  if (thisValue != null) {max = thisValue;};

  document.getElementById("message").innerHTML = "1 - " + max;
}

function plusMoins(etatRange)
{
  // if (thisId != null) {max = document.getElementById(thisId).value;};

  quizz = Math.floor(Math.random() * max);
  tour = 0;

  var guess = Number(etatRange);

  document.getElementById("message").innerHTML = guess;
  // var guess = Number(prompt("Entrez un nombre entre 1 et " + max + " : "));

  // while ((guess !== null) && guess && (guess !== quizz)) {
  //   if ((guess<1) || (guess>=max) || !(Number.isInteger(guess)))  {
  //     document.getElementById("message").innerHTML = "Vous n\'avez pas entré un nombre entre 1 et " + max + ".";

}

var max;

function plusMoins(thisId)
{
    if (thisId != null) {max = document.getElementById(thisId).value;};

    var quizz = Math.floor(Math.random() * max);
    var tour = 0;

    var guess = Number(prompt("Entrez un nombre entre 1 et " + max + " : "));

    while ((guess !== null) && guess && (guess !== quizz)) {
      if ((guess<1) || (guess>=max) || !(Number.isInteger(guess)))  {
        guess = Number(prompt("Vous n\'avez pas entré un nombre entre 1 et " + max + "."));
      }
      else {
        tour++;
        if (guess<quizz) {
          guess = Number(prompt("C\'est trop petit."));
        }
        else {
          guess = Number(prompt("C\'est trop grand."));
        }
      }
    };

    if (guess) {
        console.log("Bravo, vous avez trouvé en " + tour + " coups. C\'était bien " + quizz);
    }
    else {
        console.log("Ok bye !");
    };

    return(thisId);
};

// https://www.torproject.org/docs/debian.html.ena pour update Tor : pb accès

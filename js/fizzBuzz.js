function fizzBuzz() {
  for (i=1;i<=500;i++) { ((i%3==0)&&(i%5==0)) ? console.log("Fizz Buzz") : (i%3==0) ? console.log("Buzz") : (i%5==0) ? console.log("Fizz") : console.log(i);};
}

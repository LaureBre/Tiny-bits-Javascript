document.getElementsByClassName('animal').innerText = "chat";
document.getElementById('image').src = "https://s1.qwant.com/thumbr/0x0/a/8/9bbc178026d77ecd1b082693cbb87d/b_1_q_0_p_0.jpg?u=https%3A%2F%2Fcdn.wordimpress.com%2Fwp-content%2Fuploads%2Fbrowser-popup-150x150.png&q=0&b=1&p=0&a=1";
document.getElementsByName('name').innerHTML = "<p>Hello</p>";
window.setTimeout (function () {
  document.getElementsByTagName('div')[3].style.backgroundColor = "red";
document.getElementsByTagName('div')[0].innerText = "dragon";
}, 5000);
document.write("Ecrit à la fin de la page");

var b = [
  [5, 7, 8, 2, 9, 1],
  [true, false, false, true, false, true]
];
console.log(b[0][2], b[1][2]);
// rend 8 false

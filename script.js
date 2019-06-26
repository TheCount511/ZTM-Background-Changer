var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var css = document.querySelector('h3');
var body = document.getElementById("gradient");
var randomColorButton = document.querySelector('button');

function changeColor() {
    body.style.background = "linear-gradient(to right, " +
        color1.value + ", " + color2.value + " )";
    css.textContent = body.style.background + ";";
}

function randomColor() {
    var number = Math.floor(Math.random() * 246) + Math.floor(Math.random() * 9);
    /*	console.log(number);
    var color = "rgb(" + number + ", " + number + ", " + number + ")";*/
    return number;

}
// changeColor();

randomColorButton.addEventListener("click", function() {

    body.style.background = "linear-gradient(to right, rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + "), rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + "))";
    css.textContent = body.style.background + ";";


});

color1.addEventListener("input", changeColor);

color2.addEventListener("input", function() {
    changeColor();
});
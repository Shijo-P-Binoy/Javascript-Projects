var botton = document.getElementById("ranbutton");
var number = document.getElementById("rannumber");

rannumber.innerHTML = "0";


function generate() {
    var random = Math.floor((Math.random() * 6 + 1));
    return random;
}
botton.addEventListener("click", function () {
    var result = generate();
    rannumber.innerHTML = result;
})



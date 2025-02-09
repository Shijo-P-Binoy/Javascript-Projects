const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "#f8f8f8";

function setColor(color_name) {
  body.style.backgroundColor = color_name;
}


function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = color;
}


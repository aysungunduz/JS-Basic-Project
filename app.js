const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["red", "white", "green", "blue", "yellow", "pink", "purple"];

body.style.backgroundColor = "violet";

button.addEventListener("click", changeBc);

function changeBc() {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
}
console.log("Hello, World!");
let canvas = document.getElementById("canvas");

let xCanvas = 16;
let yCanvas = 16;

window.addEventListener("load", createCanvas);

function createCanvas() {
  for (let i = 0; i < xCanvas; i++)
    for (let j = 0; j < yCanvas; j++) {
      let canvas = document.getElementById("canvas");
      let div = document.createElement("div");
      div.classList.add("cell");
      canvas.append(div);
    }
}

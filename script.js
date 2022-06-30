console.log("Hello, World!");
let canvas = document.getElementById("canvas");

let xCanvas = 32;
let yCanvas = 32;

window.addEventListener("load", createCanvas);

function createCanvas() {
  for (let i = 0; i < xCanvas; i++)
    for (let j = 0; j < yCanvas; j++) {
      let canvas = document.getElementById("canvas");
      let div = document.createElement("div");
      div.classList.add("cell");
      canvas.append(div);
      div.addEventListener("mouseover", () => {
        div.classList.add("dark");
      });
    }
}

// slider code
let slider = document.getElementById("myRange");
let sliderDisplay = document.getElementById("densityDisplay");
sliderDisplay.innerHTML = slider.value;

slider.oninput = function () {
  sliderDisplay.innerHTML = this.value;
};

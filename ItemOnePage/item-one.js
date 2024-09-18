function setup() {
  // Get the canvas that Processing-js will use
  let canvas = createCanvas(400, 400);
  canvas.parent('canvasContainer');
}

//button to main
document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('mainButton');
  button.addEventListener('click', () => {
    window.location.href = "http://127.0.0.1:3000/MainPage/index.html"; // Replace with your desired URL
  });
});

  function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight); //Resize the canvas to the size of the window
    mouseX = width/2;
    mouseY = height/2;
  }


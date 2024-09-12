function setup() {
    createCanvas(window.innerWidth, window.innerHeight); //Create a canvas that is the size of the window
    CanvasCaptureMediaStreamTrack.position(0, 0); //Set the position of the canvas to (0, 0)
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
  }

  function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight); //Resize the canvas to the size of the window
    mouseX = width/2;
    mouseY = height/2;
  }


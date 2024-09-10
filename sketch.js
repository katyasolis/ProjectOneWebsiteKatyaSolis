function setup() {
    createCanvas(window.innerWidth, window.innerHeight); //Create a canvas that is the size of the window
    CanvasCaptureMediaStreamTrack.position(0, 0); //Set the position of the canvas to (0, 0)
    image.style('z-index', '-1');
    image.style('position', 'fixed');
  }

  function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight); //Resize the canvas to the size of the window
    mouseX = width/2;
    mouseY = height/2;
  }
  
  /*function draw() {
    background(220); //Set background color (RGB)
    fill(0);
    ellipse(width/2, height/2, 50, 50); //Draw an ellipse at (200, 200) with width and height of 50
    ellipse(200, 200, 50, 50); //Draw an ellipse at (200, 200) with width and height of 50
  } */
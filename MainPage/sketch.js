

function preload() {
  Camera = loadImage("/Images/Camera Item.png"); // Load the image
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight); //Create a canvas that is the size of the window
    canvas.position(0, 0); //Set the position of the canvas to (0, 0)
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');

    let Camera = select("#cameraObject");

    Camera.mousePressed(() => {
      goToDifferentPage();
    });
  }

  function goToDifferentPage(){
    window.location.href = "http://127.0.0.1:3000/ItemOnePage/item-one.html";
  }

  function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight); //Resize the canvas to the size of the window
    mouseX = width/2;
    mouseY = height/2;
  }




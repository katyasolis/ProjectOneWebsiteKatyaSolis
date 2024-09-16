

function preload() {
  Camera = loadImage("/Images/Camera Item.png"); // Load the image
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight); //Create a canvas that is the size of the window
    canvas.position(0, 0); //Set the position of the canvas to (0, 0)
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');

    let Camera = select("#cameraObject");
    let Mirror = select("#mirrorObject");
    let Shell = select("#shellObject");

    Camera.mousePressed(() => {
      goToDifferentPage();
    });

    Mirror.mousePressed(() => {
      goToDifferentPageTwo();
    });

    Shell.mousePressed(() => {
      goToDifferentPageThree();
    });
  }

  function goToDifferentPage(){
    window.location.href = "http://127.0.0.1:3000/ItemOnePage/item-one.html";
  }

  function goToDifferentPageTwo(){
    window.location.href = "http://127.0.0.1:3000/ItemTwoPage/item-two.html";
  }

  function goToDifferentPageThree(){
    window.location.href = "http://127.0.0.1:3000/ItemThreePage/item-three.html";
  } 

  function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight); //Resize the canvas to the size of the window
    mouseX = width/2;
    mouseY = height/2;
  }




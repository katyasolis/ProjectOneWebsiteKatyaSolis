function setup() {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 800; // Set the width of the canvas
    canvas.height = 600; // Set the height of the canvas

    // Append the canvas to the document body
    document.body.appendChild(canvas);

    // Get the 2D rendering context of the canvas
    const ctx = canvas.getContext('2d');

    // Your code for setting up the canvas goes here

    // Example: Draw a rectangle on the canvas
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 100, 100);
}

// Call the setup function to initialize the canvas
setup();
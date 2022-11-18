function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
}

function draw() {
  ellipse(56, 46, 55, 55);
}
function take_snapshot(){    
  save('student_name.png');
}
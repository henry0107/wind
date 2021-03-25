// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
  createP('Click mouse to apply wind force.');
}
function myFunction() {
  var p,v,a;
  p = document.getElementById("mynumberposition").value;
  document.getElementById("demo2").innerHTML = p;
  v = document.getElementById("mynumbervelocity").value;
  document.getElementById("demo3").innerHTML = v;
  a = document.getElementById("mynumberacceleration").value;
  document.getElementById("demo4").innerHTML =a;
   p = parseFloat(p);
   mover.v = parseFloat(v);
   mover.a = parseFloat(mover.a);
}
function draw() {
  background(51);

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }

  mover.update();
  mover.display();
  mover.checkEdges();
}

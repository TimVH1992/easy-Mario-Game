const canvas = document.getElementById('canvas');
const mario = document.getElementById('mario');

let c = canvas.getContext('2d');
let x = 50;
let y = 50;
let dx = 2;
let dy = 2;

function drawMario(){
  c.drawImage(mario, x, y, 50, 30);
}

function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawMario();
  x += dx;
  y += dy;
}

setInterval(draw, 100);


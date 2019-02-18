const canvas = document.getElementById('canvas');
const mario = document.getElementById('mario');
canvas.width = window.innerWidth / 1.5;
canvas.height = window.innerHeight / 1.5;

let c = canvas.getContext('2d');


window.onload = function(){
  c.fillStyle = "yellow";
  c.fillRect(20, 450, 20, 20);
  c.stroke();
  
  c.fillStyle = "purple";
  c.fillRect(100, 400, 100, 10);
  c.fillRect(200, 350, 100, 10);
  c.fillRect(300, 300, 100, 10);
  c.fillRect(400, 250, 100, 10);
  c.stroke();
  
  c.beginPath();
  c.arc(530, 200, 30, 0, 2 * Math.PI);
  c.strokeStyle = "blue";
  c.fillStyle = "yellow";
  c.stroke();
  c.fill();
};

  let x = 20;
  let y = 400;

  function animate() {
    requestAnimationFrame(animate);

  c.drawImage(mario, x, y, 30, 40);
  y -= 1;
};

animate();



const canvas = document.getElementById('canvas');
const mario = document.getElementById('mario');

canvas.width = (window.innerWidth / 2);
canvas.height = (window.innerHeight / 2);

let c = canvas.getContext('2d');



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
c.stroke();

window.onload = function(){
  c.drawImage(mario, 20, 400, 30, 40);  
};

function grow() {
  return mario.width = 50;

}

mario.addEventListener("click", mario.grow());
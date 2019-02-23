const canvas = document.getElementById('canvas');
const mario = document.getElementById('mario');

let c = canvas.getContext('2d');
let marioX = 50;
let marioY = 130;
let marioSpeedX = 2;

// mario control variables
let marioUp = false;
let marioRight = false;
let marioLeft = false;
let marioDown = false;


window.onload = function(){
  const framesPerSecond = 30;
  setInterval(function() {
    c.clearRect(0, 0, innerWidth, innerHeight);
    drawMario();
    
  }, 1000/framesPerSecond);

  // event listeners
  document.addEventListener('keydown', marioControls, false);

function marioControls(e) {
  // move up
  if (e.key == "Up" || e.key == "ArrowUp") {
    marioUp = true;
  } 
    if (marioUp && marioY > 110) {
        marioY--;
    }
  // move left
  if (e.key == "Left" || e.key == "ArrowLeft") {
    marioLeft = true;
  }  
  if (marioLeft && marioX > 0) {
    marioX--;
  }
  // left and right and up and down ignore eachother
  // move right
  /* if (e.key == "Right" || e.key == "ArrowRight") {
    marioRight = true;
  }
  if (marioRight && marioX < canvas.width) {
    marioX++;
  }  */
}

}




/* function moveMario() {
  marioX = marioX + marioSpeedX;
   if (marioX - 30 > 250 || marioX < 0) {
    marioSpeedX = -marioSpeedX;
  }
} */

function drawMario(){
  c.drawImage(mario, marioX, marioY, 20, 20);
  console.log('I am drawing mario');
  
}
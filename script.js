score=0;
cross=true
document.onkeydown = function(e) {
    console.log("the keycode is", e.keyCode);
  
    if (e.keyCode == 38) {
      let dino = document.querySelector('.dino');
      dino.classList.add('animateDino');
      setTimeout(() => {
        dino.classList.remove('animateDino');
      }, 700);
    }
  
    if (e.keyCode == 39) {
      let dino = document.querySelector('.dino');
      let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
      dino.style.left = dinoX + 45 + "px"; }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 70) + "px";}
  };
  
  setInterval(() => {
    let dino = document.querySelector('.dino');
    let gameOver = document.querySelector('.gameOver');
    let obstacle = document.querySelector('.obstacle');
  
    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
  
    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
  
    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY);
  
    if (offsetX < 50 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove("obstacleAni")
        dino.classList.remove("dinoAni")
    }
    else if( offsetX<50 && cross){
      score+=1;
      updatescore(score);
      cross=false;
      setTimeout(() => {
        cross=true
      }, 1000);
    }
  
  }, 100);
  setTimeout(() => {
    aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.1;
    obstacle.style.animationDuration = newDur + 's';
    console.log('New animation duration: ', newDur)
}, 500);

  


function updatescore(score){
  scoreCont.innerHTML = "Your score : " + score 
}
function updatePlayerPosition() {    
    if(keyLeft.isDown) {
      player.x -= playerSpeed;
    }  
  
    if(keyRight.isDown) {
      player.x += playerSpeed;
    }
  }
  
  function updateBallPosition() {
    ball.x += direction.x * ballSpeed;
    ball.y += direction.y * ballSpeed;
  
    if(ball.x - ball.width / 2 <= 0) {
      direction.x = direction.x * - 1;
    }
  
    if(ball.x + ball.width / 2 >= Game.width) {
      direction.x = direction.x * -1;
    }
  
    if(ball.y + ball.height / 2 >= Game.height) {
      alert("You lost! Press F5 to try again")
    }
  
    //Това забравихме да го направим - без него играта ни има сериозен бъг
    if(ball.y - ball.width /2 < 0 && direction.y < 0) {
      direction.y = direction.y * -1;
    }
  }
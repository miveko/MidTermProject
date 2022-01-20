
function collidePlayerAndBall() {
    if(direction.y > 0) {
      direction.y = direction.y * -1;
    }
  }
  
  function collideBallAndEnemy(ball, enemy) {
    if(direction.y < 0) {
      direction.y = direction.y * -1;
    }
  
    enemy.destroy();
    pos = enemies.indexOf(enemy);
    enemies.splice(pos, 1)
  }
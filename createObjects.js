function createPlayer() {
    player = Game.add.graphics(Game.width / 2, Game.height - 10);
    player.beginFill(0xFF00FF);
    player.drawRect(0, 0, 200, 5);
    Game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
  }
  
 function createBall() {
    ball = Game.add.graphics(Game.width / 2, Game.height / 2);
    ball.beginFill(0xFFFF00);
    ball.drawCircle(0, 0, 50);
    Game.physics.arcade.enable(ball)
    ball.anchor.x = 0.5
    ball.anchor.y = 0.5
  }
  
function createEnemy(x, y) {
    enemy = Game.add.graphics(x, y);
    enemy.beginFill("0x0000FF");
    enemy.drawRect(0, 0, 30, 10)
    Game.physics.arcade.enable(enemy);
    enemies.push(enemy)
  }

  function generateRandomDirection() {
    x = Game.rnd.integerInRange(-10, 10);
    y = Game.rnd.integerInRange(-10, 10);
    //изклюване на стойност 0 за y и x (това също пропуснахме да го направим)
    for(;x == 0 || y == 0;) {
      x = Game.rnd.integerInRange(-10, 10);
      y = Game.rnd.integerInRange(-10, 10);
    }
    direction = new Phaser.Point(x, y);
    direction.normalize();
  }
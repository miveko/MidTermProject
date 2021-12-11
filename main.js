const Game = new Phaser.Game(800, 600, Phaser.AUTO, 'GameCanvas', {create, update }) 

let player;
let playerSpeed = 10;
let ball;
let direction;
let ballSpeed = 5;
let enemies = [];

function create() {
  player = Game.add.graphics(Game.width / 2, Game.height - 10);
  player.beginFill(0xFF00FF);
  player.drawRect(0, 0, 200, 5);
  Game.physics.arcade.enable(player);
  player.body.collideWorldBounds = true;

  ball = Game.add.graphics(Game.width / 2, Game.height / 2);
  ball.beginFill(0xFFFF00);
  ball.drawCircle(0, 0, 50);
  Game.physics.arcade.enable(ball)
  ball.anchor.x = 0.5
  ball.anchor.y = 0.5
  
  keyRight = Game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
  keyLeft = Game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

  for(let xx = 10; xx < Game.width - 50; xx += 40) {
    for(let yy = 5; yy < 50; yy += 20) {
      createEnemy(xx, yy)
    }
  }

  generateRandomDirection();
}

function update() {
  if(enemies.length == 0) {
    alert("CONGRATULATIONS! YOU WIN! Press F5 to start a new game")
  }
  updatePlayerPosition();
  updateBallPosition();
  Game.physics.arcade.collide(player, ball, collidePlayerAndBall)
  Game.physics.arcade.collide(ball, enemies, collideBallAndEnemy)
} 

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

function collidePlayerAndBall() {
  if(direction.y > 0) {
    direction.y = direction.y * -1;
  }
}

function createEnemy(x, y) {
  enemy = Game.add.graphics(x, y);
  enemy.beginFill("0x0000FF");
  enemy.drawRect(0, 0, 30, 10)
  Game.physics.arcade.enable(enemy);
  enemies.push(enemy)
}

function collideBallAndEnemy(ball, enemy) {
  if(direction.y < 0) {
    direction.y = direction.y * -1;
  }

  enemy.destroy();
  pos = enemies.indexOf(enemy);
  enemies.splice(pos, 1)
}
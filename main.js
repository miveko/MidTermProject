const Game = new Phaser.Game(800, 600, Phaser.AUTO, 'GameCanvas', {create, update }) 

let player;
let playerSpeed = 10;
let ball;
let direction;
let ballSpeed = 5;
let enemies = [];

function create() {

  createPlayer()
  createBall() 
  
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